import { animeBaseURL } from "@/constants/site";
import { IAnimeResult } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useInfo = (id: string) => {
  return useQuery<IAnimeResult>(["info", id], async () => {
    const res = await fetch(`${animeBaseURL}/anime/gogoanime/info/${id}`);
    return res.json();
  });
};
