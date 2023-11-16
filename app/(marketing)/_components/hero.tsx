import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NavSearch from "@/components/navbar/nav-search";

export default function Hero() {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-center lg:text-start sm:text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-muted-foreground">
        minimalistic anime <span className="text-foreground">experience.</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/movie.png"
          alt="Movie"
          className="mx-auto lg:mx-0 dark:invert dark:mix-blend-lighten contrast-150"
          height={300}
          width={300}
        />

        <div className="flex gap-5 flex-col">
          <NavSearch variant="default" className="justify-between" />
          <div className="flex h-10 items-center space-x-4 text-sm">
            <Button variant="outline">Latest Anime</Button>
            <Separator orientation="vertical" />
            <Button variant="outline">Top Airing</Button>
            <Separator orientation="vertical" />
            <Button variant="secondary">Favorites</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
