import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

type Props = {
  category: BlogPost["category"];
  className?: string;
  showBadge?: boolean;
  iconClassName?: string;
};

const categoryArtwork: Record<BlogPost["category"], string> = {
  Registration: "/images/editorial/foundations-hero.jpg",
  "Tax & Compliance": "/images/editorial/founders-journal.jpg",
  Startup: "/images/editorial/foundations-service.jpg",
  Certifications: "/images/editorial/foundations-service.jpg",
  "Legal & IP": "/images/editorial/foundations-hero.jpg",
};

export function BlogCategoryVisual({
  category,
  className,
  showBadge = true,
}: Props) {
  return (
    <div
      className={cn(
        "blog-editorial-visual relative flex aspect-[16/10] items-end overflow-hidden",
        className,
      )}
    >
      <Image
        src={categoryArtwork[category]}
        alt=""
        fill
        sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 400px"
        className="object-cover"
      />
      {showBadge && (
        <span className="relative m-4 rounded-md bg-paper px-3 py-1.5 text-[9px] font-medium tracking-wide text-ink">
          {category}
        </span>
      )}
    </div>
  );
}
