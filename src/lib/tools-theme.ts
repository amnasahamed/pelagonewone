import type { ToolDefinition } from "@/lib/tools";
import {
  Building2,
  Calculator,
  Coins,
  Flame,
  Landmark,
  Layers,
  Percent,
  PiggyBank,
  Receipt,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const themes: Record<
  ToolDefinition["category"],
  { icon: LucideIcon; gradient: string; chip: string }
> = {
  Tax: {
    icon: Percent,
    gradient: "from-amber-700 via-amber-600 to-orange-500",
    chip: "bg-amber-500/10 text-amber-800",
  },
  Finance: {
    icon: TrendingUp,
    gradient: "from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]",
    chip: "bg-blue-500/10 text-blue-700",
  },
  Hiring: {
    icon: Users,
    gradient: "from-emerald-800 via-emerald-600 to-teal-500",
    chip: "bg-emerald-500/10 text-emerald-800",
  },
  Fundraising: {
    icon: Coins,
    gradient: "from-violet-800 via-violet-600 to-purple-500",
    chip: "bg-violet-500/10 text-violet-800",
  },
  Setup: {
    icon: Building2,
    gradient: "from-slate-800 via-slate-600 to-slate-500",
    chip: "bg-slate-500/10 text-slate-700",
  },
};

const toolIcons: Partial<Record<ToolDefinition["id"], LucideIcon>> = {
  gst: Percent,
  "gst-reverse": Receipt,
  "burn-rate": Flame,
  runway: PiggyBank,
  incorporation: Building2,
  tds: Landmark,
  "advance-tax": Calculator,
  "employee-cost": Users,
  "pf-contribution": Users,
  "break-even": Target,
  "profit-margin": Scale,
  roi: TrendingUp,
  "mrr-arr": Layers,
  "equity-dilution": Coins,
  "safe-cap": Sparkles,
  "msme-udyam": Building2,
};

export function getToolTheme(tool: ToolDefinition) {
  const base = themes[tool.category];
  return {
    ...base,
    icon: toolIcons[tool.id] ?? base.icon,
  };
}
