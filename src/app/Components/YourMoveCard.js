"use client";
import { useEffect, useState } from "react";

const PIECES = {
  p: "♟",
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  P: "♙",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
};

function fenToRows(fen) {
  if (!fen) return [];
  const board = fen.split(" ")[0];
  return board
    .split("/")
    .map((rank) =>
      [...rank].flatMap((ch) =>
        /\d/.test(ch) ? Array(parseInt(ch, 10)).fill("") : ch
      )
    );
}

function TinyBoard({ fen }) {
  const rows = fenToRows(fen);
  if (!rows.length) return null;

  return (
    <div className="grid [grid-template-rows:repeat(8,14px)] text-[12px] leading-[14px]">
      {rows.map((rank, i) => (
        <div key={i} className="grid [grid-template-columns:repeat(8,14px)]">
          {rank.map((sq, j) => {
            const isDark = (i + j) % 2 === 1;
            return (
              <div
                key={j}
                className={`w-[14px] h-[14px] text-center select-none ${
                  isDark
                    ? "bg-neutral-200 dark:bg-neutral-700"
                    : "bg-white dark:bg-neutral-800"
                }`}
              >
                {PIECES[sq] || ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function YourMoveCard() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    fetch("/api/chess")
      .then((r) => r.json())
      .then((d) => setGames(d.games || []))
      .catch(() => setGames([]));
  }, []);

  if (games === null)
    return <div className="text-sm text-neutral-500">Loading…</div>;
  if (!games.length) return <div className="text-sm">All caught up ✅</div>;

  return (
    <div className="grid gap-3">
      <h3>
        Currently playing {games.length} game{games.length > 1 ? "s" : ""} on
        chess.com
      </h3>

      {games.map((g) => {
        const youAreWhite =
          (g.white?.username || "").toLowerCase() === "kunal332";
        const opp = youAreWhite ? g.black : g.white;
        const due = g.move_by
          ? new Date(g.move_by * 1000).toLocaleString()
          : null;

        return (
          <a
            key={g.url}
            href={g.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <TinyBoard fen={g.fen} />
            <div className="grid gap-1">
              <div className="font-semibold">
                {opp?.username}
                {opp?.rating ? ` (${opp.rating})` : ""}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
