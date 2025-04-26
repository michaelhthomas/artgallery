import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Save } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { withMask } from "use-mask-input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useCollectorControllerServiceCreateCollector } from "~/api/queries";
import StateInput from "../form/StateInput";
import { CollectorCreateRequest } from "~/api/requests";
import { StatusButton } from "../ui/status-button";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const maskedNumeric = z
  .string()
  .optional()
  .transform((value) => value?.replace(/\D/g, ""))
  .transform((value) => (value === "" ? undefined : value));

const createCollectorSchema = z.object({
  interviewDate: z.string().optional(),
  interviewerName: z.string().optional(),
  firstName: z.string().min(2, "First name is required").max(100),
  lastName: z.string().min(2, "Last name is required").max(100),
  areaCode: maskedNumeric.pipe(z.string().length(3).optional()),
  telephoneNumber: maskedNumeric.pipe(z.string().length(7).optional()),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: maskedNumeric.pipe(z.string().length(5).optional()),
  socialSecurityNumber: maskedNumeric.pipe(z.string().length(9)),
  preferredArtistFirstName: z.string().optional(),
  preferredArtistLastName: z.string().optional(),
  collectionMedium: z.string().optional(),
  collectionType: z.string().optional(),
  collectionStyle: z.string().optional(),
});

export const CreateCollectorModal = NiceModal.create(() => {
  const modal = useModal();
  const { mutate, status } = useCollectorControllerServiceCreateCollector({
    onSuccess: () => {
      toast.success("Collector created successfully");
      modal.resolve();
      void modal.hide();
    },
  });
  const form = useForm<
    z.input<typeof createCollectorSchema>,
    unknown,
    CollectorCreateRequest
  >({
    resolver: zodResolver(createCollectorSchema),
    defaultValues: {
      interviewDate: new Date().toISOString().split("T")[0],
      interviewerName: "",
      firstName: "",
      lastName: "",
      areaCode: "",
      telephoneNumber: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      socialSecurityNumber: "",
      preferredArtistFirstName: "",
      preferredArtistLastName: "",
      collectionMedium: "",
      collectionType: "",
      collectionStyle: "",
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
            Collector Information Form
          </DialogTitle>
          <DialogDescription>
            Record contact information and data about the collector&apos;s
            collection
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              mutate({ requestBody: data });
            })}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="interviewDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Interview</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interviewerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Interviewer</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter interviewer name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="gap-0.5">
                      Collector First Name
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
                      Collector Last Name
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

            <div className="grid grid-cols-3 gap-4">
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
                      <Input {...field} maxLength={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
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
                  <FormItem className="col-span-2">
                    <FormLabel>Number</FormLabel>
                    <FormControl ref={withMask("999-9999")}>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="socialSecurityNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="gap-0.5">
                    Social Security Number
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl ref={withMask("999-99-9999")}>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="collectionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection Type</FormLabel>
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
                name="collectionMedium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection Medium</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Oil, Watercolor" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collectionStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection Style</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Abstract, Realism" />
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
                <Save className="h-4 w-4" />
                Save
              </StatusButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
});
