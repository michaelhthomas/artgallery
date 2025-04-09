// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { AuthControllerService, ResourceControllerService } from "../requests/services.gen";
export type ResourceControllerServiceGetProtectedResourceDefaultResponse = Awaited<ReturnType<typeof ResourceControllerService.getProtectedResource>>;
export type ResourceControllerServiceGetProtectedResourceQueryResult<TData = ResourceControllerServiceGetProtectedResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceControllerServiceGetProtectedResourceKey = "ResourceControllerServiceGetProtectedResource";
export const UseResourceControllerServiceGetProtectedResourceKeyFn = (queryKey?: Array<unknown>) => [useResourceControllerServiceGetProtectedResourceKey, ...(queryKey ?? [])];
export type ResourceControllerServiceGetPublicResourceDefaultResponse = Awaited<ReturnType<typeof ResourceControllerService.getPublicResource>>;
export type ResourceControllerServiceGetPublicResourceQueryResult<TData = ResourceControllerServiceGetPublicResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceControllerServiceGetPublicResourceKey = "ResourceControllerServiceGetPublicResource";
export const UseResourceControllerServiceGetPublicResourceKeyFn = (queryKey?: Array<unknown>) => [useResourceControllerServiceGetPublicResourceKey, ...(queryKey ?? [])];
export type AuthControllerServiceLoginMutationResult = Awaited<ReturnType<typeof AuthControllerService.login>>;
