import { siteConfig } from "@/constants/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function NavItems() {
  return (
    <ul className="flex space-x-2">
      {siteConfig.navItems.map((link) => (
        <li>
          <Link
            href={link.href}
            className={buttonVariants({ variant: "ghost" })}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
