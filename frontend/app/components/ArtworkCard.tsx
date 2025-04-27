import { ArtworkResponse } from "~/api/requests";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { formatCurrency } from "~/lib/format";
import { Link } from "@tanstack/react-router";

export function ArtworkCard(artwork: ArtworkResponse) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="aspect-[4/3] w-full">
        <img
          src={artwork.workImage ?? "/placeholder.svg"}
          alt={artwork.workTitle}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{artwork.workTitle}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {artwork.artistName} &bull; {artwork.workYearCompleted}
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="font-medium">Type</div>
            <div className="text-muted-foreground">{artwork.workType}</div>
          </div>
          <div>
            <div className="font-medium">Medium</div>
            <div className="text-muted-foreground">{artwork.workMedium}</div>
          </div>
          <div>
            <div className="font-medium">Style</div>
            <div className="text-muted-foreground">{artwork.workStyle}</div>
          </div>
          <div>
            <div className="font-medium">Dimensions</div>
            <div className="text-muted-foreground">{artwork.workSize}</div>
          </div>
          <div>
            <div className="font-medium">Owner</div>
            <div className="text-muted-foreground">{artwork.ownerName}</div>
          </div>

          <div>
            <div className="font-medium">Date Shown</div>
            <div className="text-muted-foreground">
              {artwork.dateShown ?? "Not shown yet"}
            </div>
          </div>

          <div>
            <div className="font-medium">Date Listed</div>
            <div className="text-muted-foreground">{artwork.dateListed}</div>
          </div>

          <div>
            <div className="font-medium">Asking Price</div>
            <div className="text-muted-foreground">
              {artwork.askingPrice
                ? formatCurrency(artwork.askingPrice)
                : "Not listed"}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link to="/artworks/$id" params={{ id: artwork.id.toString() }}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
