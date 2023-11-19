import { Metadata } from "next";
import VideoContainer from "./_components/video-container";
import { animeBaseURL, siteConfig } from "@/constants/site";
import { cleanHtmlTags } from "@/lib/utils";
import { IAnimeEpisode } from "@/types";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const res = await fetch(
    `${animeBaseURL}/anime/gogoanime/info/${searchParams.anime}`
  ).then((res) => res.json());

  const ep = res.episodes.find(
    (ep: IAnimeEpisode) => ep.id === searchParams.episode
  );

  if (!ep) {
    return {
      title: `${cleanHtmlTags(res.title)} - ${siteConfig.name}`,
    };
  } else {
    return {
      title: `${cleanHtmlTags(res.title)} Episode ${ep.number} - ${
        siteConfig.name
      }`,
    };
  }
}

export default function VideoPage() {
  return (
    <div>
      <VideoContainer />
    </div>
  );
}
