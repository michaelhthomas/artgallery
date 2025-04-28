import NiceModal from "@ebay/nice-modal-react";
import { keepPreviousData } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Loader2, Plus, Search } from "lucide-react";
import { useState } from "react";
import { useArtistControllerServiceGetAllArtists } from "~/api/queries";
import { GetAllArtistsResponse } from "~/api/requests";
import { CreateArtistModal } from "~/components/artist/CreateArtistModal";
import ArtistCard from "~/components/ArtistCard";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Route = createFileRoute("/_app/artists/")({
  component: ArtistsPage,
});

function ArtistsPage() {
  const [query, setQuery] = useState("");
  const { data: artists, refetch } =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
    useArtistControllerServiceGetAllArtists<GetAllArtistsResponse>(
      {
        q: query || undefined,
      },
      undefined,
      {
        placeholderData: keepPreviousData,
      },
    );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Artists</h1>
          <Button
            size="sm"
            onClick={() =>
              NiceModal.show(CreateArtistModal).then(() => refetch())
            }
          >
            <Plus className="size-4" />
            Add Artist
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search artists..."
              className="w-full bg-background pl-8"
            />
          </div>
        </div>
        {artists ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
        ) : (
          <Loader2 className="size-10 animate-spin mx-auto" />
        )}
      </main>
    </div>
  );
}
