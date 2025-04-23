import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "../app.css";
import { useUserInfo } from "~/stores/user-info";
import { useEffect } from "react";
import PageNotFound from "~/components/error/PageNotFound";
import { Toaster } from "~/components/ui/sonner";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: PageNotFound,
});

function RootLayout() {
  const location = useLocation();
  const navigate = Route.useNavigate();
  const userInfo = useUserInfo();

  useEffect(() => {
    if (userInfo.user == null && !location.pathname.startsWith("/login")) {
      void navigate({ to: "/login" });
    }
  }, [userInfo, navigate, location]);

  return (
    <>
      <Outlet />
      <Toaster position="top-right" />
      <TanStackRouterDevtools />
    </>
  );
}

// function ErrorBoundary({ error }: ErrorComponentProps) {
//   let message = "Oops!";
//   let details = "An unexpected error occurred.";
//   let stack: string | undefined;

//   if (isRouteErrorResponse(error)) {
//     message = error.status === 404 ? "404" : "Error";
//     details =
//       error.status === 404
//         ? "The requested page could not be found."
//         : error.statusText || details;
//   } else if (import.meta.env.DEV && error && error instanceof Error) {
//     details = error.message;
//     stack = error.stack;
//   }

//   return (
//     <main className="pt-16 p-4 container mx-auto">
//       <h1>{message}</h1>
//       <p>{details}</p>
//       {stack && (
//         <pre className="w-full p-4 overflow-x-auto">
//           <code>{stack}</code>
//         </pre>
//       )}
//     </main>
//   );
// }
