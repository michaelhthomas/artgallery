import * as React from "react";
import { Check, ChevronsUpDown, LoaderCircle } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useSalespersonControllerServiceListSalespeople } from "~/api/queries";
import { ControllerRenderProps } from "react-hook-form";
import { useEffect } from "react";

export function SalespersonSelectInput({
  value,
  onChange,
  onBlur,
  className,
}: Omit<ControllerRenderProps, "value" | "onChange"> & {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!open) {
      onBlur();
    }
  }, [open, onBlur]);

  const { data: salespersons } =
    useSalespersonControllerServiceListSalespeople();

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between",
              {
                "text-muted-foreground": !value,
              },
              className,
            )}
          >
            {salespersons && value
              ? (() => {
                  const selectedSalesperson = salespersons.find(
                    (salesperson) => salesperson.socialSecurityNumber === value,
                  );
                  return selectedSalesperson
                    ? `${selectedSalesperson.firstName} ${selectedSalesperson.lastName}`
                    : "Select salesperson...";
                })()
              : "Select salesperson..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandInput placeholder="Search salespersons..." />
            {salespersons ? (
              <CommandList>
                <CommandEmpty>No salespersons found.</CommandEmpty>
                <CommandGroup>
                  {salespersons.map((salesperson) => (
                    <CommandItem
                      key={salesperson.socialSecurityNumber}
                      value={`${salesperson.firstName} ${salesperson.lastName}`}
                      onSelect={() => {
                        onChange(
                          salesperson.socialSecurityNumber === value
                            ? undefined
                            : salesperson.socialSecurityNumber,
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === salesperson.socialSecurityNumber
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {salesperson.firstName + " " + salesperson.lastName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            ) : (
              <LoaderCircle className="size-8 p-4 animate-spin" />
            )}
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
