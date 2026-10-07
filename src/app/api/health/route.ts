import { NextResponse } from "next/server";

export const dynamic = "force-static";

/** Static build marker for deployment verification; not a live server check. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "pelagonewwebsite",
    generatedAt: new Date().toISOString(),
  });
}
