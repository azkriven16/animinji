import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { trpc } from "@/app/_trpc/client";
import { IAnimeResult } from "@/types";
import { toast } from "sonner";
import { cn, cleanHtmlTags } from "@/lib/utils";
import { useState } from "react";

interface InteractionsProps {
  anime: IAnimeResult;
  className?: string;
}

export default function AddFavorite({ anime, className }: InteractionsProps) {
  const [loading, setLoading] = useState(false);
  const [isScaling, setIsScaling] = useState(false);
  const utils = trpc.useContext();

  const { data: favorite } = trpc.getUserFavorite.useQuery();
  const isFavorite = favorite?.find((id) => id.animeId === anime.id);

  const { mutate: addToFavorite } = trpc.addUserFavorite.useMutation({
    onSuccess: () => {
      utils.getUserFavorite.invalidate();
      isFavorite
        ? toast.error("Removed from favorites")
        : toast.success("Added to favorites");
    },
    onMutate: () => {
      utils.getUserFavorite.invalidate();
      toast.loading("Loading...");
      setLoading(true);
    },
    onSettled: () => {
      utils.getUserFavorite.invalidate();
      toast.dismiss();
      setLoading(false);
    },
    onError: (error) => {
      utils.getUserFavorite.invalidate();
      toast.error(`${error.message}`);
    },
  });

  const handleClick = () => {
    setIsScaling(true);
    setTimeout(() => {
      setIsScaling(false);
    }, 500); // Assuming your animation duration is 500 milliseconds

    addToFavorite({
      animeId: anime.id,
      id: anime.id,
      imgUrl: anime.image!,
      title: cleanHtmlTags(anime.title),
    });
  };
  return (
    <Button
      onClick={handleClick}
      size="sm"
      variant="secondary"
      className={cn("gap-2", className)}
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Heart
          className={cn(
            "transition-transform ease-in-out duration-500 transform-gpu",
            isFavorite && "fill-red-500 text-red-500",
            isScaling && "scale-150"
          )}
        />
      )}
      Favorite
    </Button>
  );
}
