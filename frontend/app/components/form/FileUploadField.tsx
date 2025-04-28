import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import {
  Dropzone,
  DropzoneDescription,
  DropzoneGroup,
  DropzoneInput,
  DropzoneTitle,
  DropzoneUploadIcon,
  DropzoneZone,
} from "../ui/dropzone";
import {
  FileList,
  FileListAction,
  FileListDescription,
  FileListDescriptionSeparator,
  FileListDescriptionText,
  FileListHeader,
  FileListIcon,
  FileListInfo,
  FileListItem,
  FileListName,
  FileListSize,
} from "../ui/file-list";
import { Check, Image, Loader2, X } from "lucide-react";
import { ApiError, AssetControllerService } from "~/api/requests";
import { useAssetControllerServiceGetAssetInfo } from "~/api/queries";
import { Skeleton } from "../ui/skeleton";

export type FileUploadFieldProps = Omit<
  ControllerRenderProps,
  "value" | "onChange"
> & {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
};

export function FileUploadField(field: FileUploadFieldProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const { data: existingFile } = useAssetControllerServiceGetAssetInfo(
    {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      id: field.value!,
    },
    undefined,
    {
      enabled: !!field.value,
      retry: !!field.value,
    },
  );

  const handleFileChange = (file: File | null) => {
    if (file) {
      setSelectedFile(file);
      setUploadSuccess(false);
      setUploadError("");
      field.onChange("");
      void uploadFile(file);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setUploadSuccess(false);
    setUploadError("");
    field.onChange("");
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setUploadError("");

    try {
      const data = await AssetControllerService.uploadAsset({
        formData: {
          file,
        },
      });

      setUploadSuccess(true);
      field.onChange(data.id);
    } catch (error) {
      if (error instanceof ApiError) {
        setUploadError(`File upload failed: ${error.message}`);
      } else {
        setUploadError("File upload failed");
      }
    } finally {
      setIsUploading(false);
    }
  };

  return selectedFile || field.value ? (
    <FileList>
      <FileListItem>
        <FileListHeader>
          <FileListIcon className="overflow-clip">
            {existingFile?.downloadUrl ? (
              <img
                src={existingFile.downloadUrl}
                alt="File Preview"
                className="aspect-square object-cover"
              />
            ) : (
              <Image />
            )}
          </FileListIcon>
          {selectedFile ? (
            <FileListInfo>
              <FileListName>{selectedFile.name}</FileListName>
              <FileListDescription>
                <FileListSize>{selectedFile.size}</FileListSize>
                <FileListDescriptionSeparator />
                <FileListDescriptionText>
                  {isUploading ? (
                    <>
                      <Loader2 className="size-3 animate-spin" />
                      Uploading...
                    </>
                  ) : uploadSuccess ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <Check className="size-3 text-success" />
                      Uploaded
                    </span>
                  ) : (
                    <span className="text-destructive flex items-center gap-1">
                      <X className="size-3 text-error" />
                      {uploadError}
                    </span>
                  )}
                </FileListDescriptionText>
              </FileListDescription>
            </FileListInfo>
          ) : (
            <FileListInfo>
              <FileListName>
                {existingFile ? (
                  existingFile.filename
                ) : (
                  <Skeleton className="h-4" />
                )}
              </FileListName>
              <FileListDescription>
                {existingFile && (
                  <FileListSize>{existingFile.size}</FileListSize>
                )}
              </FileListDescription>
            </FileListInfo>
          )}
          <FileListAction onClick={handleClear}>
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </FileListAction>
        </FileListHeader>
      </FileListItem>
    </FileList>
  ) : (
    <Dropzone
      accept={{
        "image/*": [".jpg", ".png"],
      }}
      multiple={false}
      onDropAccepted={(acceptedFiles: File[]) => {
        handleFileChange(acceptedFiles[0]);
      }}
    >
      <DropzoneZone>
        <DropzoneInput />
        <DropzoneGroup className="gap-4">
          <DropzoneUploadIcon />
          <DropzoneGroup>
            <DropzoneTitle>Drop files here or click to upload</DropzoneTitle>
            <DropzoneDescription>
              You can upload files up to 10MB in size. Supported formats: JPG,
              PNG.
            </DropzoneDescription>
          </DropzoneGroup>
        </DropzoneGroup>
      </DropzoneZone>
    </Dropzone>
  );
}
