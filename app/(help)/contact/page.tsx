import { siteConfig } from "@/constants/site";
import { Metadata } from "next";
import ContactComponent from "./_components/contact-component";

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name}`,
};
export default function ContactPage() {
  return <ContactComponent />;
}
