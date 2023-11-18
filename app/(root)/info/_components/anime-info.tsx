"use client";

import Episodes from "@/components/episodes";
import Error from "@/components/error";
import Shell from "@/components/shell";
import { Spinner } from "@/components/spinner";
import { useInfo } from "@/context/use-info";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cleanHtmlTags } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import AddFavorite from "@/components/add-favorite";
import Comments from "@/components/comments";
import AnimeNotFound from "./anime-not-found";

type Props = {};

export default function AnimeInfo({}: Props) {
  const searchParams = useSearchParams();

  const anime = searchParams.get("anime") || "";

  const { data, isLoading, isError } = useInfo(anime as string);

  if (isError)
    return (
      <Error
        headline="Oops! Something went wrong."
        img="/movie.png"
        subheadline="We're sorry, but an error occurred while loading this page."
      />
    );

  if (isLoading)
    return (
      <div className="py-36">
        <Spinner size="lg" />
      </div>
    );

  if (!data.id) return <AnimeNotFound anime={anime} />;

  return (
    <Shell>
      <Accordion
        defaultValue={["item-2", "item-3"]}
        type="multiple"
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{cleanHtmlTags(data?.title)}</AccordionTrigger>
          <AccordionContent className="flex flex-col items-center gap-5">
            <p className="text-sm text-muted-foreground">
              {cleanHtmlTags(data?.description)}
            </p>
            <Card className="w-fit p-2">
              <div className="h-52 w-40 relative">
                <Image
                  src={data.image!}
                  alt={`${cleanHtmlTags(data?.title)} Image`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Select an episode</AccordionTrigger>
          <AccordionContent>
            <Episodes
              data={data}
              hasEpisodes
              loading={isLoading}
              text="Episodes"
            />
          </AccordionContent>
        </AccordionItem>

        <AddFavorite className="my-5" anime={data} />

        <AccordionItem value="item-3">
          <AccordionTrigger>Comments</AccordionTrigger>
          <AccordionContent className="py-2 px-1">
            <Comments />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Shell>
  );
}
