// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AuthControllerService, ResourceControllerService } from "../requests/services.gen";
import { AuthRequest } from "../requests/types.gen";
import * as Common from "./common";
export const useResourceControllerServiceGetProtectedResource = <TData = Common.ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetProtectedResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getProtectedResource() as TData, ...options });
export const useResourceControllerServiceGetPublicResource = <TData = Common.ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetPublicResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getPublicResource() as TData, ...options });
export const useAuthControllerServiceLogin = <TData = Common.AuthControllerServiceLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AuthRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AuthRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthControllerService.login({ requestBody }) as unknown as Promise<TData>, ...options });
