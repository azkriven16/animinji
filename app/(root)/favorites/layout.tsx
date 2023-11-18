import Unauthorized from "@/app/(root)/favorites/_components/unauthorized";
import { db } from "@/db";
import { auth } from "@clerk/nextjs";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Favorites",
};
export default async function Layout({ children }: { children: ReactNode }) {
  const { userId } = auth();

  if (!userId) {
    return (
      <Unauthorized
        headline="You need to login."
        img="/todo-list.png"
        subheadline="You need to login to see favorites."
      />
    );
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!dbUser) {
    return redirect("/auth-callback?origin=favorites");
  }
  return <>{children}</>;
}
