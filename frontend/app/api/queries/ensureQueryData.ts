// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { CollectorControllerService, ResourceControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const ensureUseResourceControllerServiceGetProtectedResourceData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseResourceControllerServiceGetProtectedResourceKeyFn(), queryFn: () => ResourceControllerService.getProtectedResource() });
export const ensureUseResourceControllerServiceGetPublicResourceData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseResourceControllerServiceGetPublicResourceKeyFn(), queryFn: () => ResourceControllerService.getPublicResource() });
export const ensureUseCollectorControllerServiceGetAllCollectorsData = (queryClient: QueryClient, { q }: {
  q?: string;
} = {}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetAllCollectorsKeyFn({ q }), queryFn: () => CollectorControllerService.getAllCollectors({ q }) });
export const ensureUseCollectorControllerServiceGetCollectorByIdData = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseCollectorControllerServiceGetCollectorByIdKeyFn({ id }), queryFn: () => CollectorControllerService.getCollectorById({ id }) });
