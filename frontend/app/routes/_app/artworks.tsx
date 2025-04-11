import { createFileRoute } from "@tanstack/react-router";
import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react";
import ArtworkCard from "~/components/ArtworkCard";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Route = createFileRoute("/_app/artworks")({
  component: ArtworksPage,
});

function ArtworksPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Artworks</h1>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Artwork
          </Button>
        </div>
        <div className="flex items-stretch gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search artworks..."
              className="w-full bg-background pl-8"
            />
          </div>
          <Button variant="outline" size="sm" className="h-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-auto">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Sort
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button variant="outline" className="mx-auto">
            Load More
          </Button>
        </div>
      </main>
    </div>
  );
}

const artworks = [
  {
    id: 1,
    title: "Ephemeral Light #7",
    artist: "Maria Chen",
    medium: "Oil on canvas",
    dimensions: "36 × 48 in",
    year: "2023",
    status: "Available",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Urban Fragments",
    artist: "James Wilson",
    medium: "Mixed media",
    dimensions: "24 × 36 in",
    year: "2023",
    status: "On Loan",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Resonance in Blue",
    artist: "Sofia Patel",
    medium: "Acrylic on panel",
    dimensions: "30 × 40 in",
    year: "2024",
    status: "In Exhibition",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Structural Harmony",
    artist: "David Lee",
    medium: "Sculpture, steel",
    dimensions: "24 × 18 × 18 in",
    year: "2022",
    status: "Sold",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "Chromatic Field Study",
    artist: "Elena Rodriguez",
    medium: "Watercolor on paper",
    dimensions: "18 × 24 in",
    year: "2023",
    status: "Available",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "Temporal Shift",
    artist: "Marcus Johnson",
    medium: "Digital print",
    dimensions: "40 × 60 in",
    year: "2024",
    status: "Available",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    title: "Concrete Abstraction #3",
    artist: "Yuki Tanaka",
    medium: "Oil and wax on linen",
    dimensions: "48 × 36 in",
    year: "2023",
    status: "In Exhibition",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    title: "Fragmented Memory",
    artist: "Claire Fontaine",
    medium: "Mixed media installation",
    dimensions: "Variable",
    year: "2021",
    status: "On Loan",
    image: "/placeholder.svg?height=400&width=300",
  },
];
