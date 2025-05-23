import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Printer } from "lucide-react";
import {
  useArtistControllerServiceGetArtist,
  useArtistControllerServiceGetArtistWorks,
} from "~/api/queries";
import { ArtworkSalesReport } from "~/components/artwork/ArtworkSalesReport";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { formatPhoneNumber } from "~/lib/format";

export const Route = createFileRoute("/_app/artists/$id")({
  component: IndividualArtistSalesReport,
});

function IndividualArtistSalesReport() {
  const { id } = Route.useParams();
  const { data: artist } = useArtistControllerServiceGetArtist({
    id: parseInt(id),
  });
  const { data: works } = useArtistControllerServiceGetArtistWorks({
    id: parseInt(id),
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 print:hidden">
        <Link to="/artists" className="flex items-center gap-2 font-semibold">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Artists</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={window.print}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
        <Card className="w-full max-w-4xl border-zinc-800 print:max-w-none print:border-none">
          <CardHeader>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-2xl">
                  Individual Artist Sales Report
                </CardTitle>
                <CardDescription>
                  Sales data for a specific artist
                </CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">
                Date of Report: {currentDate}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-md border p-4">
              {artist ? (
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Artist Information</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <p>
                        <span className="font-medium">Name:</span>{" "}
                        {artist.firstName} {artist.lastName}
                      </p>
                      <p>
                        <span className="font-medium">Address:</span>{" "}
                        {artist.address ?? "N/A"}
                      </p>
                      {artist.areaCode && artist.telephoneNumber && (
                        <p>
                          <span className="font-medium">Phone:</span>{" "}
                          {formatPhoneNumber(
                            artist.areaCode,
                            artist.telephoneNumber,
                          )}
                        </p>
                      )}
                    </div>
                    <div>
                      <p>
                        <span className="font-medium">Usual Type:</span>{" "}
                        {artist.usualType}
                      </p>
                      <p>
                        <span className="font-medium">Usual Medium:</span>{" "}
                        {artist.usualMedium}
                      </p>
                      <p>
                        <span className="font-medium">Usual Style:</span>{" "}
                        {artist.usualStyle}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full grid gap-2 grid-cols-2">
                  <Skeleton className="h-8 col-span-2" />
                  {Array(6).fill(<Skeleton className="h-4 w-1/2" />)}
                </div>
              )}
            </div>

            <ArtworkSalesReport works={works} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
