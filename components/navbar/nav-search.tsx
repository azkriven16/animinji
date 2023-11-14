"use client";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface NavSearchProps {
  className?: string;
}

export default function NavSearch({ className }: NavSearchProps) {
  const isLg = useMediaQuery("(max-width: 1024px)");

  return (
    <Button
      size={isLg ? "icon" : "default"}
      variant="outline"
      className={cn("space-x-3", className)}
    >
      <SearchIcon className="h-4 w-4 lg:mr-2" />
      <span className="lg:inline hidden">Search anime... </span>
      <Badge
        variant="secondary"
        className="rounded ml-2 font-mono py-1 lg:inline hidden"
      >
        Ctrl K
      </Badge>
    </Button>
  );
}
