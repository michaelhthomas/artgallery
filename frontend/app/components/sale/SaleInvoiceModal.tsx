import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { useSaleControllerServiceCreateSale } from "~/api/queries";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Save } from "lucide-react";
import { StatusButton } from "../ui/status-button";
import { Input } from "../ui/input";
import { BuyerSelectInput } from "../form/BuyerSelectInput";
import { SalespersonSelectInput } from "../form/SalespersonSelectInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const saleInvoiceSchema = z.object({
  buyerId: z.number(),
  saleDate: z.string().nonempty(),
  salePrice: z.string().regex(/^\d+(\.\d{2})?$/),
  saleTax: z.string().regex(/^\d+(\.\d{2})?$/),
  salespersonSsn: z.string(),
});

export type SaleInvoiceModalProps = {
  artworkId: number;
};

export const SaleInvoiceModal = NiceModal.create(
  ({ artworkId }: SaleInvoiceModalProps) => {
    const modal = useModal();
    const { mutate, status } = useSaleControllerServiceCreateSale({
      onError: () => {
        toast.error("Failed to create sale");
      },
      onSuccess: () => {
        toast.success("Sale created successfully");
        modal.resolve();
        void modal.hide();
      },
    });
    const form = useForm({
      resolver: zodResolver(saleInvoiceSchema),
      defaultValues: {
        buyerId: undefined,
        saleDate: "",
        salePrice: "",
        saleTax: "",
        salespersonSsn: undefined,
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
            <DialogTitle className="text-2xl">Sale Invoice Form</DialogTitle>
            <DialogDescription>
              Record information about an artwork sale
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => {
                mutate({ requestBody: { ...data, artworkId } });
              })}
              className="space-y-6"
            >
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="buyerId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Buyer</FormLabel>
                      <FormControl>
                        <BuyerSelectInput {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="salePrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sale Price</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="$0.00" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="saleTax"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sale Tax</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="$0.00" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="salespersonSsn"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Salesperson</FormLabel>
                      <FormControl>
                        <SalespersonSelectInput {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="saleDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sale Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
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
  },
);
