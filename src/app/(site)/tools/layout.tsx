import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools",
  description: "Free business calculators for Indian founders — GST, runway, TDS, and more.",
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
