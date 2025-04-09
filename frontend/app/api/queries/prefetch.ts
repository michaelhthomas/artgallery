// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { CollectorControllerService, ResourceControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseResourceControllerServiceGetProtectedResource = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseResourceControllerServiceGetProtectedResourceKeyFn(), queryFn: () => ResourceControllerService.getProtectedResource() });
export const prefetchUseResourceControllerServiceGetPublicResource = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseResourceControllerServiceGetPublicResourceKeyFn(), queryFn: () => ResourceControllerService.getPublicResource() });
export const prefetchUseCollectorControllerServiceGetAllCollectors = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }), queryFn: () => CollectorControllerService.getAllCollectors({ q }) });
export const prefetchUseCollectorControllerServiceGetCollectorById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }), queryFn: () => CollectorControllerService.getCollectorById({ id }) });
