"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

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

export default function StudioPage() {
  return <NextStudio config={config} />;
}
