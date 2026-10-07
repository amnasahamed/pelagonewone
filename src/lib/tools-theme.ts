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
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  Finance: {
    icon: TrendingUp,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  Hiring: {
    icon: Users,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  Fundraising: {
    icon: Coins,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  Setup: {
    icon: Building2,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
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
