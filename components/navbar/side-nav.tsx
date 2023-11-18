"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Button, buttonVariants } from "../ui/button";
import Logo from "../logo";
import { siteConfig } from "@/constants/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { AiFillGithub } from "react-icons/ai";
import { SignedOut } from "@clerk/nextjs";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignUpButton,
} from "@clerk/clerk-react";
import { useState } from "react";

export default function SideNav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <HiOutlineMenuAlt2 size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex h-full">
          <SheetTitle>
            <Logo />
          </SheetTitle>

          <ul className="flex flex-col pt-5 py-10 border-y">
            {siteConfig.navItems.map((link) => (
              <li onClick={handleClose} key={link.text}>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start"
                  )}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full">
              <SignedOut>
                <SignInButton mode="modal">
                  <div>
                    <Button
                      onClick={handleClose}
                      size="sm"
                      className="w-full mb-1"
                    >
                      Sign In
                    </Button>
                    <span className="text-sm text-muted-foreground hover:underline hover:text-foreground cursor-pointer">
                      Already have account?
                    </span>
                  </div>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <Link href="/favorites">
                  <Button
                    onClick={handleClose}
                    size="sm"
                    className="w-full mb-1"
                  >
                    Favorites
                  </Button>
                  <span className="text-sm text-muted-foreground hover:underline hover:text-foreground cursor-pointer">
                    Check out your favorites list.
                  </span>
                </Link>
              </SignedIn>
            </div>
            or
            <div className="w-full">
              <SignedOut>
                <SignUpButton mode="modal">
                  <div>
                    <Button
                      onClick={handleClose}
                      variant="secondary"
                      size="sm"
                      className="w-full mb-1"
                    >
                      Sign Up
                    </Button>
                    <span className="text-sm text-muted-foreground hover:underline hover:text-foreground cursor-pointer">
                      New to {siteConfig.name}? Create account.
                    </span>
                  </div>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <SignOutButton>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full mb-1"
                    >
                      Sign Out
                    </Button>
                    <span className="text-sm text-muted-foreground hover:underline hover:text-foreground cursor-pointer">
                      Log out of your account.
                    </span>
                  </div>
                </SignOutButton>
              </SignedIn>
            </div>
          </div>
          <div className="flex">
            <ModeToggle />
            <Button variant="ghost">
              <AiFillGithub size={20} />
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
