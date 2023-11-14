import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SearchInput from "./_components/search-input";
import Hero from "./_components/hero";
import BuiltWith from "./_components/built-with";

export default function Home() {
  return (
    <Shell className="flex flex-col lg:flex-row gap-20 py-10">
      <Hero />
      <div className="flex flex-col gap-5">
        <SearchInput />

        <div className="flex h-10 items-center space-x-4 text-sm">
          <Button variant="outline">Latest Anime</Button>
          <Separator orientation="vertical" />
          <Button variant="outline">Top Airing</Button>
          <Separator orientation="vertical" />
          <Button>Favorites</Button>
        </div>
        <BuiltWith />
      </div>
    </Shell>
  );
}
