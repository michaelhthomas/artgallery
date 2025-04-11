import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export type ArtistCardProps = {
  name: string;
  image: string | null;
  specialty: string;
  represented: string;
  works: string;
  nationality: string;
};

export default function ArtistCard(artist: ArtistCardProps) {
  return (
    <Card>
      <div className="aspect-square w-full">
        <img
          src={artist.image ?? "/placeholder.svg"}
          alt={artist.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div>
          <div className="font-medium">Specialty</div>
          <div className="text-muted-foreground">{artist.specialty}</div>
        </div>
        <div>
          <div className="font-medium">Representation</div>
          <div className="text-muted-foreground">{artist.represented}</div>
        </div>
        <div>
          <div className="font-medium">Works in Collection</div>
          <div className="text-muted-foreground">{artist.works}</div>
        </div>
        <div>
          <div className="font-medium">Nationality</div>
          <div className="text-muted-foreground">{artist.nationality}</div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Profile
        </Button>
        <Button size="sm" className="flex-1">
          Artworks
        </Button>
      </CardFooter>
    </Card>
  );
}
