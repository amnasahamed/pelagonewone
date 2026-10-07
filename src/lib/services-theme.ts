import {
  Building2,
  FileCheck,
  LineChart,
  Scale,
  Shield,
  type LucideIcon,
} from "lucide-react";

export type ServiceSectionId =
  | "start"
  | "tax"
  | "protect"
  | "compliance"
  | "grow";

export const serviceSectionTheme: Record<
  ServiceSectionId,
  { icon: LucideIcon; gradient: string; chip: string }
> = {
  start: {
    icon: Building2,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  tax: {
    icon: LineChart,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  protect: {
    icon: Shield,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  compliance: {
    icon: FileCheck,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
  grow: {
    icon: Scale,
    gradient: "from-ink via-ink to-ink",
    chip: "bg-ink/5 text-ink",
  },
};
