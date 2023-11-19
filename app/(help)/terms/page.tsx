import { siteConfig } from "@/constants/site";
import { Metadata } from "next";
import TermsComponent from "./_components/terms-component";

export const metadata: Metadata = {
  title: `Terms & Conditions - ${siteConfig.name}`,
};
export default function TermsPage() {
  return <TermsComponent />;
}
