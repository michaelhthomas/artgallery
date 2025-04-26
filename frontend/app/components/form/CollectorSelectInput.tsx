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
import { useCollectorControllerServiceGetAllCollectors } from "~/api/queries";
import { ControllerRenderProps } from "react-hook-form";
import { useEffect } from "react";

export function CollectorSelectInput({
  value,
  onChange,
  onBlur,
}: Omit<ControllerRenderProps, "value" | "onChange"> & {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!open) {
      onBlur();
    }
  }, [open, onBlur]);

  const { data: collectors } = useCollectorControllerServiceGetAllCollectors();

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("justify-between", {
              "text-muted-foreground": !value,
            })}
          >
            {collectors && value
              ? (() => {
                  const selectedCollector = collectors.find(
                    (collector) => collector.socialSecurityNumber === value,
                  );
                  return selectedCollector
                    ? `${selectedCollector.firstName} ${selectedCollector.lastName}`
                    : "Select collector...";
                })()
              : "Select collector..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandInput placeholder="Search collectors..." />
            {collectors ? (
              <CommandList>
                <CommandEmpty>No collectors found.</CommandEmpty>
                <CommandGroup>
                  {collectors.map((collector) => (
                    <CommandItem
                      key={collector.socialSecurityNumber}
                      value={`${collector.firstName} ${collector.lastName}`}
                      onSelect={() => {
                        onChange(
                          collector.socialSecurityNumber === value
                            ? undefined
                            : collector.socialSecurityNumber,
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === collector.socialSecurityNumber
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {collector.firstName + " " + collector.lastName}
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
