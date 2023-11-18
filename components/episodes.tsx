"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, cleanHtmlTags, skeletonArray } from "@/lib/utils";
import Link from "next/link";
import { Play, SlidersHorizontal } from "lucide-react";
import { IAnimeEpisode, IAnimeResult } from "@/types";
import Pagination from "./pagination";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import NoItems from "./no-items";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { siteConfig } from "@/constants/site";

interface GridProps {
  loading: boolean;
  pagination?: string;
  hasEpisodes?: boolean;
  text: string;
  desc?: string;
  data: IAnimeResult | undefined;
}

const episodesPerPage = 50; // Adjust the number of episodes to load initially
const initialVisibleEpisodes = episodesPerPage;

export default function Episodes({
  loading,
  text,
  data,
  pagination,
  hasEpisodes,
  desc,
}: GridProps) {
  const path = usePathname();
  const router = useRouter();

  const [visibleEpisodes, setVisibleEpisodes] = useState(
    initialVisibleEpisodes
  );
  const [isDescendingOrder, setIsDescendingOrder] = useState(false); // Default to ascending order

  const totalEpisodes = data?.episodes?.length;

  const handleShowMore = () => {
    const newVisibleEpisodes = visibleEpisodes + episodesPerPage;
    setVisibleEpisodes(Math.min(newVisibleEpisodes, totalEpisodes));
  };
  // Sort episodes based on the selected order (ascending or descending)
  const sortedEpisodes = isDescendingOrder
    ? [...data?.episodes].reverse()
    : data?.episodes;

  //handle form

  const FormSchema = z.object({
    episodeNumber: z
      .string()
      .min(1, {
        message: "Please enter an episode",
      })
      .refine(
        (value) => {
          const numericValue = Number(value);
          return !isNaN(numericValue) && Number.isInteger(numericValue);
        },
        {
          message: "Episode number must be a valid integer.",
        }
      ),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      episodeNumber: "",
    },
  });

  function onSubmit(d: z.infer<typeof FormSchema>) {
    const epId = data?.episodes?.find(
      (ep: IAnimeEpisode) => ep.number === Number(d.episodeNumber)
    )?.id;

    if (!epId) {
      toast.error("This episode doesnt exist");
    } else {
      router.push(`/video?anime=${data?.id}&episode=${epId}`);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          {path === "/video" && (
            <h1
              className={cn(
                path === "/video"
                  ? "text-lg md:text-xl font-semibold"
                  : "text-base sm:text-md md:text-lg font-medium"
              )}
            >
              {cleanHtmlTags(data?.title)} {text}
            </h1>
          )}
          {path !== "/info" && path !== "/video" && (
            <div className="flex gap-3">
              {siteConfig.navItems.map((item) => (
                <Link href={item.href} key={item.text}>
                  <Button
                    size="sm"
                    className="w-full"
                    variant={path === item.href ? "default" : "secondary"}
                  >
                    {item.text}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
        {pagination && (
          <div className="hidden sm:flex">
            <Pagination url={pagination} />
          </div>
        )}
      </div>
      {pagination && (
        <div className="sm:hidden flex">
          <Pagination url={pagination} />
        </div>
      )}
      {hasEpisodes && (
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm" className="my-5">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {isDescendingOrder ? "Newest" : "Oldest"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => setIsDescendingOrder(true)}
                className={cn(
                  "rounded-none",
                  isDescendingOrder && "bg-secondary text-secondary-foreground"
                )}
              >
                Newest
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsDescendingOrder(false)}
                className={cn(
                  "rounded-none",
                  !isDescendingOrder && "bg-secondary text-secondary-foreground"
                )}
              >
                Oldest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          or
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="episodeNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-3">
                        <Input
                          placeholder={`Enter episode number between ${data?.episodes?.[0]?.number} and ${data?.episodes?.length}`}
                          {...field}
                        />
                        <Button type="submit">Submit</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      )}

      <div
        className={cn(
          hasEpisodes
            ? "h-full w-full grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
            : "h-full w-full grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-5"
        )}
      >
        {loading
          ? skeletonArray.map((_, index) => (
              <Skeleton key={index} className="w-full aspect-video rounded" />
            ))
          : hasEpisodes
          ? sortedEpisodes
              ?.slice(0, visibleEpisodes)
              ?.map((anime: IAnimeEpisode) => (
                <EpisodeCard key={anime.id} anime={anime} info={data} />
              ))
          : data?.results?.map((anime: IAnimeResult) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
      </div>

      {data?.results?.length === 0 && (
        <NoItems headline="There are no items to display." />
      )}

      {visibleEpisodes < totalEpisodes && (
        <Button
          className="show-more-button my-5 w-full"
          size="sm"
          onClick={handleShowMore}
        >
          Show More Episodes
        </Button>
      )}
      {pagination && <Pagination url={pagination} />}
    </>
  );
}

function AnimeCard({ anime }: { anime: IAnimeResult }) {
  return (
    <Link
      href={`/info?anime=${anime.id}`}
      className="relative overflow-hidden group"
    >
      <div className="transition-transform duration-500 transform origin-center group-hover:scale-110">
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={anime.image!}
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
      <h3 className="line-clamp-1 mt-2">
        {cleanHtmlTags(anime.title)}
        {anime?.episodeNumber && (
          <Badge className="absolute right-0 top-0 rounded-none font-medium text-xs">
            E{anime.episodeNumber}
          </Badge>
        )}
      </h3>
    </Link>
  );
}

function EpisodeCard({
  anime,
  info,
}: {
  anime: IAnimeEpisode | undefined;
  info: IAnimeResult | undefined;
}) {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode");

  const currentEpisode: IAnimeEpisode = info?.episodes?.find(
    (ep: IAnimeEpisode) => ep.id === episode
  );

  return (
    <Link
      href={`/video?anime=${info?.id}&episode=${anime?.id}`}
      className="group"
    >
      <Button
        className="w-full"
        variant={currentEpisode?.id === anime?.id ? "default" : "secondary"}
        size="sm"
      >
        <h3 className="line-clamp-1 text-sm">EP {anime?.number}</h3>
      </Button>
    </Link>
  );
}
