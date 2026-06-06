import { NextResponse } from "next/server";

/** Lightweight check for Vercel uptime / deploy verification. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "pelagonewwebsite",
    timestamp: new Date().toISOString(),
  });
}
