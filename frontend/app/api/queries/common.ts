// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { ArtistControllerService, AuthControllerService, CollectorControllerService, ProfileControllerService, ResourceControllerService } from "../requests/services.gen";
export type ProfileControllerServiceGetProfileDefaultResponse = Awaited<ReturnType<typeof ProfileControllerService.getProfile>>;
export type ProfileControllerServiceGetProfileQueryResult<TData = ProfileControllerServiceGetProfileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProfileControllerServiceGetProfileKey = "ProfileControllerServiceGetProfile";
export const UseProfileControllerServiceGetProfileKeyFn = (queryKey?: Array<unknown>) => [useProfileControllerServiceGetProfileKey, ...(queryKey ?? [])];
export type CollectorControllerServiceGetAllCollectorsDefaultResponse = Awaited<ReturnType<typeof CollectorControllerService.getAllCollectors>>;
export type CollectorControllerServiceGetAllCollectorsQueryResult<TData = CollectorControllerServiceGetAllCollectorsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCollectorControllerServiceGetAllCollectorsKey = "CollectorControllerServiceGetAllCollectors";
export const UseCollectorControllerServiceGetAllCollectorsKeyFn = ({ q }: {
  q?: string;
} = {}, queryKey?: Array<unknown>) => [useCollectorControllerServiceGetAllCollectorsKey, ...(queryKey ?? [{ q }])];
export type CollectorControllerServiceGetCollectorByIdDefaultResponse = Awaited<ReturnType<typeof CollectorControllerService.getCollectorById>>;
export type CollectorControllerServiceGetCollectorByIdQueryResult<TData = CollectorControllerServiceGetCollectorByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCollectorControllerServiceGetCollectorByIdKey = "CollectorControllerServiceGetCollectorById";
export const UseCollectorControllerServiceGetCollectorByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useCollectorControllerServiceGetCollectorByIdKey, ...(queryKey ?? [{ id }])];
export type ArtistControllerServiceGetAllArtistsDefaultResponse = Awaited<ReturnType<typeof ArtistControllerService.getAllArtists>>;
export type ArtistControllerServiceGetAllArtistsQueryResult<TData = ArtistControllerServiceGetAllArtistsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtistControllerServiceGetAllArtistsKey = "ArtistControllerServiceGetAllArtists";
export const UseArtistControllerServiceGetAllArtistsKeyFn = ({ q }: {
  q?: string;
} = {}, queryKey?: Array<unknown>) => [useArtistControllerServiceGetAllArtistsKey, ...(queryKey ?? [{ q }])];
export type ArtistControllerServiceGetArtistDefaultResponse = Awaited<ReturnType<typeof ArtistControllerService.getArtist>>;
export type ArtistControllerServiceGetArtistQueryResult<TData = ArtistControllerServiceGetArtistDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtistControllerServiceGetArtistKey = "ArtistControllerServiceGetArtist";
export const UseArtistControllerServiceGetArtistKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useArtistControllerServiceGetArtistKey, ...(queryKey ?? [{ id }])];
export type ResourceControllerServiceGetProtectedResourceDefaultResponse = Awaited<ReturnType<typeof ResourceControllerService.getProtectedResource>>;
export type ResourceControllerServiceGetProtectedResourceQueryResult<TData = ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceControllerServiceGetProtectedResourceKey = "ResourceControllerServiceGetProtectedResource";
export const UseResourceControllerServiceGetProtectedResourceKeyFn = (queryKey?: Array<unknown>) => [useResourceControllerServiceGetProtectedResourceKey, ...(queryKey ?? [])];
export type ResourceControllerServiceGetPublicResourceDefaultResponse = Awaited<ReturnType<typeof ResourceControllerService.getPublicResource>>;
export type ResourceControllerServiceGetPublicResourceQueryResult<TData = ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceControllerServiceGetPublicResourceKey = "ResourceControllerServiceGetPublicResource";
export const UseResourceControllerServiceGetPublicResourceKeyFn = (queryKey?: Array<unknown>) => [useResourceControllerServiceGetPublicResourceKey, ...(queryKey ?? [])];
export type ProfileControllerServiceUpdateProfileMutationResult = Awaited<ReturnType<typeof ProfileControllerService.updateProfile>>;
export type CollectorControllerServiceCreateCollectorMutationResult = Awaited<ReturnType<typeof CollectorControllerService.createCollector>>;
export type AuthControllerServiceLoginMutationResult = Awaited<ReturnType<typeof AuthControllerService.login>>;
export type ArtistControllerServiceCreateArtistMutationResult = Awaited<ReturnType<typeof ArtistControllerService.createArtist>>;
