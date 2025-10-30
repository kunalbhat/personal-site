import { NextResponse } from "next/server";

const USERNAME = "kunal332";
const BASE = "https://api.chess.com/pub";

const headers = {
  "User-Agent": "kunalbhats-site/1.0 (contact: hello@kunalbhat.com)",
};

export async function GET() {
  try {
    // Which Daily games are YOUR MOVE?
    const toMoveRes = await fetch(`${BASE}/player/${USERNAME}/games/to-move`, {
      headers,
      cache: "no-store",
    });
    if (!toMoveRes.ok) return NextResponse.json({ games: [] }, { status: 200 });
    const toMove = await toMoveRes.json();
    const urlsToMove = new Set((toMove.games ?? []).map((g) => g.url));

    // Current Daily games (includes FEN/PGN)
    const currentRes = await fetch(`${BASE}/player/${USERNAME}/games`, {
      headers,
      cache: "no-store",
    });
    if (!currentRes.ok)
      return NextResponse.json({ games: [] }, { status: 200 });
    const current = await currentRes.json();

    const games = (current.games ?? [])
      .filter((g) => urlsToMove.has(g.url))
      .map((g) => ({
        url: g.url,
        fen: g.fen,
        pgn: g.pgn,
        move_by:
          g.move_by ??
          (toMove.games ?? []).find((x) => x.url === g.url)?.move_by ??
          null,
        last_activity: g.last_activity ?? null,
        white: g.white,
        black: g.black,
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
