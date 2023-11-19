import NewAnime from "./_components/new-anime";
import { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: `New - ${siteConfig.name}`,
};

export default function NewPage() {
  return (
    <div>
      <NewAnime />
    </div>
  );
}
