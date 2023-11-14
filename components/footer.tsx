import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <footer className="border-t bg-background py-3 px-2">
      <div className="flex items-center max-w-5xl mx-auto justify-between w-full flex-col md:flex-row gap-3">
        <div className="text-muted-foreground">
          Built by{" "}
          <a
            href="https://notioly.com/"
            target="_blank"
            className="hover:underline text-foreground"
          >
            azkriven.{" "}
          </a>
          Illustrations from{" "}
          <a
            href="https://notioly.com/"
            target="_blank"
            className="hover:underline text-foreground"
          >
            Notioly.
          </a>
        </div>

        <div className="flex items-center gap-3 justify-between">
          <ModeToggle />

          <Button variant="ghost">
            <AiFillGithub size={20} />
          </Button>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
