import { z } from "zod";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";

import { Input } from "~/components/ui/input";
import { toast } from "sonner";
import { useMailingListServiceSignupForMailingList } from "~/api/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailingListSignupRequest } from "~/api/requests";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import StateInput from "../form/StateInput";
import { withMask } from "use-mask-input";
import { StatusButton } from "../ui/status-button";

const maskedNumeric = z
  .string()
  .optional()
  .transform((value) => value?.replace(/\D/g, ""))
  .transform((value) => (value === "" ? undefined : value));

export const mailingListSignupSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(15, "First name cannot exceed 15 characters")
    .trim(),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Last name cannot exceed 20 characters")
    .trim(),

  areaCode: maskedNumeric.pipe(
    z.string().max(3, "Area code cannot exceed 3 digits").optional(),
  ),

  telephoneNumber: maskedNumeric.pipe(
    z.string().max(7, "Telephone number cannot exceed 7 digits").optional(),
  ),

  street: z
    .string()
    .max(50, "Street address cannot exceed 50 characters")
    .optional(),

  city: z.string().max(30, "City name cannot exceed 30 characters").optional(),

  state: z.string().max(2, "Please use two-letter state code").optional(),

  zipCode: z.string().max(10, "Zip code is too long").optional(),

  preferredArtistFirstName: z
    .string()
    .max(30, "Preferred artist's first name cannot exceed 30 characters")
    .optional(),

  preferredArtistLastName: z
    .string()
    .max(30, "Preferred artist's last name cannot exceed 30 characters")
    .optional(),

  preferredMedium: z
    .string()
    .max(15, "Preferred medium cannot exceed 15 characters")
    .optional(),

  preferredStyle: z
    .string()
    .max(15, "Preferred style cannot exceed 15 characters")
    .optional(),

  preferredType: z
    .string()
    .max(20, "Preferred type cannot exceed 20 characters")
    .optional(),
});

export function MailingListSignup() {
  const { mutate, status, isSuccess } =
    useMailingListServiceSignupForMailingList({
      onSuccess: () => {
        toast.success("Subscription successful!", {
          description: "Thank you for joining our mailing list.",
        });
        form.reset();
      },
      onError: () => {
        toast.error("Subscription failed!", {
          description: "Please try again later.",
        });
      },
    });

  const form = useForm<
    z.input<typeof mailingListSignupSchema>,
    unknown,
    MailingListSignupRequest
  >({
    resolver: zodResolver(mailingListSignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      areaCode: "",
      telephoneNumber: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      preferredArtistFirstName: "",
      preferredArtistLastName: "",
      preferredMedium: "",
      preferredStyle: "",
      preferredType: "",
    },
  });

  const onSubmit = (data: MailingListSignupRequest) => {
    mutate({ requestBody: data });
  };

  return (
    <div className="mx-auto max-w-xl">
      {isSuccess ? (
        <div className="rounded-lg bg-purple-900/30 p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-purple-800/50 p-3">
              <Mail className="h-6 w-6" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-bold">Thank You for Subscribing!</h3>
          <p className="text-zinc-300">
            You&apos;ve been added to our mailing list. We&apos;ll keep you
            updated with the latest exhibitions and events.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="gap-0.5">
                      First Name
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter first name" />
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
                    <FormLabel className="gap-0.5">
                      Last Name
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter last name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter street address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter city" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <StateInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip</FormLabel>
                    <FormControl>
                      <Input {...field} maxLength={5} placeholder="Enter zip" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="areaCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telephone: Area Code</FormLabel>
                    <FormControl ref={withMask("(999)")}>
                      <Input {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telephoneNumber"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel>Number</FormLabel>
                    <FormControl ref={withMask("999-9999")}>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="preferredArtistFirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Artist First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Vincent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredArtistLastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Artist Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Van Gogh" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="preferredType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Type</FormLabel>
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
                name="preferredMedium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Medium</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Oil, Watercolor" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Style</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Abstract, Realism" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <StatusButton
              type="submit"
              className="w-full"
              size="lg"
              status={status}
            >
              Subscribe to Newsletter
            </StatusButton>

            <p className="text-center text-xs text-zinc-400">
              By subscribing, you agree consent to receive updates from Furman
              Art Gallery.
            </p>
          </form>
        </Form>
      )}
    </div>
  );
}
