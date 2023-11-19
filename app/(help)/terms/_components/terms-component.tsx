import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/constants/site";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TermsComponent() {
  return (
    <Shell className="py-10 flex flex-col max-w-2xl">
      <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-4xl">
        Terms & Conditions
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg">
        Read the terms and conditions of {siteConfig.name}.
      </p>
      <Separator className="my-12" />
      <p className="leading-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus
        porro pariatur totam officiis, magnam voluptas sed. Nam enim labore at.
        Cumque quaerat molestias ex voluptatem iusto voluptates ipsum tempora.
      </p>
      <h2 className="mt-12 font-heading text-2xl font-semibold tracking-tight">
        Lorem ipsum dolor
      </h2>
      <Separator className="my-6" />

      <p className="leading-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus
        porro pariatur totam officiis, magnam voluptas sed. Nam enim labore at.
        Cumque quaerat molestias ex voluptatem iusto voluptates ipsum tempora.
      </p>

      <div className="flex justify-between mt-12">
        <Link href="/contact" className="w-fit self-end">
          <Button variant="ghost">
            <ChevronLeft size={18} className="mr-2" /> Contact
          </Button>
        </Link>

        <Link href="/privacy" className="w-fit self-end">
          <Button variant="ghost">
            Privacy <ChevronRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </Shell>
  );
}
