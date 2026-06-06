import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline-light";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_20px_-6px_rgba(58,103,216,0.45)]",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-ink/20 hover:shadow-md",
  ghost: "text-ink/70 hover:text-ink hover:bg-ink/5",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb855] shadow-[0_8px_20px_-6px_rgba(37,211,102,0.5)]",
  "outline-light":
    "border border-white/25 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
