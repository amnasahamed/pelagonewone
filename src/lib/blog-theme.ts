import type { BlogPost } from "@/lib/blog";
import {
  Award,
  Building2,
  FileText,
  Rocket,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type BlogCategoryKey = BlogPost["category"];

const themes: Record<
  BlogCategoryKey,
  { icon: LucideIcon; gradient: string; accent: string; chip: string }
> = {
  Registration: {
    icon: Building2,
    gradient: "from-ink via-ink to-ink",
    accent: "text-accent",
    chip: "bg-ink/5 text-ink",
  },
  "Tax & Compliance": {
    icon: FileText,
    gradient: "from-ink via-ink to-ink",
    accent: "text-accent",
    chip: "bg-ink/5 text-ink",
  },
  Startup: {
    icon: Rocket,
    gradient: "from-ink via-ink to-ink",
    accent: "text-accent",
    chip: "bg-ink/5 text-ink",
  },
  Certifications: {
    icon: Award,
    gradient: "from-ink via-ink to-ink",
    accent: "text-accent",
    chip: "bg-ink/5 text-ink",
  },
  "Legal & IP": {
    icon: Scale,
    gradient: "from-ink via-ink to-ink",
    accent: "text-accent",
    chip: "bg-ink/5 text-ink",
  },
};

export function getBlogCategoryTheme(category: BlogCategoryKey) {
  return themes[category];
}
