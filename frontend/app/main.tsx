import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { OpenAPI } from "./api/requests";
import { useUserInfo } from "./stores/user-info";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new router instance
const router = createRouter({
  routeTree,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

// api client setup
OpenAPI.BASE = "";

// authorize requests for logged-in users
OpenAPI.interceptors.request.use((req) => {
  const userInfo = useUserInfo.getState();
  if (userInfo.user) {
    // add authorization header
    const headers = new Headers(req.headers);
    headers.set("Authorization", `Bearer ${userInfo.user.token}`);
    req.headers = headers;
  }
  return req;
});

OpenAPI.interceptors.response.use((res) => {
  if (res.status === 401) {
    useUserInfo.getState().clearUserInfo();
  }
  return res;
});

const queryClient = new QueryClient();

// Render the app
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
