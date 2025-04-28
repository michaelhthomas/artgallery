import { ShowResponse } from "~/api/requests";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "@tanstack/react-router";

export default function ExhibitionCard(exhibition: ShowResponse) {
  return (
    <Card>
      <div className="aspect-video w-full grid grid-col-2">
        {exhibition.images.map((src) => (
          <img
            key={src}
            src={src}
            alt={exhibition.title}
            className="object-cover"
          />
        ))}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{exhibition.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <div className="font-medium">Opening Date</div>
            <div className="text-muted-foreground">
              {exhibition.openingDate}
            </div>
          </div>
          <div>
            <div className="font-medium">Closing Date</div>
            <div className="text-muted-foreground">
              {exhibition.closingDate}
            </div>
          </div>

          {exhibition.featuredArtistName && (
            <div className="text-sm">
              <div className="font-medium">Featured Artist</div>
              <div className="text-muted-foreground">
                {exhibition.featuredArtistName}
              </div>
            </div>
          )}
          {exhibition.theme && (
            <div className="text-sm">
              <div className="font-medium">Theme</div>
              <div className="text-muted-foreground">{exhibition.theme}</div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to="/exhibitions/$title" params={{ title: exhibition.title }}>
            Details
          </Link>
        </Button>
        {/* <Button size="sm" className="flex-1">
          Manage
        </Button> */}
      </CardFooter>
    </Card>
  );
}
