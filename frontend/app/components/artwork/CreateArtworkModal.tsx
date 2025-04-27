import { z } from "zod";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "../ui/separator";
import { ArtistSelectInput } from "../form/ArtistSelectInput";
import { CollectorSelectInput } from "../form/CollectorSelectInput";
import { useArtworkControllerServiceCreateArtwork } from "~/api/queries";
import { toast } from "sonner";
import { StatusButton } from "../ui/status-button";
import { Save } from "lucide-react";
import { ArtworkCreateRequest } from "~/api/requests";
import { FileUploadField } from "../form/FileUploadField";

const createArtworkSchema = z.object({
  artistId: z.number(),

  workImage: z.string().optional(),
  workTitle: z.string().min(2).max(50),
  workYearCompleted: z.string().length(4),
  workMedium: z.string().min(2).max(15),
  workStyle: z.string().min(2).max(15),
  workType: z.string().min(2).max(20),
  workSize: z.string().min(2).max(15),

  collectorSocialSecurityNumber: z
    .string()
    .length(9)
    .or(z.literal(""))
    .optional(),

  dateListed: z.string().optional(),
  askingPrice: z
    .string()
    .regex(/^\$?[\d,]+(\.\d{2})?$/, "Invalid currency format")
    .or(z.literal(""))
    .optional(),
});

export const CreateArtworkModal = NiceModal.create(() => {
  const modal = useModal();
  const { mutate, status } = useArtworkControllerServiceCreateArtwork({
    onSuccess: () => {
      form.reset();
      toast.success("Artwork created successfully!");
      modal.resolve();
      void modal.hide();
    },
    onError: () => {
      toast.error("Failed to create artwork");
    },
  });
  const form = useForm<ArtworkCreateRequest>({
    resolver: zodResolver(createArtworkSchema),
    defaultValues: {
      artistId: 0,
      workImage: undefined,
      workTitle: "",
      workYearCompleted: "",
      workMedium: "",
      workStyle: "",
      workType: "",
      workSize: "",
      collectorSocialSecurityNumber: "",
      askingPrice: "",
      dateListed: "",
    },
  });

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={(open) => {
        if (!open) void modal.hide();
      }}
    >
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Artwork Information Form
          </DialogTitle>
          <DialogDescription>
            Add a new artwork to the gallery
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              mutate({ requestBody: data });
            })}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="workImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artwork Image</FormLabel>
                  <FormControl>
                    <FileUploadField {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workTitle"
              render={({ field }) => (
                <FormItem required>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter artwork title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="artistId"
                render={({ field }) => (
                  <FormItem required>
                    <FormLabel>Artist</FormLabel>
                    <FormControl>
                      <ArtistSelectInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workYearCompleted"
                render={({ field }) => (
                  <FormItem required>
                    <FormLabel>Year Completed</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        maxLength={4}
                        placeholder="Enter year completed"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workSize"
                render={({ field }) => (
                  <FormItem required>
                    <FormLabel>Size</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. 10 x 10 in" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workType"
                render={({ field }) => (
                  <FormItem required>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Painting, Sculpture"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workMedium"
                render={({ field }) => (
                  <FormItem required>
                    <FormLabel>Medium</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Oil, Watercolor" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workStyle"
                render={({ field }) => (
                  <FormItem required>
                    <FormLabel>Style</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Abstract, Realism" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Owner Information</h3>
              <p className="text-sm text-muted-foreground">
                If owned by someone other than the artist, please complete this
                section with the owner information
              </p>
            </div>

            <FormField
              control={form.control}
              name="collectorSocialSecurityNumber"
              render={({ field }) => (
                <FormItem className="w-64">
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <CollectorSelectInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Gallery Information</h3>
              <p className="text-sm text-muted-foreground">
                If the piece is chosen to be offered by the gallery, please
                complete this section
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateListed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Listed</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="askingPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asking Price</FormLabel>
                    <FormControl>
                      {/* TODO: currency mask */}
                      <Input {...field} placeholder="$0.00" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="sm:justify-between">
              <Button
                variant="outline"
                type="reset"
                onClick={() => {
                  form.reset();
                }}
              >
                Clear Form
              </Button>
              <StatusButton status={status} type="submit">
                <Save className="size-4" />
                Save
              </StatusButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
});
