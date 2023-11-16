import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Pagination({ url }: { url: string }) {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div className="flex justify-end gap-2 my-5">
      <Button size="sm" variant="outline" disabled={page <= 1}>
        <Link
          href={`/${url}?page=${page - 1}`}
          className="flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Previous
        </Link>
      </Button>
      <Button size="sm" variant="outline">
        <Link
          href={`/${url}?page=${page + 1}`}
          className="flex items-center gap-2"
        >
          Next <ChevronRight size={20} />
        </Link>
      </Button>
    </div>
  );
}
