"use client";

// import Comments from "@/components/anime/comments";
import Error from "@/components/error";
// import Interactions from "@/components/anime/interactions";
import { Spinner } from "@/components/spinner";
import { cleanHtmlTags } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import VideoPlayer from "@/components/video-player";
import { IAnimeEpisode } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Episodes from "@/components/episodes";
import Shell from "@/components/shell";
import { useInfo } from "@/context/use-info";
import { useEpisode } from "@/context/use-episode";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const anime = searchParams.get("anime");
  const episode = searchParams.get("episode");

  const { data: info, isLoading: infoLoading } = useInfo(anime as string);
  const { data, isLoading, isError, refetch } = useEpisode(episode as string);

  const currentEpisode: IAnimeEpisode = info?.episodes?.find(
    (ep: IAnimeEpisode) => ep.id === episode
  );
  const currentEpIndex = info?.episodes?.indexOf(currentEpisode);

  const nextEpId = info?.episodes[currentEpIndex + 1]?.id;
  const prevEpId = info?.episodes[currentEpIndex - 1]?.id;

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

  return (
    <>
      <div className="bg-black w-screen">
        <div className="mx-auto max-w-3xl">
          {data && <VideoPlayer episode={data} />}
        </div>
      </div>

      <Shell className="space-y-10">
        <div className="space-y-3">
          <div className="flex sm:flex-row gap-3 sm:gap-0 flex-col justify-between">
            <h1 className="font-semibold text-xl md:text-2xl">
              {cleanHtmlTags(info?.title)}
            </h1>
            <div className="self-end flex gap-5">
              <Button
                size="sm"
                variant="secondary"
                disabled={prevEpId === undefined}
              >
                <a
                  className="flex items-center"
                  href={`/video?anime=${anime}&episode=${prevEpId}`}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> prev
                </a>
              </Button>
              <Button
                size="sm"
                variant="secondary"
                disabled={nextEpId === undefined}
              >
                <a
                  className="flex items-center"
                  href={`/video?anime=${anime}&episode=${nextEpId}`}
                >
                  next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          {/* <Interactions anime={info} /> */}
          <p>Episode {currentEpisode?.number}</p>

          <div className="flex justify-between flex-col md:flex-row gap-5">
            <div className="md:w-2/3">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {cleanHtmlTags(info?.description)}
              </p>
            </div>
          </div>
        </div>

        <div className="pb-20 gap-10">
          <Episodes
            data={info}
            hasEpisodes
            loading={infoLoading}
            text="Episodes"
          />
        </div>

        {/* <Comments /> */}
      </Shell>
    </>
  );
}
