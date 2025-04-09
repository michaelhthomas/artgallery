import { Link } from "react-router";
import {
  ArrowLeft,
  Calendar,
  Download,
  Edit,
  Globe,
  Info,
  Share2,
  Tag,
  User,
} from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function ArtworkDetailPage() {
  // In a real app, you would fetch the artwork by ID from a database
  const artwork = {
    id: 1,
    title: "Ephemeral Light #7",
    artist: "Maria Chen",
    medium: "Oil on canvas",
    dimensions: "36 × 48 in",
    year: "2023",
    status: "Available",
    price: "$12,500",
    location: "Main Storage - Rack A3",
    acquisitionDate: "January 15, 2023",
    description:
      "Part of Maria Chen's acclaimed 'Ephemeral Light' series, this work explores the transient nature of illumination in urban environments. The artist uses a palette of muted blues and violets contrasted with vibrant yellows to create a sense of fleeting moments captured in time.",
    exhibitionHistory: [
      {
        name: "New Acquisitions",
        dates: "Mar - May 2023",
        location: "Main Gallery",
      },
      { name: "Light Studies", dates: "Jun - Aug 2023", location: "East Wing" },
    ],
    provenance: "Acquired directly from the artist's studio",
    image: "/placeholder.svg?height=600&width=800",
    additionalImages: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link to="/artworks" className="flex items-center gap-2 font-semibold">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Artworks</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-auto pb-2">
              {artwork.additionalImages.map((img, i) => (
                <img
                  key={i}
                  src={img || "/placeholder.svg"}
                  alt={`${artwork.title} detail ${i + 1}`}
                  className="aspect-square h-24 rounded-md border object-cover"
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{artwork.title}</h1>
              <div className="flex items-center gap-2 text-lg">
                <User className="h-4 w-4" />
                <Link
                  to={`/artists/1`}
                  className="text-primary hover:underline"
                >
                  {artwork.artist}
                </Link>
                <Badge>{artwork.status}</Badge>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-medium">Medium</h3>
                <p className="text-muted-foreground">{artwork.medium}</p>
              </div>
              <div>
                <h3 className="font-medium">Dimensions</h3>
                <p className="text-muted-foreground">{artwork.dimensions}</p>
              </div>
              <div>
                <h3 className="font-medium">Year</h3>
                <p className="text-muted-foreground">{artwork.year}</p>
              </div>
              <div>
                <h3 className="font-medium">Price</h3>
                <p className="text-muted-foreground">{artwork.price}</p>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">{artwork.location}</p>
              </div>
              <div>
                <h3 className="font-medium">Acquisition Date</h3>
                <p className="text-muted-foreground">
                  {artwork.acquisitionDate}
                </p>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Description</h3>
              <p className="text-muted-foreground">{artwork.description}</p>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">Mark as Sold</Button>
              <Button variant="outline" className="flex-1">
                Add to Exhibition
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="details" className="mt-6">
          <TabsList>
            <TabsTrigger value="details">
              <Info className="mr-2 h-4 w-4" />
              Additional Details
            </TabsTrigger>
            <TabsTrigger value="exhibition">
              <Calendar className="mr-2 h-4 w-4" />
              Exhibition History
            </TabsTrigger>
            <TabsTrigger value="provenance">
              <Globe className="mr-2 h-4 w-4" />
              Provenance
            </TabsTrigger>
            <TabsTrigger value="related">
              <Tag className="mr-2 h-4 w-4" />
              Related Works
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Technical Information</CardTitle>
                <CardDescription>
                  Detailed specifications and condition
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="font-medium">Condition</h3>
                  <p className="text-muted-foreground">Excellent</p>
                </div>
                <div>
                  <h3 className="font-medium">Framed</h3>
                  <p className="text-muted-foreground">
                    Yes - Floating frame, natural wood
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Signed</h3>
                  <p className="text-muted-foreground">
                    Yes - Lower right corner
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Certificate of Authenticity</h3>
                  <p className="text-muted-foreground">
                    Yes - Provided by artist
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Insurance Value</h3>
                  <p className="text-muted-foreground">$15,000</p>
                </div>
                <div>
                  <h3 className="font-medium">Inventory Number</h3>
                  <p className="text-muted-foreground">MC-2023-007</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="exhibition" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Exhibition History</CardTitle>
                <CardDescription>
                  Past and current exhibitions featuring this artwork
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {artwork.exhibitionHistory.map((exhibition, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-lg border p-4"
                  >
                    <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">{exhibition.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exhibition.dates}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exhibition.location}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="provenance" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Provenance</CardTitle>
                <CardDescription>
                  Ownership and acquisition history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{artwork.provenance}</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="related" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Related Works</CardTitle>
                <CardDescription>
                  Other works by the same artist or in the same series
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Related artwork"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium">Ephemeral Light #5</h4>
                      <p className="text-sm text-muted-foreground">
                        Maria Chen, 2023
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Related artwork"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium">Ephemeral Light #9</h4>
                      <p className="text-sm text-muted-foreground">
                        Maria Chen, 2023
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Related artwork"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium">Urban Reflections</h4>
                      <p className="text-sm text-muted-foreground">
                        Maria Chen, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
