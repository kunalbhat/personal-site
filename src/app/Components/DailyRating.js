"use client";
import { useEffect, useState } from "react";

export default function DailyRating() {
  const [daily, setDaily] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/chess/stats")
      .then((r) => r.json())
      .then((d) => {
        setDaily(d.daily);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  if (!loaded) return <span>Loading…</span>;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid #eee",
        background: "#f8f8f8",
      }}
    >
      <strong>Daily</strong>
      <span>{daily ? daily : "—"}</span>
    </span>
  );
}
