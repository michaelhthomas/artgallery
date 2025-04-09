// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { CollectorControllerService, ResourceControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const useResourceControllerServiceGetProtectedResourceSuspense = <TData = Common.ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetProtectedResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getProtectedResource() as TData, ...options });
export const useResourceControllerServiceGetPublicResourceSuspense = <TData = Common.ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourceControllerServiceGetPublicResourceKeyFn(queryKey), queryFn: () => ResourceControllerService.getPublicResource() as TData, ...options });
export const useCollectorControllerServiceGetAllCollectorsSuspense = <TData = Common.CollectorControllerServiceGetAllCollectorsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }, queryKey), queryFn: () => CollectorControllerService.getAllCollectors({ q }) as TData, ...options });
export const useCollectorControllerServiceGetCollectorByIdSuspense = <TData = Common.CollectorControllerServiceGetCollectorByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }, queryKey), queryFn: () => CollectorControllerService.getCollectorById({ id }) as TData, ...options });
