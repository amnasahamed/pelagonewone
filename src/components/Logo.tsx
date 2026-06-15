import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** White wordmark for dark backgrounds (footer, dark hero) */
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "dark" }: Props) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Pelago Consultants home"
    >
      <Image
        src={isLight ? "/brand/logo-white.png" : "/brand/logo.png"}
        alt="Pelago Consultants"
        width={180}
        height={56}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
