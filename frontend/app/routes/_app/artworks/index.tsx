import NiceModal from "@ebay/nice-modal-react";
import { createFileRoute } from "@tanstack/react-router";
import { Loader2, Plus, Search } from "lucide-react";
import { useState } from "react";
import { useArtworkControllerServiceGetAllArtworks } from "~/api/queries";
import { CreateArtworkModal } from "~/components/artwork/CreateArtworkModal";
import { ArtworkCard } from "~/components/ArtworkCard";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { formatCurrency } from "~/lib/format";

export const Route = createFileRoute("/_app/artworks/")({
  component: ArtworksPage,
});

type FilterType = "all" | "for sale" | "sold" | "returned" | "aged";

function ArtworksPage() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const { data: artworks, refetch } =
    useArtworkControllerServiceGetAllArtworks();

  const filteredArtworks = artworks
    ?.filter((artwork) => {
      switch (selectedFilter) {
        case "all":
          return true;
        case "for sale":
        case "sold":
        case "returned":
          return artwork.status === selectedFilter;
        case "aged": {
          const sixMonthsAgo = new Date();
          sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
          return (
            new Date(artwork.dateListed ?? 0).getTime() < sixMonthsAgo.getTime()
          );
        }
        default:
          return false;
      }
    })
    .filter((artwork) =>
      artwork.workTitle?.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Artworks</h1>
          <Button
            size="sm"
            onClick={() =>
              NiceModal.show(CreateArtworkModal).then(() => refetch())
            }
          >
            <Plus className="size-4" />
            Add Artwork
          </Button>
        </div>
        <div className="flex items-stretch gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search artworks..."
              className="w-full bg-background pl-8"
            />
          </div>
          <Select
            value={selectedFilter}
            onValueChange={(value) => {
              setSelectedFilter(value as FilterType);
            }}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Artworks</SelectItem>
              <SelectItem value="for sale">For Sale</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="returned">Returned</SelectItem>
              <SelectItem value="aged">Held Over 6 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {filteredArtworks ? (
          filteredArtworks.length > 0 ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredArtworks.map((artwork) => (
                  <ArtworkCard key={artwork.id} {...artwork} />
                ))}
              </div>
              <div>
                <div className="text-muted-foreground text-right">
                  Total of Asking Prices:{" "}
                  {formatCurrency(
                    filteredArtworks.reduce(
                      (acc, artwork) => acc + (artwork.askingPrice ?? 0),
                      0,
                    ),
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-muted-foreground">No artworks found.</div>
          )
        ) : (
          <Loader2 className="size-10 animate-spin mx-auto" />
        )}
      </main>
    </div>
  );
}
