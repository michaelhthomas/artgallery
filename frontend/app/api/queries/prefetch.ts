// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, BuyerControllerService, CollectorControllerService, ProfileControllerService, SaleControllerService, SalespersonControllerService, ShowControllerService, StatsControllerService } from "../requests/services.gen";
import { ArtworkSearchRequest } from "../requests/types.gen";
import * as Common from "./common";
export const prefetchUseSaleControllerServiceGetAllSales = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSaleControllerServiceGetAllSalesKeyFn(), queryFn: () => SaleControllerService.getAllSales() });
export const prefetchUseSaleControllerServiceGetSaleById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSaleControllerServiceGetSaleByIdKeyFn({ id }), queryFn: () => SaleControllerService.getSaleById({ id }) });
export const prefetchUseSaleControllerServiceGetSalesLastWeek = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSaleControllerServiceGetSalesLastWeekKeyFn(), queryFn: () => SaleControllerService.getSalesLastWeek() });
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
export const prefetchUseBuyerControllerServiceGetAllBuyers = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseBuyerControllerServiceGetAllBuyersKeyFn(), queryFn: () => BuyerControllerService.getAllBuyers() });
export const prefetchUseBuyerControllerServiceGetBuyerById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBuyerControllerServiceGetBuyerByIdKeyFn({ id }), queryFn: () => BuyerControllerService.getBuyerById({ id }) });
export const prefetchUseAssetControllerServiceDownloadAsset = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAssetControllerServiceDownloadAssetKeyFn({ id }), queryFn: () => AssetControllerService.downloadAsset({ id }) });
export const prefetchUseArtworkControllerServiceGetAllArtworks = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseArtworkControllerServiceGetAllArtworksKeyFn(), queryFn: () => ArtworkControllerService.getAllArtworks() });
export const prefetchUseArtworkControllerServiceGetArtworkById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtworkControllerServiceGetArtworkByIdKeyFn({ id }), queryFn: () => ArtworkControllerService.getArtworkById({ id }) });
export const prefetchUseArtworkControllerServiceSearch = (queryClient: QueryClient, { req }: {
  req: ArtworkSearchRequest;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtworkControllerServiceSearchKeyFn({ req }), queryFn: () => ArtworkControllerService.search({ req }) });
export const prefetchUseArtistControllerServiceGetAllArtists = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }), queryFn: () => ArtistControllerService.getAllArtists({ q }) });
export const prefetchUseArtistControllerServiceGetArtist = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }), queryFn: () => ArtistControllerService.getArtist({ id }) });
export const prefetchUseArtistControllerServiceGetArtistWorks = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseArtistControllerServiceGetArtistWorksKeyFn({ id }), queryFn: () => ArtistControllerService.getArtistWorks({ id }) });
export const prefetchUseStatsControllerServiceGetStats = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseStatsControllerServiceGetStatsKeyFn(), queryFn: () => StatsControllerService.getStats() });
export const prefetchUseShowControllerServiceGetAllShows = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseShowControllerServiceGetAllShowsKeyFn(), queryFn: () => ShowControllerService.getAllShows() });
export const prefetchUseShowControllerServiceGetShowDetails = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseShowControllerServiceGetShowDetailsKeyFn({ title }), queryFn: () => ShowControllerService.getShowDetails({ title }) });
export const prefetchUseSalespersonControllerServiceListSalespeople = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSalespersonControllerServiceListSalespeopleKeyFn(), queryFn: () => SalespersonControllerService.listSalespeople() });
