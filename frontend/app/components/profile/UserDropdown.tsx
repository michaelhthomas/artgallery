import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
import { useProfileControllerServiceGetProfile } from "~/api/queries";
import { useUserInfo } from "~/stores/user-info";
import { Link } from "@tanstack/react-router";

export function UserDropdown() {
  const { data: user } = useProfileControllerServiceGetProfile();
  const { clearUserInfo } = useUserInfo();

  return (
    user && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
            <AvatarImage src={user.avatarUrl} rel="noorigin noreferrer" />
            <AvatarFallback>
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 mt-2">
          <Link to="/settings/profile">
            <DropdownMenuItem className="cursor-pointer">
              <User />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={clearUserInfo} className="cursor-pointer">
            <LogOut />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
