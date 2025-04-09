// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { AuthControllerService, CollectorControllerService, ResourceControllerService } from "../requests/services.gen";
export type ResourceControllerServiceGetProtectedResourceDefaultResponse = Awaited<ReturnType<typeof ResourceControllerService.getProtectedResource>>;
export type ResourceControllerServiceGetProtectedResourceQueryResult<TData = ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceControllerServiceGetProtectedResourceKey = "ResourceControllerServiceGetProtectedResource";
export const UseResourceControllerServiceGetProtectedResourceKeyFn = (queryKey?: Array<unknown>) => [useResourceControllerServiceGetProtectedResourceKey, ...(queryKey ?? [])];
export type ResourceControllerServiceGetPublicResourceDefaultResponse = Awaited<ReturnType<typeof ResourceControllerService.getPublicResource>>;
export type ResourceControllerServiceGetPublicResourceQueryResult<TData = ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceControllerServiceGetPublicResourceKey = "ResourceControllerServiceGetPublicResource";
export const UseResourceControllerServiceGetPublicResourceKeyFn = (queryKey?: Array<unknown>) => [useResourceControllerServiceGetPublicResourceKey, ...(queryKey ?? [])];
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
  id: number;
}, queryKey?: Array<unknown>) => [useCollectorControllerServiceGetCollectorByIdKey, ...(queryKey ?? [{ id }])];
export type AuthControllerServiceLoginMutationResult = Awaited<ReturnType<typeof AuthControllerService.login>>;
