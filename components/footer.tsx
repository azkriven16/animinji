"use client";

import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "./ui/button";
import { siteConfig } from "@/constants/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-3 px-2">
      <div className="max-w-5xl mx-auto space-y-10">
        <MainFooter />
        <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3">
          <div className="text-muted-foreground">
            Built by{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              className="hover:underline text-foreground"
            >
              azkriven.{" "}
            </a>
          </div>

          <div className="flex items-center gap-3 justify-between">
            <ModeToggle />

            <Button variant="ghost">
              <AiFillGithub size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MainFooter() {
  const path = usePathname();
  return (
    <div className="space-y-5">
      <Logo />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Built with</h1>
          {siteConfig.builtWith.map((item) => (
            <FooterStack key={item.text} {...item} />
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Social</h1>
          {siteConfig.lofi.map((item) => (
            <FooterStack {...item} key={item.text} />
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Help</h1>
          {siteConfig.lofi.map((item) => (
            <FooterStack {...item} key={item.text} />
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Lofi</h1>
          {siteConfig.lofi.map((item) => (
            <FooterStack {...item} key={item.text} />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-base sm:text-md font-medium">Navigation</h1>
        <div className="flex flex-col md:flex-row gap-3">
          {siteConfig.navItems.map((item) => (
            <Link href={item.href} key={item.text}>
              <Button
                size="sm"
                className="w-full justify-start"
                variant={path === item.href ? "default" : "secondary"}
              >
                {item.text}
              </Button>
            </Link>
          ))}
          <div className="flex-1"></div>
          <p className="text-muted-foreground text-sm max-w-md text-center md:text-start mx-auto">
            Animinji is a minimal anime streaming website built with Typescript,
            Next 13, TRPC and React Query.
          </p>
        </div>
      </div>
    </div>
  );
}

interface FooterStackProps {
  href: string;
  text: string;
}

function FooterStack({ href, text }: FooterStackProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-muted-foreground hover:underline hover:text-foreground text-sm my-2"
    >
      {text}
    </a>
  );
}
