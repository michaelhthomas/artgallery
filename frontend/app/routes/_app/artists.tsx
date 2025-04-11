import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search } from "lucide-react";
import ArtistCard from "~/components/ArtistCard";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export const Route = createFileRoute("/_app/artists")({
  component: ArtistsPage,
});

function ArtistsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Artists</h1>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Artist
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search artists..."
              className="w-full bg-background pl-8"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Artists</SelectItem>
              <SelectItem value="represented">Represented</SelectItem>
              <SelectItem value="exhibiting">Currently Exhibiting</SelectItem>
              <SelectItem value="emerging">Emerging</SelectItem>
              <SelectItem value="established">Established</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
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

const artists = [
  {
    id: 1,
    name: "Maria Chen",
    specialty: "Contemporary Painting",
    represented: "Since 2018",
    works: "32 artworks",
    nationality: "Canadian",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "James Wilson",
    specialty: "Mixed Media, Installation",
    represented: "Since 2020",
    works: "18 artworks",
    nationality: "American",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Sofia Patel",
    specialty: "Abstract Painting",
    represented: "Since 2019",
    works: "24 artworks",
    nationality: "British-Indian",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "David Lee",
    specialty: "Sculpture",
    represented: "Since 2015",
    works: "15 artworks",
    nationality: "Korean-American",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    specialty: "Watercolor, Drawing",
    represented: "Since 2021",
    works: "12 artworks",
    nationality: "Spanish",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Marcus Johnson",
    specialty: "Digital Art, Photography",
    represented: "Since 2022",
    works: "8 artworks",
    nationality: "American",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Yuki Tanaka",
    specialty: "Oil Painting, Mixed Media",
    represented: "Since 2017",
    works: "28 artworks",
    nationality: "Japanese",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Claire Fontaine",
    specialty: "Installation, Conceptual Art",
    represented: "Since 2016",
    works: "14 artworks",
    nationality: "French",
    image: "/placeholder.svg?height=300&width=300",
  },
];
