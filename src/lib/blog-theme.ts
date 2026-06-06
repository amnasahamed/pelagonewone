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
    gradient: "from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]",
    accent: "text-blue-600",
    chip: "bg-blue-500/10 text-blue-700",
  },
  "Tax & Compliance": {
    icon: FileText,
    gradient: "from-[#78350f] via-[#b45309] to-[#d97706]",
    accent: "text-amber-700",
    chip: "bg-amber-500/10 text-amber-800",
  },
  Startup: {
    icon: Rocket,
    gradient: "from-[#4c1d95] via-[#6d28d9] to-[#8b5cf6]",
    accent: "text-violet-700",
    chip: "bg-violet-500/10 text-violet-800",
  },
  Certifications: {
    icon: Award,
    gradient: "from-[#14532d] via-[#15803d] to-[#22c55e]",
    accent: "text-emerald-700",
    chip: "bg-emerald-500/10 text-emerald-800",
  },
  "Legal & IP": {
    icon: Scale,
    gradient: "from-[#831843] via-[#be185d] to-[#ec4899]",
    accent: "text-rose-700",
    chip: "bg-rose-500/10 text-rose-800",
  },
};

export function getBlogCategoryTheme(category: BlogCategoryKey) {
  return themes[category];
}
