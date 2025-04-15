import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Frame, LogOut, User } from "lucide-react";
import PageNotFound from "~/components/error/PageNotFound";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useUserInfo } from "~/stores/user-info";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
  notFoundComponent: PageNotFound,
});

function AppLayout() {
  const { user, clearUserInfo } = useUserInfo();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link to="/">
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
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={`https://gravatar.com/avatar/${user.email}`}
                    rel="noorigin noreferrer"
                  />
                  <AvatarFallback>
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-2 mt-2">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <Link to="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    <User />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={clearUserInfo}
                  className="cursor-pointer"
                >
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
