import { cleanHtmlTags } from "@/lib/utils";
import { Favorite } from "@prisma/client";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  anime: Favorite;
};

export default function FavoriteItem({ anime }: Props) {
  console.log(anime);
  return (
    <Link
      href={`/info?anime=${anime.animeId}`}
      className="relative overflow-hidden group"
    >
      <div className="transition-transform duration-500 transform origin-center group-hover:scale-110">
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={anime.imgUrl!}
          alt="Anime Image"
          className="object-cover aspect-video"
          width="100%"
          height="100%"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70 hidden transition-opacity group-hover:grid place-items-center">
          <Play size={20} className="text-white hover:text-red-500" />
        </div>
      </div>
      <h3 className="line-clamp-1 mt-2">{cleanHtmlTags(anime.title)}</h3>
    </Link>
  );
}
