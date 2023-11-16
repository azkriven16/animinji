import { animeBaseURL } from "@/constants/site";
import { useQuery } from "@tanstack/react-query";

export const useEpisode = (episodeId: string) => {
  return useQuery(["watch", episodeId], async () => {
    const res = await fetch(
      `${animeBaseURL}/anime/gogoanime/watch/${episodeId}`
    );
    return res.json();
  });
};
