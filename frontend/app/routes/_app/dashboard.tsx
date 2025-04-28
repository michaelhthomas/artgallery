import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Frame, Grid, ImageIcon, Users } from "lucide-react";
import {
  useSaleControllerServiceGetSalesLastWeek,
  useStatsControllerServiceGetStats,
} from "~/api/queries";
import { Button } from "~/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { formatCurrency } from "~/lib/format";

export const Route = createFileRoute("/_app/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { data: stats } = useStatsControllerServiceGetStats();
  const { data: recentSales } = useSaleControllerServiceGetSalesLastWeek();

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <section className="relative mb-8 overflow-hidden rounded-xl border bg-black p-4 sm:p-6 lg:p-8">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-800/20 blur-3xl"></div>

        <div className="relative flex flex-col items-center gap-4 text-center sm:gap-6">
          <div className="inline-block rounded-full bg-purple-900/30 p-3 text-white backdrop-blur-sm">
            <Frame className="h-8 w-8 text-purple-300 sm:h-10 sm:w-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to{" "}
              <span className="font-pacifico text-purple-300">
                Furman Art Gallery
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-zinc-300">
              {getGreeting()} It&apos;s{" "}
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
              . Discover new artworks, track sales, and manage your gallery all
              in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="gap-2" asChild>
              <Link to="/artworks">
                <ImageIcon className="h-4 w-4" />
                Browse Artworks
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-purple-800/50 bg-black/50 text-white backdrop-blur-sm hover:bg-purple-900/20 hover:text-purple-300"
              asChild
            >
              <Link to="/exhibitions">
                <Calendar className="mr-2 h-4 w-4" />
                Upcoming Exhibitions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Artworks
            </CardTitle>
            <ImageIcon className="h-4 w-4 text-purple-800" />
          </CardHeader>
          <CardContent>
            {stats ? (
              <>
                <div className="text-2xl font-bold">{stats.totalArtworks}</div>
                {stats.newArtworksMonth > 0 && (
                  <p className="text-xs text-muted-foreground">
                    +{stats.newArtworksMonth} this month
                  </p>
                )}
              </>
            ) : (
              <Skeleton className="h-10" />
            )}
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
            {stats ? (
              <>
                <div className="text-2xl font-bold">
                  {stats.activeExhibitions}
                </div>
                {stats.exhibitionsInNextWeek > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {stats.exhibitionsInNextWeek} opening next week
                  </p>
                )}
              </>
            ) : (
              <Skeleton className="h-10" />
            )}
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
            {stats ? (
              <>
                <div className="text-2xl font-bold">{stats.totalArtists}</div>
                {stats.newArtistsMonth > 0 && (
                  <p className="text-xs text-muted-foreground">
                    +{stats.newArtistsMonth} this month
                  </p>
                )}
              </>
            ) : (
              <Skeleton className="h-10" />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Represented Collectors
            </CardTitle>
            <Users className="h-4 w-4 text-purple-800" />
          </CardHeader>
          <CardContent>
            {stats ? (
              <>
                <div className="text-2xl font-bold">
                  {stats.totalCollectors}
                </div>
                {stats.newCollectorsMonth > 0 && (
                  <p className="text-xs text-muted-foreground">
                    +{stats.newCollectorsMonth} this month
                  </p>
                )}
              </>
            ) : (
              <Skeleton className="h-10" />
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>Sales completed in the past 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSales ? (
              recentSales.length > 0 ? (
                recentSales.map((sale) => (
                  <div
                    key={sale.invoiceNumber}
                    className="flex items-center gap-4"
                  >
                    <div className="relative size-24 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={sale.artwork.workImage ?? "/placeholder.svg"}
                        alt={sale.artwork.workTitle}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          {sale.artwork.workTitle}
                        </h3>
                        <p className="font-medium">
                          {sale.price ? formatCurrency(sale.price) : "—"}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          {sale.artwork.artistName} • Sold to {sale.buyerName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {sale.date}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Owned by {sale.artwork.ownerName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Compensation:{" "}
                          {formatCurrency(sale.amountRemittedToOwner ?? 0)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Sold by {sale.salespersonName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Commission: {formatCurrency((sale.price ?? 0) * 0.05)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No sales this week</h1>
              )
            ) : (
              <>
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
