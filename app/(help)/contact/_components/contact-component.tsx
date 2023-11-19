import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/constants/site";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactComponent() {
  return (
    <Shell className="py-10 flex flex-col max-w-2xl">
      <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-4xl">
        Contact
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg">
        Contact us for any questions or concerns about {siteConfig.name}.
      </p>
      <Separator className="my-12" />
      <p className="leading-7">
        If you have any questions or concerns about {siteConfig.name}, please
        contact us using one of the methods below. We will try to respond as
        soon as possible.
      </p>
      <h2 className="mt-12 font-heading text-2xl font-semibold tracking-tight">
        Contact Information
      </h2>
      <Separator className="my-6" />

      <ul className="space-y-2 px-8">
        {siteConfig.social.map((item) => (
          <li key={item.text} className=" list-disc">
            <Link href={item.href} target="_blank">
              <span className="font-semibold">{item.text} : </span>
              <span className="underline">{item.href}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-12">
        <Link href="/about" className="w-fit self-end">
          <Button variant="ghost">
            <ChevronLeft size={18} className="mr-2" /> About
          </Button>
        </Link>

        <Link href="/terms" className="w-fit self-end">
          <Button variant="ghost">
            Terms <ChevronRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </Shell>
  );
}
