"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

interface ErrorProps {
  headline: string;
  subheadline: string;
  img: string;
}

export default function Error({ headline, subheadline, img }: ErrorProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-2xl font-bold mb-2">{headline}</h2>
      <p className="text-muted-foreground">{subheadline}</p>
      <Image
        src={img}
        className="object-contain"
        alt="Box"
        height={300}
        width={300}
      />
      <Button onClick={() => router.back()} className="mt-5 w-full">
        Go back
      </Button>
    </div>
  );
}
