import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Pagination({ url }: { url: string }) {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div className="flex justify-end my-5">
      <Button variant="ghost" disabled={page <= 1}>
        <Link
          href={`/${url}?page=${page - 1}`}
          className="flex items-center gap-2"
        >
          <ChevronLeft />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      </Button>
      <Button variant="ghost">
        <Link
          href={`/${url}?page=${page + 1}`}
          className="flex items-center gap-2"
        >
          <span className="hidden sm:inline">Next</span> <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
