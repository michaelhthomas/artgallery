import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Plus } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const Route = createFileRoute("/_app/exhibitions")({
  component: ExhibitionsPage,
});

function ExhibitionsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Furman Art Gallery</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Exhibition
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Exhibitions</h1>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar View
          </Button>
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
                <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pastExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function ExhibitionCard({ exhibition }) {
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

const currentExhibitions = [
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

const upcomingExhibitions = [
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

const pastExhibitions = [
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
