// /app/api/chess/route.js  (App Router)
import { NextResponse } from "next/server";

const USERNAME = "kunal332";
const BASE = "https://api.chess.com/pub";
const headers = {
  "User-Agent": "kunalbhats-site/1.0 (contact: hello@kunalbhat.com)",
};

export async function GET() {
  try {
    const currentRes = await fetch(`${BASE}/player/${USERNAME}/games`, {
      headers,
      cache: "no-store",
    });
    if (!currentRes.ok)
      return NextResponse.json({ games: [] }, { status: 200 });
    const current = await currentRes.json();

    // Keep only the fields we actually use
    const games = (current.games ?? []).map((g) => ({
      url: g.url,
      fen: g.fen,
      pgn: g.pgn,
      move_by: g.move_by ?? null,
      last_activity: g.last_activity ?? null,
      white: g.white,
      black: g.black,
      time_control: g.time_control,
    }));

    return new NextResponse(JSON.stringify({ games }), {
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=900, stale-while-revalidate=60",
      },
      status: 200,
    });
  } catch {
    return NextResponse.json({ games: [] }, { status: 200 });
  }
}
