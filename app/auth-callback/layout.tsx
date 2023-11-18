import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Auth Callback",
};
export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
