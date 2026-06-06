import type { LucideIcon } from "lucide-react";
import {
  Building2,
  FileCheck,
  LineChart,
  Megaphone,
  Shield,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export type ModuleTheme = {
  accent: string;
  accentSoft: string;
  gradient: string;
  icon: LucideIcon;
};

export const moduleThemes: Record<number, ModuleTheme> = {
  1: {
    accent: "#3a67d8",
    accentSoft: "rgba(58, 103, 216, 0.12)",
    gradient: "linear-gradient(135deg, #3a67d8 0%, #6b8fe8 100%)",
    icon: Building2,
  },
  2: {
    accent: "#16a34a",
    accentSoft: "rgba(22, 163, 74, 0.12)",
    gradient: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
    icon: LineChart,
  },
  3: {
    accent: "#d97706",
    accentSoft: "rgba(217, 119, 6, 0.12)",
    gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
    icon: FileCheck,
  },
  4: {
    accent: "#475569",
    accentSoft: "rgba(71, 85, 105, 0.12)",
    gradient: "linear-gradient(135deg, #334155 0%, #64748b 100%)",
    icon: TrendingUp,
  },
  5: {
    accent: "#059669",
    accentSoft: "rgba(5, 150, 105, 0.12)",
    gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)",
    icon: Shield,
  },
  6: {
    accent: "#0891b2",
    accentSoft: "rgba(8, 145, 178, 0.12)",
    gradient: "linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)",
    icon: Users,
  },
  7: {
    accent: "#dc2626",
    accentSoft: "rgba(220, 38, 38, 0.1)",
    gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 100%)",
    icon: Megaphone,
  },
  8: {
    accent: "#7c3aed",
    accentSoft: "rgba(124, 58, 237, 0.12)",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
    icon: Wallet,
  },
};

export function getModuleTheme(num: number): ModuleTheme {
  return moduleThemes[num] ?? moduleThemes[1];
}
