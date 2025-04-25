import { z } from "zod";
import { Frame } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useAuthControllerServiceLogin } from "~/api/queries";
import { useUserInfo } from "~/stores/user-info";
import { createFileRoute } from "@tanstack/react-router";

const loginSchema = z.object({
  username: z.string().min(2).max(100),
  password: z.string().min(8).max(100),
  rememberMe: z.boolean().default(false),
});

export const Route = createFileRoute("/_auth/login")({
  component: LoginPage,
});

function LoginPage() {
  const userInfo = useUserInfo();
  const navigate = Route.useNavigate();
  const { mutate, error, isPending } = useAuthControllerServiceLogin({
    onSuccess(data) {
      userInfo.setUserInfo(data, form.getValues().rememberMe === true);
      void navigate({ to: "/dashboard" });
    },
  });

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = (data) => {
    mutate({ requestBody: data });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="flex mt-auto w-full max-w-sm flex-col items-center space-y-6">
        <div className="flex items-center gap-2">
          <Frame className="h-10 w-10 text-purple-800" />
          <span className="text-2xl font-bold">Furman Art Gallery</span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <Card className="w-full border-zinc-800">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign in</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to access the gallery management system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {error != null && (
                  <div className="text-red-500 text-sm text-center">
                    {error instanceof Error ? error.message : "Login failed"}
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          autoCapitalize="none"
                          autoCorrect="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-medium leading-none">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />{" "}
              </CardContent>
              <CardFooter>
                <Button className="w-full" type="submit" disabled={isPending}>
                  {isPending ? "Signing in..." : "Sign In"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
        <div className="text-center text-sm text-muted-foreground">
          <span>Don&apos;t have an account? Contact </span>
          <a
            href="mailto:admin@furmanartgallery.com"
            className="text-purple-400 hover:text-purple-300"
          >
            admin@furmanartgallery.com
          </a>
        </div>
      </div>
      <footer className="mt-auto py-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Furman Art Gallery. All rights
        reserved.
      </footer>
    </div>
  );
}
