import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Download,
  Edit,
  Loader2,
  Share2,
  User,
} from "lucide-react";
import { useArtworkControllerServiceGetArtworkById } from "~/api/queries";

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
import { formatCurrency } from "~/lib/format";

export const Route = createFileRoute("/_app/artworks/$id")({
  component: ArtworkDetailPage,
});

function ArtworkDetailPage() {
  const { id } = Route.useParams();
  const { data } = useArtworkControllerServiceGetArtworkById({
    id: parseInt(id),
  });

  const artwork = data?.work;
  const sale = data?.sale;
  const shownIn = data?.shownIn;

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
        {artwork ? (
          <>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border">
                  <img
                    src={artwork.workImage ?? "/placeholder.svg"}
                    alt={artwork.workTitle}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">{artwork.workTitle}</h1>
                    <Badge className="h-fit">{artwork.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-lg text-muted-foreground">
                    <User className="h-4 w-4" />
                    <Link
                      to={`/artists/$id`}
                      params={{ id: artwork.artistId.toString() }}
                      className="hover:text-primary hover:underline"
                    >
                      {artwork.artistName}
                    </Link>
                    <span>&bull;</span>
                    {artwork.workYearCompleted}
                  </div>
                </div>
                <Separator />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="font-medium">Type</h3>
                    <p className="text-muted-foreground">{artwork.workType}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Medium</h3>
                    <p className="text-muted-foreground">
                      {artwork.workMedium}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Style</h3>
                    <p className="text-muted-foreground">{artwork.workStyle}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Dimensions</h3>
                    <p className="text-muted-foreground">{artwork.workSize}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Price</h3>
                    <p className="text-muted-foreground">
                      {artwork.askingPrice
                        ? formatCurrency(artwork.askingPrice)
                        : "Not Listed"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Listing Date</h3>
                    <p className="text-muted-foreground">
                      {artwork.dateListed}
                    </p>
                  </div>
                </div>
                <Separator />
                {/* <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-muted-foreground">{artwork.description}</p>
                </div> */}
                <div className="flex gap-2">
                  <Button className="flex-1">Mark as Sold</Button>
                  <Button variant="outline" className="flex-1">
                    Add to Exhibition
                  </Button>
                </div>
              </div>
            </div>
            <Tabs defaultValue="sale" className="mt-6">
              <TabsList>
                <TabsTrigger value="sale">
                  <DollarSign className="mr-2 size-4" />
                  Sale Details
                </TabsTrigger>
                <TabsTrigger value="exhibition">
                  <Calendar className="mr-2 size-4" />
                  Exhibition History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sale" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sale Details</CardTitle>
                    <CardDescription>
                      Information on the sale details of the artwork.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {sale ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <h3 className="font-medium">Invoice Number</h3>
                          <p className="text-muted-foreground">
                            {sale.invoiceNumber}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Sale Date</h3>
                          <p className="text-muted-foreground">{sale.date}</p>
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Amount Remitted to Owner
                          </h3>
                          <p className="text-muted-foreground">
                            {sale.amountRemittedToOwner
                              ? formatCurrency(sale.amountRemittedToOwner)
                              : "N/A"}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Sale Price</h3>
                          <p className="text-muted-foreground">
                            {sale.price ? formatCurrency(sale.price) : "N/A"}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Sale Tax</h3>
                          <p className="text-muted-foreground">
                            {sale.tax ? formatCurrency(sale.tax) : "N/A"}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Salesperson</h3>
                          <p className="text-muted-foreground">
                            {sale.salespersonName}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Buyer</h3>
                          <p className="text-muted-foreground">
                            {sale.buyerName}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-muted-foreground">
                        Artwork has not been sold yet.
                      </div>
                    )}
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
                    {shownIn && shownIn.length > 0 ? (
                      shownIn.map((show, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 rounded-lg border p-4"
                        >
                          <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                          <div>
                            <h3 className="font-medium">{show.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {show.openingDate} — {show.closingDate}
                            </p>
                            <p className="text-sm">
                              Theme:{" "}
                              <span className="text-muted-foreground">
                                {show.theme}
                              </span>
                            </p>
                            <p className="text-sm">
                              Featured artist:{" "}
                              <span className="text-muted-foreground">
                                {show.featuredArtistName}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground">
                        This artwork has not been featured in any exhibitions
                        yet.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <Loader2 className="size-10 mx-auto animate-spin" />
        )}
      </main>
    </div>
  );
}
