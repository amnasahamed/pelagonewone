import type { Metadata } from "next";
import { LearnClient } from "./LearnClient";
import { getLearnModules, getLearnStats } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Founder Launchpad — 25 lessons across 8 modules on incorporation, taxes, compliance, and scaling in India.",
};

export default async function LearnPage() {
  const [modules, learnStats] = await Promise.all([
    getLearnModules(),
    getLearnStats(),
  ]);

  return <LearnClient modules={modules} learnStats={learnStats} />;
}
