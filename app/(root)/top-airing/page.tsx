import TopAiringGrid from "./_components/top-airing-grid";
import { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: `Top Airing - ${siteConfig.name}`,
};

export default function TopAiringPage() {
  return (
    <div>
      <TopAiringGrid />
    </div>
  );
}
