import { CollectorResponse } from "~/api/requests";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { formatCurrency, formatPhoneNumber } from "~/lib/format";
import { Link } from "@tanstack/react-router";

export function CollectorCard(collector: CollectorResponse) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {collector.firstName} {collector.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {collector.address && (
          <div>
            <div className="font-medium">Address</div>
            <div className="text-muted-foreground">{collector.address}</div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {collector.areaCode && collector.telephoneNumber && (
            <div className="space-y-1">
              <div className="font-medium">Phone Number</div>
              <div className="text-muted-foreground">
                {formatPhoneNumber(
                  collector.areaCode,
                  collector.telephoneNumber,
                )}
              </div>
            </div>
          )}

          <div className="space-y-1">
            <div className="font-medium">Medium</div>
            <Badge variant="outline">{collector.collectionMedium}</Badge>
          </div>
          <div className="space-y-1">
            <div className="font-medium">Style</div>
            <Badge variant="outline">{collector.collectionStyle}</Badge>
          </div>
          <div className="space-y-1">
            <div className="font-medium">Type</div>
            <Badge variant="outline">{collector.collectionType}</Badge>
          </div>
        </div>
        <div>
          <div className="font-medium">Sales Last Year</div>
          <div className="text-muted-foreground">
            {formatCurrency(collector.salesLastYear)}
          </div>
        </div>
        <div>
          <div className="font-medium">Sales Year-To-Date</div>
          <div className="text-muted-foreground">
            {formatCurrency(collector.salesYearToDate)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to="/collectors/$id" params={{ id: collector.id }}>
            Profile
          </Link>
        </Button>
        {/* <Button size="sm" className="flex-1">
          Artworks
        </Button> */}
      </CardFooter>
    </Card>
  );
}
