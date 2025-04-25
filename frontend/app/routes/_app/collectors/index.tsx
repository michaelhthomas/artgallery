import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search } from "lucide-react";

import { Button } from "~/components/ui/button";
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
import { GetAllCollectorsResponse } from "~/api/requests";
import { keepPreviousData } from "@tanstack/react-query";
import CollectorCard from "~/components/CollectorCard";
import { CreateCollectorModal } from "~/components/collector/CreateCollectorModal";
import NiceModal from "@ebay/nice-modal-react";

export const Route = createFileRoute("/_app/collectors/")({
  component: CollectorsPage,
});

function CollectorsPage() {
  const [query, setQuery] = useState("");
  const { data: collectors, refetch } =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
    useCollectorControllerServiceGetAllCollectors<GetAllCollectorsResponse>(
      {
        q: query || undefined,
      },
      undefined,
      {
        placeholderData: keepPreviousData,
      },
    );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Collectors</h1>
          <Button
            size="sm"
            onClick={() =>
              NiceModal.show(CreateCollectorModal).then(() => refetch())
            }
          >
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
