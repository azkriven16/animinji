import { siteConfig } from "@/constants/site";
import Link from "next/link";
import { MdAnimation } from "react-icons/md";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center text-lg font-semibold">
      <MdAnimation size={25} color="#dc2626" /> <span>{siteConfig.name}</span>
    </Link>
  );
}
