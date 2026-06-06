import type { BlogPost } from "@/lib/blog";
import { getBlogCategoryTheme } from "@/lib/blog-theme";
import { cn } from "@/lib/utils";

type Props = {
  category: BlogPost["category"];
  className?: string;
  /** Show category name badge (blog index style) */
  showBadge?: boolean;
  iconClassName?: string;
};

export function BlogCategoryVisual({
  category,
  className,
  showBadge = true,
  iconClassName = "h-14 w-14",
}: Props) {
  const theme = getBlogCategoryTheme(category);
  const Icon = theme.icon;

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br",
        theme.gradient,
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <Icon
        className={cn(
          "pointer-events-none absolute right-4 top-4 text-white/20",
          iconClassName,
        )}
        strokeWidth={1.25}
        aria-hidden
      />
      {showBadge ? (
        <span className="relative m-4 rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ink/80">
          {category}
        </span>
      ) : null}
    </div>
  );
}
