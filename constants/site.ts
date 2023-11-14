import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma, SiReactquery, SiSupabase, SiTrpc } from "react-icons/si";
import { BsPlayFill } from "react-icons/bs";
export const siteConfig = {
  name: "Animinji",
  description: "Open source minimal anime website.",
  url: "shisso.vercel.app",
  links: {
    twitter: "https://twitter.com/EugerBonete",
    github: "https://eug.vercel.app/",
    project: "https://github.com/EugerBonete/shisso",
  },
  navItems: [
    {
      text: "New",
      href: "/new",
    },
    {
      text: "Hot",
      href: "/hot",
    },
    {
      text: "Favorites",
      href: "/favorites",
    },
  ],
  builtWith: [
    {
      icon: TbBrandNextjs,
      text: "Next JS",
    },
    {
      icon: SiTrpc,
      text: "TRPC",
    },
    {
      icon: SiSupabase,
      text: "Supabase",
    },
    {
      icon: SiPrisma,
      text: "Prisma",
    },
    {
      icon: SiReactquery,
      text: "React Query",
    },
    {
      icon: BsPlayFill,
      text: "Artplayer",
    },
  ],
  footerItems: {
    links: [],
  },
};

export const NavItemsData = [
  {
    text: "Trending",
    href: "/dashboard",
  },
  {
    text: "New",
    href: "/new",
  },
  {
    text: "Favorites",
    href: "/favorites",
  },
  {
    text: "Watchlist",
    href: "/watchlist",
  },
];
export const footerItems1 = [
  "FAQ",
  "Investor Relations",
  "Ways to Watch",
  "Corporate Information",
  "Only on Netflix",
];

export const footerItems2 = [
  "Help Center",
  "Jobs",
  "Terms of Use",
  "Contact Us",
];

export const footerItems3 = [
  "Account",
  "Redeem Gift Cards",
  "Privacy",
  "Speed Test",
];

export const footerItems4 = [
  "Media Center",
  "Buy Gift Cards",
  "Cookie Preferences",
  "Legal Notices",
];
