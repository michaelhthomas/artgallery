// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, BuyerControllerService, CollectorControllerService, ProfileControllerService, PublicControllerService, SaleControllerService, SalespersonControllerService, ShowControllerService, StatsControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const ensureUseSaleControllerServiceGetAllSalesData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseSaleControllerServiceGetAllSalesKeyFn(), queryFn: () => SaleControllerService.getAllSales() });
export const ensureUseSaleControllerServiceGetSaleByIdData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseSaleControllerServiceGetSaleByIdKeyFn({ id }), queryFn: () => SaleControllerService.getSaleById({ id }) });
export const ensureUseSaleControllerServiceGetSalesLastWeekData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseSaleControllerServiceGetSalesLastWeekKeyFn(), queryFn: () => SaleControllerService.getSalesLastWeek() });
export const ensureUseProfileControllerServiceGetProfileData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(), queryFn: () => ProfileControllerService.getProfile() });
export const ensureUseCollectorControllerServiceGetAllCollectorsData = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }), queryFn: () => CollectorControllerService.getAllCollectors({ q }) });
export const ensureUseCollectorControllerServiceGetCollectorData = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetCollectorKeyFn({ id }), queryFn: () => CollectorControllerService.getCollector({ id }) });
export const ensureUseCollectorControllerServiceGetCollectorWorksData = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetCollectorWorksKeyFn({ id }), queryFn: () => CollectorControllerService.getCollectorWorks({ id }) });
export const ensureUseBuyerControllerServiceGetAllBuyersData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseBuyerControllerServiceGetAllBuyersKeyFn(), queryFn: () => BuyerControllerService.getAllBuyers() });
export const ensureUseBuyerControllerServiceGetBuyerByIdData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseBuyerControllerServiceGetBuyerByIdKeyFn({ id }), queryFn: () => BuyerControllerService.getBuyerById({ id }) });
export const ensureUseAssetControllerServiceDownloadAssetData = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseAssetControllerServiceDownloadAssetKeyFn({ id }), queryFn: () => AssetControllerService.downloadAsset({ id }) });
export const ensureUseAssetControllerServiceGetAssetInfoData = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseAssetControllerServiceGetAssetInfoKeyFn({ id }), queryFn: () => AssetControllerService.getAssetInfo({ id }) });
export const ensureUseArtworkControllerServiceGetAllArtworksData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseArtworkControllerServiceGetAllArtworksKeyFn(), queryFn: () => ArtworkControllerService.getAllArtworks() });
export const ensureUseArtworkControllerServiceGetArtworkByIdData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseArtworkControllerServiceGetArtworkByIdKeyFn({ id }), queryFn: () => ArtworkControllerService.getArtworkById({ id }) });
export const ensureUseArtworkControllerServiceSearchData = (queryClient: QueryClient, { artistName, medium, style, type }: {
  artistName?: string;
  medium?: string;
  style?: string;
  type?: string;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseArtworkControllerServiceSearchKeyFn({ artistName, medium, style, type }), queryFn: () => ArtworkControllerService.search({ artistName, medium, style, type }) });
export const ensureUseArtistControllerServiceGetAllArtistsData = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }), queryFn: () => ArtistControllerService.getAllArtists({ q }) });
export const ensureUseArtistControllerServiceGetArtistData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }), queryFn: () => ArtistControllerService.getArtist({ id }) });
export const ensureUseArtistControllerServiceGetArtistWorksData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseArtistControllerServiceGetArtistWorksKeyFn({ id }), queryFn: () => ArtistControllerService.getArtistWorks({ id }) });
export const ensureUseStatsControllerServiceGetStatsData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseStatsControllerServiceGetStatsKeyFn(), queryFn: () => StatsControllerService.getStats() });
export const ensureUseShowControllerServiceGetAllShowsData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseShowControllerServiceGetAllShowsKeyFn(), queryFn: () => ShowControllerService.getAllShows() });
export const ensureUseShowControllerServiceGetShowDetailsData = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseShowControllerServiceGetShowDetailsKeyFn({ title }), queryFn: () => ShowControllerService.getShowDetails({ title }) });
export const ensureUseSalespersonControllerServiceListSalespeopleData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseSalespersonControllerServiceListSalespeopleKeyFn(), queryFn: () => SalespersonControllerService.listSalespeople() });
export const ensureUsePublicControllerServiceGetCurrentExhibitionsData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UsePublicControllerServiceGetCurrentExhibitionsKeyFn(), queryFn: () => PublicControllerService.getCurrentExhibitions() });
export const ensureUsePublicControllerServiceGetFeaturedArtistsData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UsePublicControllerServiceGetFeaturedArtistsKeyFn(), queryFn: () => PublicControllerService.getFeaturedArtists() });
