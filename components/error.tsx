"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import NavSearch from "./navbar/nav-search";

interface ErrorProps {
  headline: string;
  subheadline: string;
  img: string;
}

export default function Error({ headline, subheadline, img }: ErrorProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">{headline}</h2>
      <p className="text-muted-foreground">{subheadline}</p>
      <Image
        src={img}
        className="object-contain dark:invert dark:mix-blend-lighten contrast-150"
        alt="Box"
        height={200}
        width={200}
      />

      <Button size="sm" onClick={() => router.back()} className="mt-5 w-full">
        Go back
      </Button>
    </div>
  );
}
