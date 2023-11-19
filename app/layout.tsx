import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { siteConfig } from "@/constants/site";

// react image lazy load css
import "react-lazy-load-image-component/src/effects/blur.css";
import "./globals.css";
import { db } from "@/db";
import { redirect } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Euger Bonete",
      url: siteConfig.url,
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
