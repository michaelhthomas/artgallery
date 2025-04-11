import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type ExhibitionCardProps = {
  title: string;
  dates: string;
  location: string;
  artists: string;
  curator: string;
  image: string;
  status: "Current" | "Upcoming" | "Past";
};

export default function ExhibitionCard(exhibition: ExhibitionCardProps) {
  return (
    <Card>
      <div className="aspect-video w-full">
        <img
          src={exhibition.image || "/placeholder.svg"}
          alt={exhibition.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{exhibition.title}</CardTitle>
          <Badge
            variant={
              exhibition.status === "Current"
                ? "default"
                : exhibition.status === "Upcoming"
                ? "outline"
                : "secondary"
            }
          >
            {exhibition.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <div className="font-medium">Dates</div>
            <div className="text-muted-foreground">{exhibition.dates}</div>
          </div>
          <div>
            <div className="font-medium">Location</div>
            <div className="text-muted-foreground">{exhibition.location}</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Artists</div>
          <div className="text-muted-foreground">{exhibition.artists}</div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Curator</div>
          <div className="text-muted-foreground">{exhibition.curator}</div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Details
        </Button>
        <Button size="sm" className="flex-1">
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}
