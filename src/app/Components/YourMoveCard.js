// /app/components/YourMoveCard.jsx
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

function activeColor(fen) {
  if (!fen) return null;
  const parts = fen.split(" ");
  return parts[1] || null; // 'w' or 'b'
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
  if (!games.length)
    return <div className="text-sm">No current Daily games.</div>;

  return (
    <div className="grid gap-3">
      {games.map((g) => {
        const youAreWhite =
          (g.white?.username || "").toLowerCase() === "kunal332";
        const opp = youAreWhite ? g.black : g.white;
        const due = g.move_by
          ? new Date(g.move_by * 1000).toLocaleString()
          : null;

        const turn = activeColor(g.fen); // 'w' or 'b'
        const isYourTurn = turn
          ? (turn === "w" && youAreWhite) || (turn === "b" && !youAreWhite)
          : null;

        return (
          <a
            key={g.url}
            href={g.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3"
          >
            <TinyBoard fen={g.fen} />

            <div className="grid gap-1">
              <div className="font-semibold">
                {opp?.username}
                {opp?.rating ? ` (${opp.rating})` : ""}
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-[2px]
                              border-neutral-200 dark:border-neutral-700`}
                >
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      isYourTurn === null
                        ? "bg-neutral-400"
                        : isYourTurn
                        ? "bg-emerald-500"
                        : "bg-neutral-400"
                    }`}
                  />
                  <span>
                    {isYourTurn === null
                      ? "Turn: —"
                      : isYourTurn
                      ? "Your turn"
                      : "Their turn"}
                  </span>
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
