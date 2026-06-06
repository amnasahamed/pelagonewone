import {
  Building2,
  FileCheck,
  LineChart,
  Scale,
  Shield,
  type LucideIcon,
} from "lucide-react";

export type ServiceSectionId = "start" | "tax" | "protect" | "compliance" | "grow";

export const serviceSectionTheme: Record<
  ServiceSectionId,
  { icon: LucideIcon; gradient: string; chip: string }
> = {
  start: {
    icon: Building2,
    gradient: "from-slate-800 via-slate-600 to-slate-500",
    chip: "bg-slate-500/10 text-slate-800",
  },
  tax: {
    icon: LineChart,
    gradient: "from-amber-700 via-amber-600 to-orange-500",
    chip: "bg-amber-500/10 text-amber-800",
  },
  protect: {
    icon: Shield,
    gradient: "from-violet-800 via-violet-600 to-purple-500",
    chip: "bg-violet-500/10 text-violet-800",
  },
  compliance: {
    icon: FileCheck,
    gradient: "from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]",
    chip: "bg-blue-500/10 text-blue-700",
  },
  grow: {
    icon: Scale,
    gradient: "from-emerald-800 via-emerald-600 to-teal-500",
    chip: "bg-emerald-500/10 text-emerald-800",
  },
};
