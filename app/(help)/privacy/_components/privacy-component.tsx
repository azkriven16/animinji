import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/constants/site";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyComponent() {
  return (
    <Shell className="py-10 flex flex-col max-w-2xl">
      <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-4xl">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg">
        This is the privacy policy for {siteConfig.name}.
      </p>
      <Separator className="mt-12" />

      <h2 className="mt-12 font-heading text-2xl font-semibold tracking-tight">
        What information do we collect?
      </h2>
      <Separator className="my-6" />

      <p className="leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem
        praesentium fuga obcaecati perferendis fugit nesciunt? Necessitatibus,
        odit commodi voluptas libero similique pariatur, quis porro eveniet
        dolore animi officiis ea?Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eum, perferendis odit? Dolorem officia perferendis
        corrupti ullam repudiandae reprehenderit accusamus accusantium sed
        dignissimos quos laudantium ipsam, sit odio molestias sapiente
        provident!
      </p>

      <Link href="/terms" className="w-fit mt-12">
        <Button variant="ghost">
          <ChevronLeft size={18} className="mr-2" />
          Terms
        </Button>
      </Link>
    </Shell>
  );
}
