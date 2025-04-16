import { Artist } from "~/api/requests";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function ArtistCard(artist: Artist) {
  return (
    <Card>
      <div className="aspect-square w-full">
        {/* <img
          src={artist.image ?? "/placeholder.svg"}
          alt={artist.name}
          className="h-full w-full object-cover"
        /> */}
      </div>
      <CardHeader>
        <CardTitle>
          {artist.firstName} {artist.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div>
          <div className="font-medium">Medium</div>
          <div className="text-muted-foreground">{artist.usualMedium}</div>
        </div>
        <div>
          <div className="font-medium">Style</div>
          <div className="text-muted-foreground">{artist.usualStyle}</div>
        </div>
        <div>
          <div className="font-medium">Type</div>
          <div className="text-muted-foreground">{artist.usualType}</div>
        </div>
        <div>
          <div className="font-medium">Sales YTD</div>
          <div className="text-muted-foreground">{artist.salesYearToDate}</div>
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
