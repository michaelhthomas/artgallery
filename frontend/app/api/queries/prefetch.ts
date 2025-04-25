// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { ArtistControllerService, CollectorControllerService, ProfileControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseProfileControllerServiceGetProfile = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(), queryFn: () => ProfileControllerService.getProfile() });
export const prefetchUseCollectorControllerServiceGetAllCollectors = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }), queryFn: () => CollectorControllerService.getAllCollectors({ q }) });
export const prefetchUseCollectorControllerServiceGetCollectorById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }), queryFn: () => CollectorControllerService.getCollectorById({ id }) });
export const prefetchUseArtistControllerServiceGetAllArtists = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }), queryFn: () => ArtistControllerService.getAllArtists({ q }) });
export const prefetchUseArtistControllerServiceGetArtist = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }), queryFn: () => ArtistControllerService.getArtist({ id }) });
