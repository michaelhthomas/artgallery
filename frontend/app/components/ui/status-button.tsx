import { MutationStatus } from "@tanstack/react-query";
import { Button } from "./button";
import { cn } from "~/lib/utils";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export function StatusButton({
  status,
  ...props
}: { status: MutationStatus } & React.ComponentProps<typeof Button>) {
  const [internalStatus, setInternalStatus] = useState<MutationStatus>("idle");

  useEffect(() => {
    setInternalStatus(status);
    if (status === "success" || status === "error") {
      setTimeout(() => {
        setInternalStatus("idle");
      }, 2000);
    }
  }, [status]);

  return (
    <Button
      {...props}
      disabled={internalStatus === "pending" || props.disabled}
      className={cn(
        {
          "bg-green-800 text-white hover:bg-green-800":
            internalStatus === "success",
          "bg-red-800 text-white hover:bg-red-800": internalStatus === "error",
        },
        props.className,
      )}
    >
      {internalStatus === "pending" && <Loader2 className="animate-spin" />}
      {props.children}
    </Button>
  );
}
