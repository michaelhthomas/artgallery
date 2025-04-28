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
import { useBuyerControllerServiceGetAllBuyers } from "~/api/queries";
import { ControllerRenderProps } from "react-hook-form";
import { useEffect } from "react";

export function BuyerSelectInput({
  value,
  onChange,
  onBlur,
  className,
}: Omit<ControllerRenderProps, "value" | "onChange"> & {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!open) {
      onBlur();
    }
  }, [open, onBlur]);

  const { data: buyers } = useBuyerControllerServiceGetAllBuyers();

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
            {buyers && value
              ? (() => {
                  const selectedBuyer = buyers.find(
                    (buyer) => buyer.id === value,
                  );
                  return selectedBuyer
                    ? `${selectedBuyer.firstName} ${selectedBuyer.lastName}`
                    : "Select buyer...";
                })()
              : "Select buyer..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandInput placeholder="Search buyers..." />
            {buyers ? (
              <CommandList>
                <CommandEmpty>No buyers found.</CommandEmpty>
                <CommandGroup>
                  {buyers.map((buyer) => (
                    <CommandItem
                      key={buyer.id}
                      value={`${buyer.firstName} ${buyer.lastName}`}
                      onSelect={() => {
                        onChange(buyer.id === value ? undefined : buyer.id);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === buyer.id ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {buyer.firstName + " " + buyer.lastName}
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
