import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export type ArtworkCardProps = {
  title: string;
  artist: string;
  medium: string;
  dimensions: string;
  year: string;
  image?: string;
  status?: string;
};

export default function ArtworkCard(artwork: ArtworkCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[3/4] w-full">
        <img
          src={artwork.image ?? "/placeholder.svg"}
          alt={artwork.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{artwork.title}</CardTitle>
        <div className="text-sm text-muted-foreground">{artwork.artist}</div>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="font-medium">Medium</div>
            <div className="text-muted-foreground">{artwork.medium}</div>
          </div>
          <div>
            <div className="font-medium">Year</div>
            <div className="text-muted-foreground">{artwork.year}</div>
          </div>
          <div>
            <div className="font-medium">Dimensions</div>
            <div className="text-muted-foreground">{artwork.dimensions}</div>
          </div>
          <div>
            <div className="font-medium">Status</div>
            <div className="text-muted-foreground">{artwork.status}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
