// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { ArtistControllerService, AuthControllerService, CollectorControllerService, ResourceControllerService } from "../requests/services.gen";
import { Artist, AuthRequest } from "../requests/types.gen";
import * as Common from "./common";
export const useArtistControllerServiceGetAllArtists = <TData = Common.ArtistControllerServiceGetAllArtistsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }, queryKey), queryFn: () => ArtistControllerService.getAllArtists({ q }) as TData, ...options });
export const useResourceControllerServiceGetProtectedResource = <TData = Common.ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetProtectedResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getProtectedResource() as TData, ...options });
export const useResourceControllerServiceGetPublicResource = <TData = Common.ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetPublicResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getPublicResource() as TData, ...options });
export const useCollectorControllerServiceGetAllCollectors = <TData = Common.CollectorControllerServiceGetAllCollectorsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }, queryKey), queryFn: () => CollectorControllerService.getAllCollectors({ q }) as TData, ...options });
export const useCollectorControllerServiceGetCollectorById = <TData = Common.CollectorControllerServiceGetCollectorByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollectorById({ id }) as TData, ...options });
export const useAuthControllerServiceLogin = <TData = Common.AuthControllerServiceLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AuthRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AuthRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthControllerService.login({ requestBody }) as unknown as Promise<TData>, ...options });
export const useArtistControllerServiceCreateArtist = <TData = Common.ArtistControllerServiceCreateArtistMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  artist: Artist;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  artist: Artist;
}, TContext>({ mutationFn: ({ artist }) => ArtistControllerService.createArtist({ artist }) as unknown as Promise<TData>, ...options });
