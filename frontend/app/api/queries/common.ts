// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, AuthControllerService, BuyerControllerService, CollectorControllerService, MailingListService, ProfileControllerService, PublicControllerService, SaleControllerService, SalespersonControllerService, ShowControllerService, StatsControllerService } from "../requests/services.gen";
export type SaleControllerServiceGetAllSalesDefaultResponse = Awaited<ReturnType<typeof SaleControllerService.getAllSales>>;
export type SaleControllerServiceGetAllSalesQueryResult<TData = SaleControllerServiceGetAllSalesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSaleControllerServiceGetAllSalesKey = "SaleControllerServiceGetAllSales";
export const UseSaleControllerServiceGetAllSalesKeyFn = (queryKey?: Array<unknown>) => [useSaleControllerServiceGetAllSalesKey, ...(queryKey ?? [])];
export type SaleControllerServiceGetSaleByIdDefaultResponse = Awaited<ReturnType<typeof SaleControllerService.getSaleById>>;
export type SaleControllerServiceGetSaleByIdQueryResult<TData = SaleControllerServiceGetSaleByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSaleControllerServiceGetSaleByIdKey = "SaleControllerServiceGetSaleById";
export const UseSaleControllerServiceGetSaleByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useSaleControllerServiceGetSaleByIdKey, ...(queryKey ?? [{ id }])];
export type SaleControllerServiceGetSalesLastWeekDefaultResponse = Awaited<ReturnType<typeof SaleControllerService.getSalesLastWeek>>;
export type SaleControllerServiceGetSalesLastWeekQueryResult<TData = SaleControllerServiceGetSalesLastWeekDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSaleControllerServiceGetSalesLastWeekKey = "SaleControllerServiceGetSalesLastWeek";
export const UseSaleControllerServiceGetSalesLastWeekKeyFn = (queryKey?: Array<unknown>) => [useSaleControllerServiceGetSalesLastWeekKey, ...(queryKey ?? [])];
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
export type CollectorControllerServiceGetCollectorDefaultResponse = Awaited<ReturnType<typeof CollectorControllerService.getCollector>>;
export type CollectorControllerServiceGetCollectorQueryResult<TData = CollectorControllerServiceGetCollectorDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCollectorControllerServiceGetCollectorKey = "CollectorControllerServiceGetCollector";
export const UseCollectorControllerServiceGetCollectorKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useCollectorControllerServiceGetCollectorKey, ...(queryKey ?? [{ id }])];
export type CollectorControllerServiceGetCollectorWorksDefaultResponse = Awaited<ReturnType<typeof CollectorControllerService.getCollectorWorks>>;
export type CollectorControllerServiceGetCollectorWorksQueryResult<TData = CollectorControllerServiceGetCollectorWorksDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCollectorControllerServiceGetCollectorWorksKey = "CollectorControllerServiceGetCollectorWorks";
export const UseCollectorControllerServiceGetCollectorWorksKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useCollectorControllerServiceGetCollectorWorksKey, ...(queryKey ?? [{ id }])];
export type BuyerControllerServiceGetAllBuyersDefaultResponse = Awaited<ReturnType<typeof BuyerControllerService.getAllBuyers>>;
export type BuyerControllerServiceGetAllBuyersQueryResult<TData = BuyerControllerServiceGetAllBuyersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useBuyerControllerServiceGetAllBuyersKey = "BuyerControllerServiceGetAllBuyers";
export const UseBuyerControllerServiceGetAllBuyersKeyFn = (queryKey?: Array<unknown>) => [useBuyerControllerServiceGetAllBuyersKey, ...(queryKey ?? [])];
export type BuyerControllerServiceGetBuyerByIdDefaultResponse = Awaited<ReturnType<typeof BuyerControllerService.getBuyerById>>;
export type BuyerControllerServiceGetBuyerByIdQueryResult<TData = BuyerControllerServiceGetBuyerByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useBuyerControllerServiceGetBuyerByIdKey = "BuyerControllerServiceGetBuyerById";
export const UseBuyerControllerServiceGetBuyerByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useBuyerControllerServiceGetBuyerByIdKey, ...(queryKey ?? [{ id }])];
export type AssetControllerServiceDownloadAssetDefaultResponse = Awaited<ReturnType<typeof AssetControllerService.downloadAsset>>;
export type AssetControllerServiceDownloadAssetQueryResult<TData = AssetControllerServiceDownloadAssetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAssetControllerServiceDownloadAssetKey = "AssetControllerServiceDownloadAsset";
export const UseAssetControllerServiceDownloadAssetKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useAssetControllerServiceDownloadAssetKey, ...(queryKey ?? [{ id }])];
export type AssetControllerServiceGetAssetInfoDefaultResponse = Awaited<ReturnType<typeof AssetControllerService.getAssetInfo>>;
export type AssetControllerServiceGetAssetInfoQueryResult<TData = AssetControllerServiceGetAssetInfoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAssetControllerServiceGetAssetInfoKey = "AssetControllerServiceGetAssetInfo";
export const UseAssetControllerServiceGetAssetInfoKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useAssetControllerServiceGetAssetInfoKey, ...(queryKey ?? [{ id }])];
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
export type ArtworkControllerServiceSearchDefaultResponse = Awaited<ReturnType<typeof ArtworkControllerService.search>>;
export type ArtworkControllerServiceSearchQueryResult<TData = ArtworkControllerServiceSearchDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtworkControllerServiceSearchKey = "ArtworkControllerServiceSearch";
export const UseArtworkControllerServiceSearchKeyFn = ({ artistName, medium, style, type }: {
  artistName?: string;
  medium?: string;
  style?: string;
  type?: string;
} = {}, queryKey?: Array<unknown>) => [useArtworkControllerServiceSearchKey, ...(queryKey ?? [{ artistName, medium, style, type }])];
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
export type ArtistControllerServiceGetArtistWorksDefaultResponse = Awaited<ReturnType<typeof ArtistControllerService.getArtistWorks>>;
export type ArtistControllerServiceGetArtistWorksQueryResult<TData = ArtistControllerServiceGetArtistWorksDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useArtistControllerServiceGetArtistWorksKey = "ArtistControllerServiceGetArtistWorks";
export const UseArtistControllerServiceGetArtistWorksKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useArtistControllerServiceGetArtistWorksKey, ...(queryKey ?? [{ id }])];
export type StatsControllerServiceGetStatsDefaultResponse = Awaited<ReturnType<typeof StatsControllerService.getStats>>;
export type StatsControllerServiceGetStatsQueryResult<TData = StatsControllerServiceGetStatsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useStatsControllerServiceGetStatsKey = "StatsControllerServiceGetStats";
export const UseStatsControllerServiceGetStatsKeyFn = (queryKey?: Array<unknown>) => [useStatsControllerServiceGetStatsKey, ...(queryKey ?? [])];
export type ShowControllerServiceGetAllShowsDefaultResponse = Awaited<ReturnType<typeof ShowControllerService.getAllShows>>;
export type ShowControllerServiceGetAllShowsQueryResult<TData = ShowControllerServiceGetAllShowsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useShowControllerServiceGetAllShowsKey = "ShowControllerServiceGetAllShows";
export const UseShowControllerServiceGetAllShowsKeyFn = (queryKey?: Array<unknown>) => [useShowControllerServiceGetAllShowsKey, ...(queryKey ?? [])];
export type ShowControllerServiceGetShowDetailsDefaultResponse = Awaited<ReturnType<typeof ShowControllerService.getShowDetails>>;
export type ShowControllerServiceGetShowDetailsQueryResult<TData = ShowControllerServiceGetShowDetailsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useShowControllerServiceGetShowDetailsKey = "ShowControllerServiceGetShowDetails";
export const UseShowControllerServiceGetShowDetailsKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [useShowControllerServiceGetShowDetailsKey, ...(queryKey ?? [{ title }])];
export type SalespersonControllerServiceListSalespeopleDefaultResponse = Awaited<ReturnType<typeof SalespersonControllerService.listSalespeople>>;
export type SalespersonControllerServiceListSalespeopleQueryResult<TData = SalespersonControllerServiceListSalespeopleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSalespersonControllerServiceListSalespeopleKey = "SalespersonControllerServiceListSalespeople";
export const UseSalespersonControllerServiceListSalespeopleKeyFn = (queryKey?: Array<unknown>) => [useSalespersonControllerServiceListSalespeopleKey, ...(queryKey ?? [])];
export type PublicControllerServiceGetCurrentExhibitionsDefaultResponse = Awaited<ReturnType<typeof PublicControllerService.getCurrentExhibitions>>;
export type PublicControllerServiceGetCurrentExhibitionsQueryResult<TData = PublicControllerServiceGetCurrentExhibitionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePublicControllerServiceGetCurrentExhibitionsKey = "PublicControllerServiceGetCurrentExhibitions";
export const UsePublicControllerServiceGetCurrentExhibitionsKeyFn = (queryKey?: Array<unknown>) => [usePublicControllerServiceGetCurrentExhibitionsKey, ...(queryKey ?? [])];
export type PublicControllerServiceGetFeaturedArtistsDefaultResponse = Awaited<ReturnType<typeof PublicControllerService.getFeaturedArtists>>;
export type PublicControllerServiceGetFeaturedArtistsQueryResult<TData = PublicControllerServiceGetFeaturedArtistsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePublicControllerServiceGetFeaturedArtistsKey = "PublicControllerServiceGetFeaturedArtists";
export const UsePublicControllerServiceGetFeaturedArtistsKeyFn = (queryKey?: Array<unknown>) => [usePublicControllerServiceGetFeaturedArtistsKey, ...(queryKey ?? [])];
export type SaleControllerServiceCreateSaleMutationResult = Awaited<ReturnType<typeof SaleControllerService.createSale>>;
export type MailingListServiceSignupForMailingListMutationResult = Awaited<ReturnType<typeof MailingListService.signupForMailingList>>;
export type ProfileControllerServiceUpdateProfileMutationResult = Awaited<ReturnType<typeof ProfileControllerService.updateProfile>>;
export type CollectorControllerServiceCreateCollectorMutationResult = Awaited<ReturnType<typeof CollectorControllerService.createCollector>>;
export type BuyerControllerServiceCreateBuyerMutationResult = Awaited<ReturnType<typeof BuyerControllerService.createBuyer>>;
export type AuthControllerServiceLoginMutationResult = Awaited<ReturnType<typeof AuthControllerService.login>>;
export type AssetControllerServiceUploadAssetMutationResult = Awaited<ReturnType<typeof AssetControllerService.uploadAsset>>;
export type ArtworkControllerServiceCreateArtworkMutationResult = Awaited<ReturnType<typeof ArtworkControllerService.createArtwork>>;
export type ArtworkControllerServiceUpdateArtworkMutationResult = Awaited<ReturnType<typeof ArtworkControllerService.updateArtwork>>;
export type ArtistControllerServiceCreateArtistMutationResult = Awaited<ReturnType<typeof ArtistControllerService.createArtist>>;
export type AssetControllerServiceDeleteAssetMutationResult = Awaited<ReturnType<typeof AssetControllerService.deleteAsset>>;
