import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline-light";
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
  const classes = cn("site-button", `site-button--${variant}`, className);
  const content = (
    <>
      <span className="site-button__label">{children}</span>
      <span className="site-button__arrow">
        <ArrowIcon diagonal />
      </span>
    </>
  );
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
