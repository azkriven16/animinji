import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Hero from "./_components/hero";
import BuiltWith from "./_components/built-with";

export default function Home() {
  return (
    <Shell className="flex flex-col gap-20 py-10">
      <Hero />
      <BuiltWith />
    </Shell>
  );
}
