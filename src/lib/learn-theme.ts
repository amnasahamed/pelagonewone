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
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: Building2,
  },
  2: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: LineChart,
  },
  3: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: FileCheck,
  },
  4: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: TrendingUp,
  },
  5: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: Shield,
  },
  6: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: Users,
  },
  7: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: Megaphone,
  },
  8: {
    accent: "#365bc7",
    accentSoft: "rgba(54, 91, 199, 0.08)",
    gradient: "linear-gradient(135deg, #18283e, #2e435b)",
    icon: Wallet,
  },
};

export function getModuleTheme(num: number): ModuleTheme {
  return moduleThemes[num] ?? moduleThemes[1];
}
