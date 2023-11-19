import AnimeInfo from "./_components/anime-info";
import { Metadata } from "next";
import { animeBaseURL, siteConfig } from "@/constants/site";
import { cleanHtmlTags } from "@/lib/utils";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const res = await fetch(
    `${animeBaseURL}/anime/gogoanime/info/${searchParams.anime}`
  ).then((res) => res.json());

  return {
    title: `${cleanHtmlTags(res.title)} - ${siteConfig.name}`,
  };
}

export default function Info() {
  return <AnimeInfo />;
}
