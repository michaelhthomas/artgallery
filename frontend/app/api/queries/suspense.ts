// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, CollectorControllerService, ProfileControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const useProfileControllerServiceGetProfileSuspense = <TData = Common.ProfileControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(queryKey), queryFn: () => ProfileControllerService.getProfile() as TData, ...options });
export const useCollectorControllerServiceGetAllCollectorsSuspense = <TData = Common.CollectorControllerServiceGetAllCollectorsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }, queryKey), queryFn: () => CollectorControllerService.getAllCollectors({ q }) as TData, ...options });
export const useCollectorControllerServiceGetCollectorSuspense = <TData = Common.CollectorControllerServiceGetCollectorDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollector({ id }) as TData, ...options });
export const useCollectorControllerServiceGetCollectorWorksSuspense = <TData = Common.CollectorControllerServiceGetCollectorWorksDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorWorksKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollectorWorks({ id }) as TData, ...options });
export const useAssetControllerServiceDownloadAssetSuspense = <TData = Common.AssetControllerServiceDownloadAssetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAssetControllerServiceDownloadAssetKeyFn({ id }, queryKey), queryFn: () => AssetControllerService.downloadAsset({ id }) as TData, ...options });
export const useArtworkControllerServiceGetAllArtworksSuspense = <TData = Common.ArtworkControllerServiceGetAllArtworksDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseArtworkControllerServiceGetAllArtworksKeyFn(queryKey), queryFn: () => ArtworkControllerService.getAllArtworks() as TData, ...options });
export const useArtworkControllerServiceGetArtworkByIdSuspense = <TData = Common.ArtworkControllerServiceGetArtworkByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseArtworkControllerServiceGetArtworkByIdKeyFn({ id }, queryKey), queryFn: () => ArtworkControllerService.getArtworkById({ id }) as TData, ...options });
export const useArtistControllerServiceGetAllArtistsSuspense = <TData = Common.ArtistControllerServiceGetAllArtistsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }, queryKey), queryFn: () => ArtistControllerService.getAllArtists({ q }) as TData, ...options });
export const useArtistControllerServiceGetArtistSuspense = <TData = Common.ArtistControllerServiceGetArtistDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }, queryKey), queryFn: () => ArtistControllerService.getArtist({ id }) as TData, ...options });
export const useArtistControllerServiceGetArtistWorksSuspense = <TData = Common.ArtistControllerServiceGetArtistWorksDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetArtistWorksKeyFn({ id }, queryKey), queryFn: () => ArtistControllerService.getArtistWorks({ id }) as TData, ...options });
