"use client";

import type { ReactNode } from "react";

/** Soft fade-in when navigating to any page */
export function PageEnter({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
