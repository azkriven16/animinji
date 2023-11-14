import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShellProps {
  className?: string;
  children: ReactNode;
}

export default function Shell({ className, children }: ShellProps) {
  return (
    <main className={cn("max-w-4xl mx-auto px-5 py-2", className)}>
      {children}
    </main>
  );
}
