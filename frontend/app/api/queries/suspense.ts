// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ResourceControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const useResourceControllerServiceGetProtectedResourceSuspense = <TData = Common.ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetProtectedResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getProtectedResource() as TData, ...options });
export const useResourceControllerServiceGetPublicResourceSuspense = <TData = Common.ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetPublicResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getPublicResource() as TData, ...options });
