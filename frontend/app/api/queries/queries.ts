// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { ArtistControllerService, AuthControllerService, CollectorControllerService, MailingListService, ProfileControllerService } from "../requests/services.gen";
import { ArtistCreateRequest, AuthRequest, CollectorCreateRequest, MailingListSignupRequest, ProfileUpdateRequest } from "../requests/types.gen";
import * as Common from "./common";
export const useProfileControllerServiceGetProfile = <TData = Common.ProfileControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProfileControllerServiceGetProfileKeyFn(queryKey), queryFn: () => ProfileControllerService.getProfile() as TData, ...options });
export const useCollectorControllerServiceGetAllCollectors = <TData = Common.CollectorControllerServiceGetAllCollectorsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }, queryKey), queryFn: () => CollectorControllerService.getAllCollectors({ q }) as TData, ...options });
export const useCollectorControllerServiceGetCollectorById = <TData = Common.CollectorControllerServiceGetCollectorByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollectorById({ id }) as TData, ...options });
export const useArtistControllerServiceGetAllArtists = <TData = Common.ArtistControllerServiceGetAllArtistsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetAllArtistsKeyFn({ q }, queryKey), queryFn: () => ArtistControllerService.getAllArtists({ q }) as TData, ...options });
export const useArtistControllerServiceGetArtist = <TData = Common.ArtistControllerServiceGetArtistDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseArtistControllerServiceGetArtistKeyFn({ id }, queryKey), queryFn: () => ArtistControllerService.getArtist({ id }) as TData, ...options });
export const useProfileControllerServiceUpdateProfile = <TData = Common.ProfileControllerServiceUpdateProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProfileUpdateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProfileUpdateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ProfileControllerService.updateProfile({ requestBody }) as unknown as Promise<TData>, ...options });
export const useMailingListServiceSignupForMailingList = <TData = Common.MailingListServiceSignupForMailingListMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: MailingListSignupRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: MailingListSignupRequest;
}, TContext>({ mutationFn: ({ requestBody }) => MailingListService.signupForMailingList({ requestBody }) as unknown as Promise<TData>, ...options });
export const useCollectorControllerServiceCreateCollector = <TData = Common.CollectorControllerServiceCreateCollectorMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CollectorCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CollectorCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => CollectorControllerService.createCollector({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthControllerServiceLogin = <TData = Common.AuthControllerServiceLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AuthRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AuthRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthControllerService.login({ requestBody }) as unknown as Promise<TData>, ...options });
export const useArtistControllerServiceCreateArtist = <TData = Common.ArtistControllerServiceCreateArtistMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ArtistCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ArtistCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ArtistControllerService.createArtist({ requestBody }) as unknown as Promise<TData>, ...options });
