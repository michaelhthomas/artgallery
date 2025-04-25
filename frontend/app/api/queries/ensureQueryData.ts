// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, CollectorControllerService, ProfileControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const ensureUseProfileControllerServiceGetProfileData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(), queryFn: () => ProfileControllerService.getProfile() });
export const ensureUseCollectorControllerServiceGetAllCollectorsData = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }), queryFn: () => CollectorControllerService.getAllCollectors({ q }) });
export const ensureUseCollectorControllerServiceGetCollectorByIdData = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }), queryFn: () => CollectorControllerService.getCollectorById({ id }) });
export const ensureUseArtworkControllerServiceGetAllArtworksData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseArtworkControllerServiceGetAllArtworksKeyFn(), queryFn: () => ArtworkControllerService.getAllArtworks() });
export const ensureUseArtworkControllerServiceGetArtworkByIdData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseArtworkControllerServiceGetArtworkByIdKeyFn({ id }), queryFn: () => ArtworkControllerService.getArtworkById({ id }) });
export const ensureUseArtistControllerServiceGetAllArtistsData = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }), queryFn: () => ArtistControllerService.getAllArtists({ q }) });
export const ensureUseArtistControllerServiceGetArtistData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }), queryFn: () => ArtistControllerService.getArtist({ id }) });
