/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as WebsiteIndexImport } from './routes/_website/index'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AppDashboardImport } from './routes/_app/dashboard'
import { Route as AppExhibitionsIndexImport } from './routes/_app/exhibitions/index'
import { Route as AppCollectorsIndexImport } from './routes/_app/collectors/index'
import { Route as AppArtworksIndexImport } from './routes/_app/artworks/index'
import { Route as AppArtistsIndexImport } from './routes/_app/artists/index'
import { Route as AppSettingsProfileImport } from './routes/_app/settings/profile'
import { Route as AppExhibitionsTitleImport } from './routes/_app/exhibitions/$title'
import { Route as AppCollectorsIdImport } from './routes/_app/collectors/$id'
import { Route as AppArtworksIdImport } from './routes/_app/artworks/$id'
import { Route as AppArtistsIdImport } from './routes/_app/artists/$id'

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const WebsiteIndexRoute = WebsiteIndexImport.update({
  id: '/_website/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/_auth/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AppDashboardRoute = AppDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AppRoute,
} as any)

const AppExhibitionsIndexRoute = AppExhibitionsIndexImport.update({
  id: '/exhibitions/',
  path: '/exhibitions/',
  getParentRoute: () => AppRoute,
} as any)

const AppCollectorsIndexRoute = AppCollectorsIndexImport.update({
  id: '/collectors/',
  path: '/collectors/',
  getParentRoute: () => AppRoute,
} as any)

const AppArtworksIndexRoute = AppArtworksIndexImport.update({
  id: '/artworks/',
  path: '/artworks/',
  getParentRoute: () => AppRoute,
} as any)

const AppArtistsIndexRoute = AppArtistsIndexImport.update({
  id: '/artists/',
  path: '/artists/',
  getParentRoute: () => AppRoute,
} as any)

const AppSettingsProfileRoute = AppSettingsProfileImport.update({
  id: '/settings/profile',
  path: '/settings/profile',
  getParentRoute: () => AppRoute,
} as any)

const AppExhibitionsTitleRoute = AppExhibitionsTitleImport.update({
  id: '/exhibitions/$title',
  path: '/exhibitions/$title',
  getParentRoute: () => AppRoute,
} as any)

const AppCollectorsIdRoute = AppCollectorsIdImport.update({
  id: '/collectors/$id',
  path: '/collectors/$id',
  getParentRoute: () => AppRoute,
} as any)

const AppArtworksIdRoute = AppArtworksIdImport.update({
  id: '/artworks/$id',
  path: '/artworks/$id',
  getParentRoute: () => AppRoute,
} as any)

