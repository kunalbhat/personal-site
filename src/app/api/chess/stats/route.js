import { NextResponse } from "next/server";

const USERNAME = "kunal332";
const BASE = "https://api.chess.com/pub";
const headers = {
  "User-Agent": "kunalbhats-site/1.0 (contact: hello@kunalbhat.com)",
};

export async function GET() {
  try {
    const res = await fetch(`${BASE}/player/${USERNAME}/stats`, {
      headers,
      cache: "no-store",
    });
    if (!res.ok) return NextResponse.json({ daily: null }, { status: 200 });
    const stats = await res.json();

    // Daily rating object can be absent if you’ve never played rated Daily
    const daily = stats?.chess_daily?.last?.rating ?? null;

    return new NextResponse(JSON.stringify({ daily }), {
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=900, stale-while-revalidate=60",
      },
      status: 200,
    });
  } catch {
    return NextResponse.json({ daily: null }, { status: 200 });
  }
}
