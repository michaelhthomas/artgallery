import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Grid, ImageIcon, Users } from "lucide-react";
import ArtistCard from "~/components/ArtistCard";
import ArtworkCard from "~/components/ArtworkCard";
import ExhibitionCard from "~/components/ExhibitionCard";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const Route = createFileRoute("/_app/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Artworks
            </CardTitle>
            <ImageIcon className="h-4 w-4 text-purple-800" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Exhibitions
            </CardTitle>
            <Grid className="h-4 w-4 text-purple-800" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 opening next week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Represented Artists
            </CardTitle>
            <Users className="h-4 w-4 text-purple-800" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-purple-800" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Next: Opening Reception (Apr 15)
            </p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="artworks" className="space-y-4">
        <TabsList className="bg-muted">
          <TabsTrigger value="artworks">Recent Artworks</TabsTrigger>
          <TabsTrigger value="exhibitions">Current Exhibitions</TabsTrigger>
          <TabsTrigger value="artists">Featured Artists</TabsTrigger>
        </TabsList>
        <TabsContent value="artworks" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ArtworkCard
              title="Ephemeral Light #7"
              artist="Maria Chen"
              medium="Oil on canvas"
              dimensions="36 × 48 in"
              year="2023"
              image="/placeholder.svg?height=400&width=300"
            />
            <ArtworkCard
              title="Urban Fragments"
              artist="James Wilson"
              medium="Mixed media"
              dimensions="24 × 36 in"
              year="2023"
              image="/placeholder.svg?height=400&width=300"
            />
            <ArtworkCard
              title="Resonance in Blue"
              artist="Sofia Patel"
              medium="Acrylic on panel"
              dimensions="30 × 40 in"
              year="2024"
              image="/placeholder.svg?height=400&width=300"
            />
          </div>
          <Button
            variant="outline"
            className="w-full hover:bg-purple-900/20 hover:text-purple-300"
          >
            View All Artworks
          </Button>
        </TabsContent>
        <TabsContent value="exhibitions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ExhibitionCard
              title="Chromatic Visions"
              dates="Mar 15 - May 10, 2024"
              artists="Group Exhibition"
              location="Main Gallery"
              curator="John Doe"
              status="Current"
              image="/placeholder.svg?height=200&width=300"
            />
            <ExhibitionCard
              title="New Perspectives"
              dates="Apr 1 - Jun 15, 2024"
              artists="Emerging Artists Showcase"
              location="East Wing"
              curator="John Doe"
              status="Current"
              image="/placeholder.svg?height=200&width=300"
            />
            <ExhibitionCard
              title="Retrospective: Claire Fontaine"
              dates="Feb 10 - Apr 30, 2024"
              artists="Claire Fontaine"
              location="West Gallery"
              curator="John Doe"
              status="Current"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
          <Button
            variant="outline"
            className="w-full hover:bg-purple-900/20 hover:text-purple-300"
          >
            View All Exhibitions
          </Button>
        </TabsContent>
        <TabsContent value="artists" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ArtistCard
              name="Maria Chen"
              specialty="Contemporary Painting"
              represented="Since 2018"
              works="32 artworks in collection"
              nationality="Chinese"
              image="/placeholder.svg?height=300&width=300"
            />
            <ArtistCard
              name="James Wilson"
              specialty="Mixed Media, Installation"
              represented="Since 2020"
              works="18 artworks in collection"
              nationality="American"
              image="/placeholder.svg?height=300&width=300"
            />
            <ArtistCard
              name="Sofia Patel"
              specialty="Abstract Painting"
              represented="Since 2019"
              works="24 artworks in collection"
              nationality="Indian"
              image="/placeholder.svg?height=300&width=300"
            />
          </div>
          <Button
            variant="outline"
            className="w-full hover:bg-purple-900/20 hover:text-purple-300"
          >
            View All Artists
          </Button>
        </TabsContent>
      </Tabs>
    </main>
  );
}
