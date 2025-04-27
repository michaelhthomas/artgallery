// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, CollectorControllerService, ProfileControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseProfileControllerServiceGetProfile = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(), queryFn: () => ProfileControllerService.getProfile() });
export const prefetchUseCollectorControllerServiceGetAllCollectors = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }), queryFn: () => CollectorControllerService.getAllCollectors({ q }) });
export const prefetchUseCollectorControllerServiceGetCollector = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetCollectorKeyFn({ id }), queryFn: () => CollectorControllerService.getCollector({ id }) });
export const prefetchUseCollectorControllerServiceGetCollectorWorks = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetCollectorWorksKeyFn({ id }), queryFn: () => CollectorControllerService.getCollectorWorks({ id }) });
export const prefetchUseAssetControllerServiceDownloadAsset = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAssetControllerServiceDownloadAssetKeyFn({ id }), queryFn: () => AssetControllerService.downloadAsset({ id }) });
export const prefetchUseArtworkControllerServiceGetAllArtworks = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseArtworkControllerServiceGetAllArtworksKeyFn(), queryFn: () => ArtworkControllerService.getAllArtworks() });
export const prefetchUseArtworkControllerServiceGetArtworkById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtworkControllerServiceGetArtworkByIdKeyFn({ id }), queryFn: () => ArtworkControllerService.getArtworkById({ id }) });
export const prefetchUseArtistControllerServiceGetAllArtists = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }), queryFn: () => ArtistControllerService.getAllArtists({ q }) });
export const prefetchUseArtistControllerServiceGetArtist = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }), queryFn: () => ArtistControllerService.getArtist({ id }) });
export const prefetchUseArtistControllerServiceGetArtistWorks = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetArtistWorksKeyFn({ id }), queryFn: () => ArtistControllerService.getArtistWorks({ id }) });
