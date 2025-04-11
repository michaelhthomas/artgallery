import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Plus } from "lucide-react";
import ExhibitionCard, {
  ExhibitionCardProps,
} from "~/components/ExhibitionCard";

import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const Route = createFileRoute("/_app/exhibitions")({
  component: ExhibitionsPage,
});

type Exhibition = ExhibitionCardProps & { id: number };

function ExhibitionsPage() {
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
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} {...exhibition} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} {...exhibition} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pastExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} {...exhibition} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

const currentExhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Chromatic Visions",
    dates: "Mar 15 - May 10, 2024",
    location: "Main Gallery",
    artists: "Group Exhibition (12 artists)",
    curator: "Sarah Johnson",
    status: "Current",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "New Perspectives",
    dates: "Apr 1 - Jun 15, 2024",
    location: "East Wing",
    artists: "Emerging Artists Showcase (8 artists)",
    curator: "Michael Chen",
    status: "Current",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Retrospective: Claire Fontaine",
    dates: "Feb 10 - Apr 30, 2024",
    location: "West Gallery",
    artists: "Claire Fontaine",
    curator: "Robert Williams",
    status: "Current",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const upcomingExhibitions: Exhibition[] = [
  {
    id: 4,
    title: "Digital Frontiers",
    dates: "Jun 1 - Aug 15, 2024",
    location: "Media Lab",
    artists: "Various Digital Artists (6 artists)",
    curator: "Tanya Rodriguez",
    status: "Upcoming",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Material Matters",
    dates: "Jul 10 - Sep 30, 2024",
    location: "Sculpture Garden",
    artists: "International Sculptors (5 artists)",
    curator: "David Lee",
    status: "Upcoming",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const pastExhibitions: Exhibition[] = [
  {
    id: 6,
    title: "Abstract Expressions",
    dates: "Nov 5, 2023 - Jan 20, 2024",
    location: "Main Gallery",
    artists: "Various Artists (10 artists)",
    curator: "Sarah Johnson",
    status: "Past",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Urban Landscapes",
    dates: "Sep 15 - Dec 1, 2023",
    location: "East Wing",
    artists: "James Wilson, Maria Chen, Sofia Patel",
    curator: "Michael Chen",
    status: "Past",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Light & Space",
    dates: "Jul 1 - Oct 15, 2023",
    location: "West Gallery",
    artists: "Elena Rodriguez, Yuki Tanaka",
    curator: "Robert Williams",
    status: "Past",
    image: "/placeholder.svg?height=200&width=300",
  },
];
