import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { User, Phone } from "lucide-react";
import { Collector } from "~/api/requests";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function CollectorCard({ collector }: { collector: Collector }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-12 w-12">
          {/* <AvatarImage src={collector.avatar} alt={collector.name} /> */}
          <AvatarFallback>
            <User className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-base">
            {collector.firstName} {collector.lastName}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            {collector.collectionStyle}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {/* <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{collector.email}</span>
        </div> */}
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>
            ({collector.areaCode}) {collector.telephoneNumber}
          </span>
        </div>
        <div className="pt-2">
          <div className="font-medium">Collection</div>
          <div className="text-muted-foreground">
            {collector.collectionType}
          </div>
        </div>
        <div>
          <div className="font-medium">Sales YTD</div>
          <div className="text-muted-foreground">
            {collector.salesYearToDate}
          </div>
        </div>
        <div>
          <div className="font-medium">Sales Last Year</div>
          <div className="text-muted-foreground">{collector.salesLastYear}</div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Profile
        </Button>
        <Button size="sm" className="flex-1">
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
}
