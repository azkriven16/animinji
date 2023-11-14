import React from "react";
import { ModeToggle } from "../mode-toggle";
import Logo from "../logo";
import { Button } from "../ui/button";
import NavSearch from "./nav-search";
import NavMobile from "./nav-mobile";
import NavItems from "./nav-items";

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-3 px-2 bg-background border-b shadow-sm z-50">
      <div className="flex items-center max-w-5xl mx-auto justify-between">
        <NavMobile />
        <Logo />
        <div className=" flex items-center space-x-3">
          <NavSearch />
          <ModeToggle />
          <Button size="sm">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
