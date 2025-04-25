import { createFileRoute } from "@tanstack/react-router";
import { useProfileControllerServiceGetProfile } from "~/api/queries";
import { ProfileSettingsForm } from "~/components/profile/ProfileSettingsForm";
import { Skeleton } from "~/components/ui/skeleton";

export const Route = createFileRoute("/_app/settings/profile")({
  component: ProfileSettingsPage,
});

function ProfileSettingsPage() {
  const { data: profile, refetch } = useProfileControllerServiceGetProfile();

  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account settings</p>
        </div>

        {profile ? (
          <ProfileSettingsForm profile={profile} refetch={refetch} />
        ) : (
          <div className="flex flex-col space-y-3 mt-6">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
