// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, AuthControllerService, CollectorControllerService, MailingListService, ProfileControllerService } from "../requests/services.gen";
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
  id: string;
}, queryKey?: Array<unknown>) => [useCollectorControllerServiceGetCollectorByIdKey, ...(queryKey ?? [{ id }])];
export type AssetControllerServiceDownloadAssetDefaultResponse = Awaited<ReturnType<typeof AssetControllerService.downloadAsset>>;
export type AssetControllerServiceDownloadAssetQueryResult<TData = AssetControllerServiceDownloadAssetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAssetControllerServiceDownloadAssetKey = "AssetControllerServiceDownloadAsset";
export const UseAssetControllerServiceDownloadAssetKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useAssetControllerServiceDownloadAssetKey, ...(queryKey ?? [{ id }])];
export type ArtworkControllerServiceGetAllArtworksDefaultResponse = Awaited<ReturnType<typeof ArtworkControllerService.getAllArtworks>>;
export type ArtworkControllerServiceGetAllArtworksQueryResult<TData = ArtworkControllerServiceGetAllArtworksDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtworkControllerServiceGetAllArtworksKey = "ArtworkControllerServiceGetAllArtworks";
export const UseArtworkControllerServiceGetAllArtworksKeyFn = (queryKey?: Array<unknown>) => [useArtworkControllerServiceGetAllArtworksKey, ...(queryKey ?? [])];
export type ArtworkControllerServiceGetArtworkByIdDefaultResponse = Awaited<ReturnType<typeof ArtworkControllerService.getArtworkById>>;
export type ArtworkControllerServiceGetArtworkByIdQueryResult<TData = ArtworkControllerServiceGetArtworkByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtworkControllerServiceGetArtworkByIdKey = "ArtworkControllerServiceGetArtworkById";
export const UseArtworkControllerServiceGetArtworkByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useArtworkControllerServiceGetArtworkByIdKey, ...(queryKey ?? [{ id }])];
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
export type ArtistControllerServiceGetWorksDefaultResponse = Awaited<ReturnType<typeof ArtistControllerService.getWorks>>;
export type ArtistControllerServiceGetWorksQueryResult<TData = ArtistControllerServiceGetWorksDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtistControllerServiceGetWorksKey = "ArtistControllerServiceGetWorks";
export const UseArtistControllerServiceGetWorksKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useArtistControllerServiceGetWorksKey, ...(queryKey ?? [{ id }])];
export type MailingListServiceSignupForMailingListMutationResult = Awaited<ReturnType<typeof MailingListService.signupForMailingList>>;
export type ProfileControllerServiceUpdateProfileMutationResult = Awaited<ReturnType<typeof ProfileControllerService.updateProfile>>;
export type CollectorControllerServiceCreateCollectorMutationResult = Awaited<ReturnType<typeof CollectorControllerService.createCollector>>;
export type AuthControllerServiceLoginMutationResult = Awaited<ReturnType<typeof AuthControllerService.login>>;
export type AssetControllerServiceUploadAssetMutationResult = Awaited<ReturnType<typeof AssetControllerService.uploadAsset>>;
export type ArtworkControllerServiceCreateArtworkMutationResult = Awaited<ReturnType<typeof ArtworkControllerService.createArtwork>>;
export type ArtistControllerServiceCreateArtistMutationResult = Awaited<ReturnType<typeof ArtistControllerService.createArtist>>;
export type AssetControllerServiceDeleteAssetMutationResult = Awaited<ReturnType<typeof AssetControllerService.deleteAsset>>;
