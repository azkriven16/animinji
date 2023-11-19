import { siteConfig } from "@/constants/site";
import { Metadata } from "next";
import PrivacyComponent from "./_components/privacy-component";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
};
export default function PrivacyPage() {
  return <PrivacyComponent />;
}
