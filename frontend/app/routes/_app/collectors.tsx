import { createFileRoute } from "@tanstack/react-router";
import { Phone, Plus, Search, User } from "lucide-react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useCollectorControllerServiceGetAllCollectors } from "~/api/queries";
import { useState } from "react";
import { Collector, GetAllCollectorsResponse } from "~/api/requests";
import { keepPreviousData } from "@tanstack/react-query";

export const Route = createFileRoute("/_app/collectors")({
  component: CollectorsPage,
});

function CollectorsPage() {
  const [query, setQuery] = useState("");
  const { data: collectors } =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
    useCollectorControllerServiceGetAllCollectors<GetAllCollectorsResponse>(
      {
        q: query || undefined,
      },
      undefined,
      {
        placeholderData: keepPreviousData,
      }
    );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Collectors</h1>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Collector
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search collectors..."
              className="w-full bg-background pl-8"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Collectors</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="institutional">Institutional</SelectItem>
              <SelectItem value="new">New (Last 12 Months)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collectors?.map((collector) => (
            <CollectorCard
              key={collector.socialSecurityNumber}
              collector={collector}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function CollectorCard({ collector }: { collector: Collector }) {
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
