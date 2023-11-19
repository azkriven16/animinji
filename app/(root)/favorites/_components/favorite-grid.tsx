"use client";
import NoItems from "@/components/no-items";
import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import Unauthorized from "@/app/(root)/favorites/_components/unauthorized";
import { siteConfig } from "@/constants/site";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trpc } from "@/app/_trpc/client";
import FavoriteItem from "./favorite-item";

export default function FavoritesGrid() {
  const { data, isLoading } = trpc.getUserFavorite.useQuery();
  const { userId } = useAuth();
  const path = usePathname();
  return (
    <Shell className="my-5 space-y-5 min-h-screen">
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
      ) : data?.length !== 0 ? (
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {data?.map((item) => (
            <FavoriteItem
              anime={{
                ...item,
                createdAt: new Date(item.createdAt),
                updatedAt: new Date(item.updatedAt),
              }}
            />
          ))}
        </div>
      ) : (
        <NoItems headline="There are no items to display." />
      )}
    </Shell>
  );
}
