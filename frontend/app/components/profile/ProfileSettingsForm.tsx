import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProfileResponse, ProfileUpdateRequest } from "~/api/requests";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User, Upload, Trash2, Save } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useProfileControllerServiceUpdateProfile } from "~/api/queries";
import { StatusButton } from "../ui/status-button";
import { toast } from "sonner";
import { isApiValidationError, setFormErrors } from "~/lib/utils";

const profileSettingsSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.string().email(),
  avatarUrl: z.string(),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(8).max(100),
  newPassword: z.string().min(8).max(100),
  confirmNewPassword: z.string().min(8).max(100),
});

const withPasswordChangeSchema = profileSettingsSchema
  .merge(passwordSchema)
  .refine(
    (data) => {
      if (data.newPassword && data.confirmNewPassword) {
        return data.newPassword === data.confirmNewPassword;
      }
      return true;
    },
    {
      message: "Passwords do not match",
      path: ["confirmNewPassword"],
    },
  );

type FormType = z.infer<typeof profileSettingsSchema> &
  Partial<z.infer<typeof passwordSchema>>;

export type ProfileSettingsFormProps = {
  profile: ProfileResponse;
  refetch: () => Promise<unknown>;
};

const passwordDefaultValues: z.infer<typeof passwordSchema> = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export function ProfileSettingsForm(props: ProfileSettingsFormProps) {
  const { mutate, status } = useProfileControllerServiceUpdateProfile({
    onSuccess: async (data) => {
      toast.success("Profile updated successfully");
      await props.refetch();
      form.reset({ ...data, ...passwordDefaultValues });
    },
    onError: (error) => {
      if (isApiValidationError(error)) {
        setFormErrors(form, error.body);
      }
      toast.error("Failed to update profile");
    },
  });
  const form = useForm<FormType>({
    resolver: (values, ...args) => {
      const schema =
        values.currentPassword ||
        values.newPassword ||
        values.confirmNewPassword
          ? withPasswordChangeSchema
          : profileSettingsSchema;

      return zodResolver(schema)(values, ...args);
    },
    defaultValues: { ...props.profile, ...passwordDefaultValues },
  });

  function onSubmit(data: ProfileUpdateRequest) {
    mutate({ requestBody: data });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mt-6 border-zinc-800">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="avatarUrl"
              render={({ field }) => (
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={field.value} alt="Profile picture" />
                      <AvatarFallback className="text-lg">
                        <User className="h-10 w-10" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-lg font-medium">Profile Picture</div>
                    <div className="text-sm text-muted-foreground">
                      Upload a new avatar or remove your current one
                    </div>
                    <div className="flex gap-2">
                      <FormItem>
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2"
                          asChild
                          role="button"
                        >
                          <FormLabel>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload
                          </FormLabel>
                        </Button>
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = () => {
                                  field.onChange(reader.result as string);
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </FormControl>
                      </FormItem>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2"
                        onClick={() => {
                          field.onChange("");
                        }}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            />

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your current password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your new password"
                      {...field}
                    />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters long.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <StatusButton status={status} type="submit">
              <Save className="size-4" />
              Save Changes
            </StatusButton>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
