import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { db } from "@/db";
import { auth } from "@clerk/nextjs";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
};
export default async function Layout({ children }: { children: ReactNode }) {
  const { userId } = auth();

  if (userId) {
    const dbUser = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!dbUser) {
      return redirect("/auth-callback");
    }
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}