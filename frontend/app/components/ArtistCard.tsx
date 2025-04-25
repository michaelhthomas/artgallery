import { Artist } from "~/api/requests";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { formatCurrency, formatPhoneNumber } from "~/lib/format";
import { Badge } from "./ui/badge";

export default function ArtistCard(artist: Artist) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {artist.firstName} {artist.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {artist.street && artist.zip && (
          <div>
            <div className="font-medium">Address</div>
            <div className="text-muted-foreground">
              {artist.street}, {artist.zip.city}, {artist.zip.state}{" "}
              {artist.zip.zip}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {artist.areaCode && artist.telephoneNumber && (
            <div className="space-y-1">
              <div className="font-medium">Phone Number</div>
              <div className="text-muted-foreground">
                {formatPhoneNumber(artist.areaCode, artist.telephoneNumber)}
              </div>
            </div>
          )}

          <div className="space-y-1">
            <div className="font-medium">Medium</div>
            <Badge variant="outline">{artist.usualMedium}</Badge>
          </div>
          <div className="space-y-1">
            <div className="font-medium">Style</div>
            <Badge variant="outline">{artist.usualStyle}</Badge>
          </div>
          <div className="space-y-1">
            <div className="font-medium">Type</div>
            <Badge variant="outline">{artist.usualType}</Badge>
          </div>
        </div>
        <div>
          <div className="font-medium">Sales Last Year</div>
          <div className="text-muted-foreground">
            {formatCurrency(artist.salesLastYear)}
          </div>
        </div>
        <div>
          <div className="font-medium">Sales Year-To-Date</div>
          <div className="text-muted-foreground">
            {formatCurrency(artist.salesYearToDate)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 mt-auto">
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
