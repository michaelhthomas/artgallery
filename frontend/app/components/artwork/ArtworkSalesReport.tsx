import { ArtworkResponse } from "~/api/requests";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { formatCurrency } from "~/lib/format";
import { Skeleton } from "../ui/skeleton";

export type ArtworkSalesReportProps = {
  works?: ArtworkResponse[];
};

export function ArtworkSalesReport(props: ArtworkSalesReportProps) {
  const soldWorks = props.works?.filter((work) => work.status === "sold");
  const returnedWorks = props.works?.filter(
    (work) => work.status === "returned",
  );
  const worksForSale = props.works?.filter(
    (work) => work.status === "for sale",
  );

  return (
    <>
      {/* Works Sold */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Works Sold</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date Listed</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Medium</TableHead>
                <TableHead>Style</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Asking Price</TableHead>
                <TableHead className="text-right">Sell Price</TableHead>
                <TableHead>Date Sold</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {soldWorks ? (
                <>
                  {soldWorks.map((work) => (
                    <TableRow key={work.id}>
                      <TableCell className="font-medium">
                        {work.workTitle}
                      </TableCell>
                      <TableCell>{work.dateListed}</TableCell>
                      <TableCell>{work.workType}</TableCell>
                      <TableCell>{work.workMedium}</TableCell>
                      <TableCell>{work.workStyle}</TableCell>
                      <TableCell>{work.workYearCompleted}</TableCell>
                      <TableCell className="text-right">
                        {work.askingPrice
                          ? formatCurrency(work.askingPrice)
                          : "—"}
                      </TableCell>
                      <TableCell className="text-right">
                        {work.salePrice ? formatCurrency(work.salePrice) : "—"}
                      </TableCell>
                      <TableCell>{work.dateSold}</TableCell>
                    </TableRow>
                  ))}
                  {soldWorks.length > 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="font-bold text-right">
                        Total of Sales:{" "}
                        {formatCurrency(
                          soldWorks.reduce(
                            (sum, work) => sum + (work.salePrice ?? 0),
                            0,
                          ),
                        )}
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="font-bold text-center">
                        No sales yet.
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ) : (
                <TableRow>
                  {Array(9).fill(
                    <TableCell>
                      <Skeleton className="h-4" />
                    </TableCell>,
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Works Returned */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Works Returned</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date Listed</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Medium</TableHead>
                <TableHead>Style</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Asking Price</TableHead>
                <TableHead>Date Returned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {returnedWorks ? (
                <>
                  {returnedWorks.map((work) => (
                    <TableRow key={work.id}>
                      <TableCell className="font-medium">
                        {work.workTitle}
                      </TableCell>
                      <TableCell>{work.dateListed}</TableCell>
                      <TableCell>{work.workType}</TableCell>
                      <TableCell>{work.workMedium}</TableCell>
                      <TableCell>{work.workStyle}</TableCell>
                      <TableCell>{work.workYearCompleted}</TableCell>
                      <TableCell className="text-right">
                        {work.askingPrice
                          ? formatCurrency(work.askingPrice)
                          : "—"}
                      </TableCell>
                      <TableCell>{work.dateReturned}</TableCell>
                    </TableRow>
                  ))}
                  {returnedWorks.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center">
                        No returned works found.
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ) : (
                <TableRow>
                  {Array(8).fill(
                    <TableCell>
                      <Skeleton className="h-4" />
                    </TableCell>,
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Works for Sale */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Works for Sale</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date Listed</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Medium</TableHead>
                <TableHead>Style</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Asking Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {worksForSale ? (
                <>
                  {worksForSale.map((work) => (
                    <TableRow key={work.id}>
                      <TableCell className="font-medium">
                        {work.workTitle}
                      </TableCell>
                      <TableCell>{work.dateListed}</TableCell>
                      <TableCell>{work.workType}</TableCell>
                      <TableCell>{work.workMedium}</TableCell>
                      <TableCell>{work.workStyle}</TableCell>
                      <TableCell>{work.workYearCompleted}</TableCell>
                      <TableCell className="text-right">
                        {work.askingPrice
                          ? formatCurrency(work.askingPrice)
                          : "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                  {worksForSale.length > 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="font-bold text-right">
                        Total of Asking Prices:{" "}
                        {formatCurrency(
                          worksForSale.reduce(
                            (sum, work) => sum + (work.askingPrice ?? 0),
                            0,
                          ),
                        )}
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center">
                        No works for sale
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ) : (
                <TableRow>
                  {Array(7).fill(
                    <TableCell>
                      <Skeleton className="h-4" />
                    </TableCell>,
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
