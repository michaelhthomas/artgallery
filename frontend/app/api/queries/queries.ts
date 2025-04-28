// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { ArtistControllerService, ArtworkControllerService, AssetControllerService, AuthControllerService, BuyerControllerService, CollectorControllerService, MailingListService, ProfileControllerService, PublicControllerService, SaleControllerService, SalespersonControllerService, ShowControllerService, StatsControllerService } from "../requests/services.gen";
import { ArtistCreateRequest, ArtworkCreateRequest, AuthRequest, BuyerCreateRequest, CollectorCreateRequest, MailingListSignupRequest, ProfileUpdateRequest, SaleCreateRequest } from "../requests/types.gen";
import * as Common from "./common";
export const useSaleControllerServiceGetAllSales = <TData = Common.SaleControllerServiceGetAllSalesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSaleControllerServiceGetAllSalesKeyFn(queryKey), queryFn: () => SaleControllerService.getAllSales() as TData, ...options });
export const useSaleControllerServiceGetSaleById = <TData = Common.SaleControllerServiceGetSaleByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSaleControllerServiceGetSaleByIdKeyFn({ id }, queryKey), queryFn: () => SaleControllerService.getSaleById({ id }) as TData, ...options });
export const useSaleControllerServiceGetSalesLastWeek = <TData = Common.SaleControllerServiceGetSalesLastWeekDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSaleControllerServiceGetSalesLastWeekKeyFn(queryKey), queryFn: () => SaleControllerService.getSalesLastWeek() as TData, ...options });
export const useProfileControllerServiceGetProfile = <TData = Common.ProfileControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(queryKey), queryFn: () => ProfileControllerService.getProfile() as TData, ...options });
export const useCollectorControllerServiceGetAllCollectors = <TData = Common.CollectorControllerServiceGetAllCollectorsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }, queryKey), queryFn: () => CollectorControllerService.getAllCollectors({ q }) as TData, ...options });
export const useCollectorControllerServiceGetCollector = <TData = Common.CollectorControllerServiceGetCollectorDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollector({ id }) as TData, ...options });
export const useCollectorControllerServiceGetCollectorWorks = <TData = Common.CollectorControllerServiceGetCollectorWorksDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorWorksKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollectorWorks({ id }) as TData, ...options });
export const useBuyerControllerServiceGetAllBuyers = <TData = Common.BuyerControllerServiceGetAllBuyersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBuyerControllerServiceGetAllBuyersKeyFn(queryKey), queryFn: () => BuyerControllerService.getAllBuyers() as TData, ...options });
export const useBuyerControllerServiceGetBuyerById = <TData = Common.BuyerControllerServiceGetBuyerByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBuyerControllerServiceGetBuyerByIdKeyFn({ id }, queryKey), queryFn: () => BuyerControllerService.getBuyerById({ id }) as TData, ...options });
export const useAssetControllerServiceDownloadAsset = <TData = Common.AssetControllerServiceDownloadAssetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAssetControllerServiceDownloadAssetKeyFn({ id }, queryKey), queryFn: () => AssetControllerService.downloadAsset({ id }) as TData, ...options });
export const useAssetControllerServiceGetAssetInfo = <TData = Common.AssetControllerServiceGetAssetInfoDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAssetControllerServiceGetAssetInfoKeyFn({ id }, queryKey), queryFn: () => AssetControllerService.getAssetInfo({ id }) as TData, ...options });
export const useArtworkControllerServiceGetAllArtworks = <TData = Common.ArtworkControllerServiceGetAllArtworksDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtworkControllerServiceGetAllArtworksKeyFn(queryKey), queryFn: () => ArtworkControllerService.getAllArtworks() as TData, ...options });
export const useArtworkControllerServiceGetArtworkById = <TData = Common.ArtworkControllerServiceGetArtworkByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtworkControllerServiceGetArtworkByIdKeyFn({ id }, queryKey), queryFn: () => ArtworkControllerService.getArtworkById({ id }) as TData, ...options });
export const useArtworkControllerServiceSearch = <TData = Common.ArtworkControllerServiceSearchDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ artistName, medium, style, type }: {
  artistName?: string;
  medium?: string;
  style?: string;
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtworkControllerServiceSearchKeyFn({ artistName, medium, style, type }, queryKey), queryFn: () => ArtworkControllerService.search({ artistName, medium, style, type }) as TData, ...options });
export const useArtistControllerServiceGetAllArtists = <TData = Common.ArtistControllerServiceGetAllArtistsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }, queryKey), queryFn: () => ArtistControllerService.getAllArtists({ q }) as TData, ...options });
export const useArtistControllerServiceGetArtist = <TData = Common.ArtistControllerServiceGetArtistDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }, queryKey), queryFn: () => ArtistControllerService.getArtist({ id }) as TData, ...options });
export const useArtistControllerServiceGetArtistWorks = <TData = Common.ArtistControllerServiceGetArtistWorksDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetArtistWorksKeyFn({ id }, queryKey), queryFn: () => ArtistControllerService.getArtistWorks({ id }) as TData, ...options });
export const useStatsControllerServiceGetStats = <TData = Common.StatsControllerServiceGetStatsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseStatsControllerServiceGetStatsKeyFn(queryKey), queryFn: () => StatsControllerService.getStats() as TData, ...options });
export const useShowControllerServiceGetAllShows = <TData = Common.ShowControllerServiceGetAllShowsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseShowControllerServiceGetAllShowsKeyFn(queryKey), queryFn: () => ShowControllerService.getAllShows() as TData, ...options });
export const useShowControllerServiceGetShowDetails = <TData = Common.ShowControllerServiceGetShowDetailsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ title }: {
  title: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseShowControllerServiceGetShowDetailsKeyFn({ title }, queryKey), queryFn: () => ShowControllerService.getShowDetails({ title }) as TData, ...options });
