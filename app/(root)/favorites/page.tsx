"use client";
import Error from "@/components/error";
import NoItems from "@/components/no-items";
import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import Unauthorized from "@/app/(root)/favorites/_components/unauthorized";
import { siteConfig } from "@/constants/site";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Favorites() {
  const { userId } = useAuth();
  const path = usePathname();
  return (
    <Shell className="my-5">
      <div className="flex gap-3">
        {siteConfig.navItems.map((item) => (
          <Link href={item.href} key={item.text}>
            <Button
              size="sm"
              className="w-full"
              variant={path === item.href ? "default" : "secondary"}
            >
              {item.text}
            </Button>
          </Link>
        ))}
      </div>

      {!userId ? (
        <Unauthorized
          headline="You need to login."
          img="/todo-list.png"
          subheadline="You need to login to see favorites."
        />
      ) : (
        <NoItems headline="There are no items to display." />
      )}
    </Shell>
  );
}
