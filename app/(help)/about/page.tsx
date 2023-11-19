import { siteConfig } from "@/constants/site";
import { Metadata } from "next";
import AboutComponent from "./_components/about-component";

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
};
export default function AboutPage() {
  return <AboutComponent />;
}