export const useSalespersonControllerServiceListSalespeople = <TData = Common.SalespersonControllerServiceListSalespeopleDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSalespersonControllerServiceListSalespeopleKeyFn(queryKey), queryFn: () => SalespersonControllerService.listSalespeople() as TData, ...options });
export const usePublicControllerServiceGetCurrentExhibitions = <TData = Common.PublicControllerServiceGetCurrentExhibitionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePublicControllerServiceGetCurrentExhibitionsKeyFn(queryKey), queryFn: () => PublicControllerService.getCurrentExhibitions() as TData, ...options });
export const usePublicControllerServiceGetFeaturedArtists = <TData = Common.PublicControllerServiceGetFeaturedArtistsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePublicControllerServiceGetFeaturedArtistsKeyFn(queryKey), queryFn: () => PublicControllerService.getFeaturedArtists() as TData, ...options });
export const useSaleControllerServiceCreateSale = <TData = Common.SaleControllerServiceCreateSaleMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SaleCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SaleCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => SaleControllerService.createSale({ requestBody }) as unknown as Promise<TData>, ...options });
export const useMailingListServiceSignupForMailingList = <TData = Common.MailingListServiceSignupForMailingListMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: MailingListSignupRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: MailingListSignupRequest;
}, TContext>({ mutationFn: ({ requestBody }) => MailingListService.signupForMailingList({ requestBody }) as unknown as Promise<TData>, ...options });
export const useProfileControllerServiceUpdateProfile = <TData = Common.ProfileControllerServiceUpdateProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProfileUpdateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProfileUpdateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ProfileControllerService.updateProfile({ requestBody }) as unknown as Promise<TData>, ...options });
export const useCollectorControllerServiceCreateCollector = <TData = Common.CollectorControllerServiceCreateCollectorMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CollectorCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CollectorCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => CollectorControllerService.createCollector({ requestBody }) as unknown as Promise<TData>, ...options });
export const useBuyerControllerServiceCreateBuyer = <TData = Common.BuyerControllerServiceCreateBuyerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: BuyerCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: BuyerCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => BuyerControllerService.createBuyer({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthControllerServiceLogin = <TData = Common.AuthControllerServiceLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AuthRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AuthRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthControllerService.login({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAssetControllerServiceUploadAsset = <TData = Common.AssetControllerServiceUploadAssetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  formData?: { file: Blob | File; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  formData?: { file: Blob | File; };
}, TContext>({ mutationFn: ({ formData }) => AssetControllerService.uploadAsset({ formData }) as unknown as Promise<TData>, ...options });
export const useArtworkControllerServiceCreateArtwork = <TData = Common.ArtworkControllerServiceCreateArtworkMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ArtworkCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ArtworkCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ArtworkControllerService.createArtwork({ requestBody }) as unknown as Promise<TData>, ...options });
export const useArtworkControllerServiceUpdateArtwork = <TData = Common.ArtworkControllerServiceUpdateArtworkMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: ArtworkCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: ArtworkCreateRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => ArtworkControllerService.updateArtwork({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useArtistControllerServiceCreateArtist = <TData = Common.ArtistControllerServiceCreateArtistMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ArtistCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ArtistCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ArtistControllerService.createArtist({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAssetControllerServiceDeleteAsset = <TData = Common.AssetControllerServiceDeleteAssetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AssetControllerService.deleteAsset({ id }) as unknown as Promise<TData>, ...options });
