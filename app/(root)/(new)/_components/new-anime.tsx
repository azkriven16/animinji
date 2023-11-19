"use client";

import Episodes from "@/components/episodes";
import Error from "@/components/error";
import Shell from "@/components/shell";
import { animeType, useAnime } from "@/context/use-anime";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NewAnime() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, isLoading, isError } = useAnime({
    type: animeType.RecentEpisodes,
    page: page,
  });

  if (isError)
    return (
      <Error
        headline="Oops! Something went wrong."
        img="/movie.png"
        subheadline="We're sorry, but an error occurred while loading this page."
      />
    );

  return (
    <Shell>
      <Episodes
        data={data}
        loading={isLoading}
        text="Recent Release"
        desc="Check out latest episodes"
        pagination="/"
      />
    </Shell>
  );
}
