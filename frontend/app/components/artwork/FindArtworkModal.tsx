import NiceModal from "@ebay/nice-modal-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArtworkCard } from "../ArtworkCard";
import { useArtworkControllerServiceSearch } from "~/api/queries";
import { Skeleton } from "../ui/skeleton";

type ArtworkSearchRequest = {
  artistName?: string;
  type?: string;
  medium?: string;
  style?: string;
};

export const FindArtworkModal = NiceModal.create(() => {
  const modal = NiceModal.useModal();
  const form = useForm<ArtworkSearchRequest>();
  const [query, setQuery] = useState<ArtworkSearchRequest | null>();
  const { data: results, isLoading } = useArtworkControllerServiceSearch(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    query!,
    undefined,
    {
      enabled: !!query,
      retry: !!query,
    },
  );

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={(open) => {
        if (!open) void modal.hide();
        // once transition is complete, remove modal to reset state
        setTimeout(modal.remove, 1000);
      }}
    >
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Find Your Artwork</DialogTitle>
          <DialogDescription>
            Find artworks that match your unique tastes.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              setQuery(data);
            })}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="artistName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artist Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usual Type</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Painting, Sculpture"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="medium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usual Medium</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Oil, Watercolor" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usual Style</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Abstract, Realism" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Search</Button>
            </div>
          </form>
        </Form>

        {(results != null || isLoading) && (
          <div>
            <h1 className="text-lg font-bold mb-4">Results</h1>

            {results != null ? (
              results.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {results.map((result) => (
                    <ArtworkCard key={result.id} {...result} />
                  ))}
                </div>
              ) : (
                <p>No results found.</p>
              )
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <Skeleton className="w-full h-48" />
                <Skeleton className="w-full h-48" />
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
});
