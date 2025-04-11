import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Frame } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useUserInfo } from "~/stores/user-info";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const userInfo = useUserInfo();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Frame className="h-6 w-6 text-purple-800" />
          <span className="text-lg font-semibold">Furman Art Gallery</span>
        </div>
        <nav className="ml-auto flex gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Dashboard</Link>
          </Button>
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
          <Button
            variant="secondary"
            size="sm"
            className="cursor-pointer"
            onClick={userInfo.clearUserInfo}
          >
            Logout
          </Button>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
