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
import { useArtistControllerServiceGetAllArtists } from "~/api/queries";
import { ControllerRenderProps } from "react-hook-form";
import { useEffect } from "react";
import NiceModal from "@ebay/nice-modal-react";
import { CreateArtistModal } from "../artist/CreateArtistModal";

export function ArtistSelectInput({
  value,
  onChange,
  onBlur,
}: Omit<ControllerRenderProps, "value" | "onChange"> & {
  value: number;
  onChange: (value: number | undefined) => void;
}) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!open) {
      onBlur();
    }
  }, [open, onBlur]);

  const { data: artists, refetch } = useArtistControllerServiceGetAllArtists();

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
            {artists && value
              ? (() => {
                  const selectedArtist = artists.find(
                    (artist) => artist.id === value,
                  );
                  return selectedArtist
                    ? `${selectedArtist.firstName} ${selectedArtist.lastName}`
                    : "Select artist...";
                })()
              : "Select artist..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandInput placeholder="Search artists..." />
            {artists ? (
              <CommandList>
                <CommandEmpty>
                  No artists found.
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => {
                      void NiceModal.show(CreateArtistModal).then(() => {
                        void refetch();
                      });
                    }}
                  >
                    Create new artist
                  </Button>
                </CommandEmpty>
                <CommandGroup>
                  {artists.map((artist) => (
                    <CommandItem
                      key={artist.id}
                      value={`${artist.firstName} ${artist.lastName}`}
                      onSelect={() => {
                        onChange(artist.id === value ? undefined : artist.id);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === artist.id ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {artist.firstName + " " + artist.lastName}
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
