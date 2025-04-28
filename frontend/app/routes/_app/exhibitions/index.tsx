import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Plus } from "lucide-react";
import { ShowControllerService } from "~/api/requests";
import ExhibitionCard from "~/components/ExhibitionCard";

import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const Route = createFileRoute("/_app/exhibitions/")({
  component: ExhibitionsPage,
  loader: async () => {
    const exhibitions = await ShowControllerService.getAllShows();
    return { exhibitions };
  },
});

function ExhibitionsPage() {
  const { exhibitions } = Route.useLoaderData();

  const currentExhibitions = exhibitions.filter(
    (exhibition) =>
      new Date(exhibition.openingDate).getTime() <= Date.now() &&
      new Date(exhibition.closingDate).getTime() >= Date.now(),
  );
  const upcomingExhibitions = exhibitions.filter(
    (exhibition) => new Date(exhibition.openingDate).getTime() > Date.now(),
  );
  const pastExhibitions = exhibitions.filter(
    (exhibition) => new Date(exhibition.closingDate).getTime() < Date.now(),
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Exhibitions</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar View
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Exhibition
            </Button>
          </div>
        </div>
        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pastExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.title} {...exhibition} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="current" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.title} {...exhibition} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.title} {...exhibition} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
