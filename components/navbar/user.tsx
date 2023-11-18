"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function User() {
  const { user } = useUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={user?.imageUrl!}
            alt="logo"
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
          <DropdownMenuItem>
            {user?.emailAddresses[0].emailAddress}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="/favorites">Favorites</Link>
          </DropdownMenuItem>
          <SignOutButton>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
