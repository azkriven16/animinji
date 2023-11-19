import { Metadata } from "next";
import FavoritesGrid from "./_components/favorite-grid";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: `Favorites - ${siteConfig.name}`,
};

export default function FavoritesPage() {
  return (
    <div>
      <FavoritesGrid />
    </div>
  );
}