const AppArtistsIdRoute = AppArtistsIdImport.update({
  id: '/artists/$id',
  path: '/artists/$id',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/dashboard': {
      id: '/_app/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppDashboardImport
      parentRoute: typeof AppImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/_website/': {
      id: '/_website/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof WebsiteIndexImport
      parentRoute: typeof rootRoute
    }
    '/_app/artists/$id': {
      id: '/_app/artists/$id'
      path: '/artists/$id'
      fullPath: '/artists/$id'
      preLoaderRoute: typeof AppArtistsIdImport
      parentRoute: typeof AppImport
    }
    '/_app/artworks/$id': {
      id: '/_app/artworks/$id'
      path: '/artworks/$id'
      fullPath: '/artworks/$id'
      preLoaderRoute: typeof AppArtworksIdImport
      parentRoute: typeof AppImport
    }
    '/_app/collectors/$id': {
      id: '/_app/collectors/$id'
      path: '/collectors/$id'
      fullPath: '/collectors/$id'
      preLoaderRoute: typeof AppCollectorsIdImport
      parentRoute: typeof AppImport
    }
    '/_app/exhibitions/$title': {
      id: '/_app/exhibitions/$title'
      path: '/exhibitions/$title'
      fullPath: '/exhibitions/$title'
      preLoaderRoute: typeof AppExhibitionsTitleImport
      parentRoute: typeof AppImport
    }
    '/_app/settings/profile': {
      id: '/_app/settings/profile'
      path: '/settings/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof AppSettingsProfileImport
      parentRoute: typeof AppImport
    }
    '/_app/artists/': {
      id: '/_app/artists/'
      path: '/artists'
      fullPath: '/artists'
      preLoaderRoute: typeof AppArtistsIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/artworks/': {
      id: '/_app/artworks/'
      path: '/artworks'
      fullPath: '/artworks'
      preLoaderRoute: typeof AppArtworksIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/collectors/': {
      id: '/_app/collectors/'
      path: '/collectors'
      fullPath: '/collectors'
      preLoaderRoute: typeof AppCollectorsIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/exhibitions/': {
      id: '/_app/exhibitions/'
      path: '/exhibitions'
      fullPath: '/exhibitions'
      preLoaderRoute: typeof AppExhibitionsIndexImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppDashboardRoute: typeof AppDashboardRoute
  AppArtistsIdRoute: typeof AppArtistsIdRoute
  AppArtworksIdRoute: typeof AppArtworksIdRoute
  AppCollectorsIdRoute: typeof AppCollectorsIdRoute
  AppExhibitionsTitleRoute: typeof AppExhibitionsTitleRoute
  AppSettingsProfileRoute: typeof AppSettingsProfileRoute
  AppArtistsIndexRoute: typeof AppArtistsIndexRoute
  AppArtworksIndexRoute: typeof AppArtworksIndexRoute
  AppCollectorsIndexRoute: typeof AppCollectorsIndexRoute
  AppExhibitionsIndexRoute: typeof AppExhibitionsIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppDashboardRoute: AppDashboardRoute,
  AppArtistsIdRoute: AppArtistsIdRoute,
  AppArtworksIdRoute: AppArtworksIdRoute,
  AppCollectorsIdRoute: AppCollectorsIdRoute,
  AppExhibitionsTitleRoute: AppExhibitionsTitleRoute,
  AppSettingsProfileRoute: AppSettingsProfileRoute,
  AppArtistsIndexRoute: AppArtistsIndexRoute,
  AppArtworksIndexRoute: AppArtworksIndexRoute,
  AppCollectorsIndexRoute: AppCollectorsIndexRoute,
  AppExhibitionsIndexRoute: AppExhibitionsIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AppRouteWithChildren
  '/dashboard': typeof AppDashboardRoute
  '/login': typeof AuthLoginRoute
  '/': typeof WebsiteIndexRoute
  '/artists/$id': typeof AppArtistsIdRoute
  '/artworks/$id': typeof AppArtworksIdRoute
  '/collectors/$id': typeof AppCollectorsIdRoute
  '/exhibitions/$title': typeof AppExhibitionsTitleRoute
  '/settings/profile': typeof AppSettingsProfileRoute
  '/artists': typeof AppArtistsIndexRoute
  '/artworks': typeof AppArtworksIndexRoute
  '/collectors': typeof AppCollectorsIndexRoute
  '/exhibitions': typeof AppExhibitionsIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AppRouteWithChildren
  '/dashboard': typeof AppDashboardRoute
  '/login': typeof AuthLoginRoute
  '/': typeof WebsiteIndexRoute
  '/artists/$id': typeof AppArtistsIdRoute
  '/artworks/$id': typeof AppArtworksIdRoute
  '/collectors/$id': typeof AppCollectorsIdRoute
  '/exhibitions/$title': typeof AppExhibitionsTitleRoute
  '/settings/profile': typeof AppSettingsProfileRoute
  '/artists': typeof AppArtistsIndexRoute
  '/artworks': typeof AppArtworksIndexRoute
  '/collectors': typeof AppCollectorsIndexRoute
  '/exhibitions': typeof AppExhibitionsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_app/dashboard': typeof AppDashboardRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_website/': typeof WebsiteIndexRoute
  '/_app/artists/$id': typeof AppArtistsIdRoute
  '/_app/artworks/$id': typeof AppArtworksIdRoute
  '/_app/collectors/$id': typeof AppCollectorsIdRoute
  '/_app/exhibitions/$title': typeof AppExhibitionsTitleRoute
  '/_app/settings/profile': typeof AppSettingsProfileRoute
  '/_app/artists/': typeof AppArtistsIndexRoute
  '/_app/artworks/': typeof AppArtworksIndexRoute
  '/_app/collectors/': typeof AppCollectorsIndexRoute
  '/_app/exhibitions/': typeof AppExhibitionsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/dashboard'
    | '/login'
    | '/'
    | '/artists/$id'
    | '/artworks/$id'
    | '/collectors/$id'
    | '/exhibitions/$title'
    | '/settings/profile'
    | '/artists'
    | '/artworks'
    | '/collectors'
    | '/exhibitions'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/dashboard'
    | '/login'
    | '/'
    | '/artists/$id'
    | '/artworks/$id'
    | '/collectors/$id'
    | '/exhibitions/$title'
    | '/settings/profile'
    | '/artists'
    | '/artworks'
    | '/collectors'
    | '/exhibitions'
  id:
    | '__root__'
    | '/_app'
    | '/_app/dashboard'
    | '/_auth/login'
    | '/_website/'
    | '/_app/artists/$id'
    | '/_app/artworks/$id'
    | '/_app/collectors/$id'
    | '/_app/exhibitions/$title'
    | '/_app/settings/profile'
    | '/_app/artists/'
    | '/_app/artworks/'
    | '/_app/collectors/'
    | '/_app/exhibitions/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  AuthLoginRoute: typeof AuthLoginRoute
  WebsiteIndexRoute: typeof WebsiteIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  AuthLoginRoute: AuthLoginRoute,
  WebsiteIndexRoute: WebsiteIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/_auth/login",
        "/_website/"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/dashboard",
        "/_app/artists/$id",
        "/_app/artworks/$id",
        "/_app/collectors/$id",
        "/_app/exhibitions/$title",
        "/_app/settings/profile",
        "/_app/artists/",
        "/_app/artworks/",
        "/_app/collectors/",
        "/_app/exhibitions/"
      ]
    },
    "/_app/dashboard": {
      "filePath": "_app/dashboard.tsx",
      "parent": "/_app"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx"
    },
    "/_website/": {
      "filePath": "_website/index.tsx"
    },
    "/_app/artists/$id": {
      "filePath": "_app/artists/$id.tsx",
      "parent": "/_app"
    },
    "/_app/artworks/$id": {
      "filePath": "_app/artworks/$id.tsx",
      "parent": "/_app"
    },
    "/_app/collectors/$id": {
      "filePath": "_app/collectors/$id.tsx",
      "parent": "/_app"
    },
    "/_app/exhibitions/$title": {
      "filePath": "_app/exhibitions/$title.tsx",
      "parent": "/_app"
    },
    "/_app/settings/profile": {
      "filePath": "_app/settings/profile.tsx",
      "parent": "/_app"
    },
    "/_app/artists/": {
      "filePath": "_app/artists/index.tsx",
      "parent": "/_app"
    },
    "/_app/artworks/": {
      "filePath": "_app/artworks/index.tsx",
      "parent": "/_app"
    },
    "/_app/collectors/": {
      "filePath": "_app/collectors/index.tsx",
      "parent": "/_app"
    },
    "/_app/exhibitions/": {
      "filePath": "_app/exhibitions/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
