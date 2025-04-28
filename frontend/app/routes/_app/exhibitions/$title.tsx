import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar } from "lucide-react";
import { ShowControllerService } from "~/api/requests";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Separator } from "~/components/ui/separator";
import { formatCurrency } from "~/lib/format";

export const Route = createFileRoute("/_app/exhibitions/$title")({
  component: ExhibitionDetailPage,
  loader: async ({ params }) => {
    const { title } = params;
    const data = await ShowControllerService.getShowDetails({ title });
    return { data };
  },
});

function ExhibitionDetailPage() {
  const {
    data: { show: exhibition, artworks },
  } = Route.useLoaderData();

  // Helper function to get status badge color
  // const getStatusBadgeVariant = (status: string) => {
  //   switch (status) {
  //     case "Current":
  //       return "default";
  //     case "Upcoming":
  //       return "outline";
  //     case "Past":
  //       return "secondary";
  //     default:
  //       return "secondary";
  //   }
  // };

  const totalRevenue = artworks.reduce(
    (acc, work) => acc + (work.askingPrice ?? 0),
    0,
  );
  const summary = {
    worksSold: artworks.filter((work) => work.status === "sold").length,
    totalWorks: artworks.length,
    totalRevenue: totalRevenue,
    averagePrice: artworks.length > 0 ? totalRevenue / artworks.length : 0,
  };

  // Calculate sales percentage
  const salesPercentage = Math.round(
    (summary.worksSold / summary.totalWorks) * 100,
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link
          to="/exhibitions"
          className="flex items-center gap-2 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Exhibitions</span>
        </Link>
        {/* <div className="ml-auto flex items-center gap-2">
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
        </div> */}
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {/* Exhibition Header */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={exhibition.images[0] || "/placeholder.svg"}
                alt={exhibition.title}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-auto pb-2">
              {exhibition.images.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${exhibition.title} image ${String(i + 1)}`}
                    className="aspect-square h-24 rounded-md border object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{exhibition.title}</h1>
                {/* <Badge variant={getStatusBadgeVariant(exhibition.status)}>
                  {exhibition.status}
                </Badge> */}
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Calendar className="h-4 w-4" />
                <span>
                  {exhibition.openingDate} - {exhibition.closingDate}
                </span>
              </div>
              {/* <div className="mt-1 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{exhibition.location}</span>
              </div> */}
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Theme</h3>
              <p className="text-muted-foreground">{exhibition.theme}</p>
            </div>
            {/* <div>
              <h3 className="font-medium">Description</h3>
              <p className="text-muted-foreground">{exhibition.description}</p>
            </div> */}
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium">Exhibition Summary</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">
                      Total Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {summary.totalWorks}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">
                      Works Sold
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {summary.worksSold}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {formatCurrency(summary.totalRevenue)}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Sales Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {summary.worksSold} of {summary.totalWorks} works sold
                      </span>
                      <span className="text-sm font-medium">
                        {salesPercentage}%
                      </span>
                    </div>
                    <Progress value={salesPercentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Exhibited Artworks</CardTitle>
            <CardDescription>
              All artworks included in this exhibition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {artworks.map((artwork) => (
                <Link
                  to="/artworks/$id"
                  params={{ id: artwork.id.toString() }}
                  key={artwork.id}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg border transition-colors group-hover:border-primary">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={
                          artwork.workImage?.downloadUrl ?? "/placeholder.svg"
                        }
                        alt={artwork.workTitle}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium group-hover:text-primary">
                          {artwork.workTitle}
                        </h3>
                        <Badge
                          variant={
                            artwork.status === "Sold" ? "default" : "outline"
                          }
                        >
                          {artwork.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {artwork.artistName}
                      </p>
                      {artwork.askingPrice && (
                        <p className="mt-1 text-sm">
                          {formatCurrency(artwork.askingPrice)}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
