import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex items-center">
      <Input
        placeholder="Seach anime..."
        className="rounded-r-none focus-visible:ring-0 placeholder:text-foreground "
      />
      <Button size="icon" className="rounded-l-none px-2">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
