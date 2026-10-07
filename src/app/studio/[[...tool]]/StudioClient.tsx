"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-[#101112] text-white/70">
        Loading Sanity Studio…
      </div>
    ),
  },
);

export function StudioClient() {
  if (!isSanityConfigured) {
    return (
      <div className="flex h-screen items-center justify-center p-8 text-center text-white/70">
        Sanity Studio needs a project ID configured at build time.
      </div>
    );
  }

  return <NextStudio config={config} history="hash" />;
}
