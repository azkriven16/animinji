import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "./ui/button";
import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-3 px-2">
      <div className="max-w-5xl mx-auto space-y-10">
        <MainFooter />
        <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3">
          <div className="text-muted-foreground">
            Built by{" "}
            <a
              href="https://notioly.com/"
              target="_blank"
              className="hover:underline text-foreground"
            >
              azkriven.{" "}
            </a>
          </div>

          <div className="flex items-center gap-3 justify-between">
            <ModeToggle />

            <Button variant="ghost">
              <AiFillGithub size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MainFooter() {
  return (
    <div className="space-y-5">
      <Logo />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Built with</h1>
          {siteConfig.builtWith.map((item) => (
            <FooterStack {...item} />
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Social</h1>
          {siteConfig.lofi.map((item) => (
            <FooterStack {...item} />
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Help</h1>
          {siteConfig.lofi.map((item) => (
            <FooterStack {...item} />
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-md font-medium">Lofi</h1>
          {siteConfig.lofi.map((item) => (
            <FooterStack {...item} />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-base sm:text-md font-medium">Navigation</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="w-full" variant="outline">
            New Anime
          </Button>
          <Button className="w-full" variant="outline">
            Top Airing
          </Button>
          <Button className="w-full" variant="secondary">
            Favorites
          </Button>
        </div>
      </div>
    </div>
  );
}

interface FooterStackProps {
  href: string;
  text: string;
}

function FooterStack({ href, text }: FooterStackProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-muted-foreground hover:underline hover:text-foreground text-sm my-2"
    >
      {text}
    </a>
  );
}
