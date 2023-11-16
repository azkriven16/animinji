import { animeBaseURL } from "@/constants/site";
import { useQuery } from "@tanstack/react-query";

interface useGetGogoProps {
  page?: number;
  type: animeType;
}

export enum animeType {
  RecentEpisodes = "recent-episodes",
  TopAiring = "top-airing",
}
export const useAnime = ({
  page = 1,
  type = animeType.RecentEpisodes,
}: useGetGogoProps) => {
  return useQuery([type, page], async () => {
    const res = await fetch(
      `${animeBaseURL}/anime/gogoanime/${type}?page=${page}`
    );
    return res.json();
  });
};
