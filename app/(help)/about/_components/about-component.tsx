import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/constants/site";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <Shell className="py-10 flex flex-col max-w-2xl">
      <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-4xl">
        About
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg">
        About the project and the author of the project.
      </p>
      <Separator className="my-12" />
      <p className="leading-7">
        This is an open source anime website built with everything new in
        Next.js 13. The project is still in development.
      </p>
      <h2 className="mt-12 font-heading text-2xl font-semibold tracking-tight">
        Tech stack used
      </h2>
      <Separator className="my-6" />

      <ul className="space-y-2 px-8">
        {siteConfig.builtWith.map((item) => (
          <li key={item.text} className="underline list-disc">
            <Link href={item.href} target="_blank">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-heading text-2xl font-semibold tracking-tight">
        About the author
      </h2>
      <Separator className="my-6" />

      <p className="leading-7">
        Hi, I'm{" "}
        <a href={siteConfig.links.github} target="_blank" className="underline">
          azkriven
        </a>
        . Self-taught web developer. My socials are below.
      </p>

      <ul className="space-y-2 px-8 mt-6">
        {siteConfig.social.map((item) => (
          <li key={item.text} className="underline list-disc">
            <Link href={item.href} target="_blank">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="w-fit self-end mt-12">
        <Button variant="ghost">
          Contact <ChevronRight size={18} className="ml-2" />
        </Button>
      </Link>
    </Shell>
  );
}
