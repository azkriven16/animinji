import { animeBaseURL } from "@/constants/site";
import { useQuery } from "@tanstack/react-query";

export const useSearch = ({
  episodeId,
  page,
}: {
  episodeId: string;
  page?: number;
}) => {
  return useQuery(
    ["watch", episodeId], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `${animeBaseURL}/anime/gogoanime/${episodeId}?page=${page}`
      );
      return res.json();
    }
  );
};
