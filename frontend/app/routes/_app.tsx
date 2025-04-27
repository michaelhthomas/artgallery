import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { Frame } from "lucide-react";
import { useEffect } from "react";
import PageNotFound from "~/components/error/PageNotFound";
import { UserDropdown } from "~/components/profile/UserDropdown";
import { Button } from "~/components/ui/button";
import { useUserInfo } from "~/stores/user-info";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
  notFoundComponent: PageNotFound,
});

function AppLayout() {
  const location = useLocation();
  const navigate = Route.useNavigate();
  const userInfo = useUserInfo();

  useEffect(() => {
    if (userInfo.user == null && !location.pathname.startsWith("/login")) {
      void navigate({ to: "/login" });
    }
  }, [userInfo, navigate, location]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 print:hidden">
        <Link to="/dashboard">
          <div className="flex items-center gap-2">
            <Frame className="h-6 w-6 text-purple-800" />
            <span className="text-lg font-semibold">Furman Art Gallery</span>
          </div>
        </Link>
        <nav className="ml-auto flex gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/artworks">Artworks</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/exhibitions">Exhibitions</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/artists">Artists</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/collectors">Collectors</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/reports">Reports</Link>
          </Button>
          <UserDropdown />
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
