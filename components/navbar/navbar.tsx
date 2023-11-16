import React from "react";
import { ModeToggle } from "../mode-toggle";
import Logo from "../logo";
import { Button } from "../ui/button";
import NavSearch from "./nav-search";
import NavMobile from "./nav-mobile";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Spinner } from "../spinner";
import User from "../user";

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-3 px-2 bg-background border-b shadow-sm z-10">
      <div className="flex items-center max-w-5xl mx-auto justify-between">
        <NavMobile />
        <Logo />
        <div className=" flex items-center space-x-3">
          <NavSearch />
          <ModeToggle />
          <ClerkLoading>
            <div className="w-full flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <User />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
}
