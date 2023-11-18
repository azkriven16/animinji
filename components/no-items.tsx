"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

interface NoItemsProps {
  headline: string;
}
export default function NoItems({ headline }: NoItemsProps) {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-2">{headline}</h2>
        <Image
          src="/tired.png"
          className="mx-auto object-contain dark:invert dark:mix-blend-lighten contrast-150"
          alt="Box"
          height={200}
          width={200}
        />
        <Button onClick={() => router.push("/")} className="mt-5 w-full">
          Go back
        </Button>
      </div>
    </div>
  );
}
