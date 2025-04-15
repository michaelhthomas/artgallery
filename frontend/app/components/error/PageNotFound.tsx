import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="flex flex-grow items-center flex-col justify-center h-full gap-8">
      <h1 className="text-6xl font-bold">Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Button asChild>
        <Link to="/">
          <ArrowLeft /> Back to home
        </Link>
      </Button>
    </div>
  );
}
