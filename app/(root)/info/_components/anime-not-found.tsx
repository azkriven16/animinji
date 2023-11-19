"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import NavSearch from "@/components/navbar/nav-search";

export default function AnimeNotFound({ anime }: { anime: string }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const triggerCtrlKAndCtrlVFunctionality = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-lg mx-auto">
      {anime && openModal ? (
        <NavSearch
          input={anime}
          className="opacity-0 h-full w-full absolute pointer-events-none"
        />
      ) : null}
      <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
      <p className="text-muted-foreground">
        It's not you, it's us. An error occurred while trying to load this page.
      </p>
      <Image
        src="/tired.png"
        className="object-contain dark:invert dark:mix-blend-lighten contrast-150"
        alt="Box"
        height={200}
        width={200}
      />
      <Button
        onClick={triggerCtrlKAndCtrlVFunctionality}
        className="mt-5 w-full"
      >
        Try again (Search)
      </Button>

      <Button
        variant="secondary"
        onClick={() => router.back()}
        className="mt-5 w-full"
      >
        Go back
      </Button>
    </div>
  );
}
