"use client";
import React, { useEffect, useState } from "react";

/**
 * Displays now-playing OR a recent list (from { items: [...] }).
 * - Supports your TRMNL list: { items: [{ title, subtitle, image_url, meta }] }
 * - Supports Spotify "currently playing": { is_playing, item: { ... } }
 */
export default function SpotifyNowPlaying({ limit = 5, refreshMs = 300_000 }) {
  const [view, setView] = useState({ status: "idle" }); // idle | loading | ok | err
  const [model, setModel] = useState(null); // { label, isPlaying, tracks:[{title,artist,albumImageUrl}] }

  async function fetchNowPlaying() {
    try {
      setView({ status: "loading" });
      const res = await fetch("/api/now-playing", { cache: "no-store" });
      const ct = res.headers.get("content-type") || "";
      const payload = ct.includes("application/json")
        ? await res.json()
        : await res.text();

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const normalized = normalizeToListModel(payload);
      setModel(normalized);
      setView({ status: "ok" });
    } catch (e) {
      console.error("Spotify widget error:", e);
      setView({ status: "err", message: String(e?.message || e) });
      setModel(null);
    }
  }

  useEffect(() => {
    fetchNowPlaying();
    const id = setInterval(fetchNowPlaying, refreshMs); // configurable refresh interval
    return () => clearInterval(id);
  }, [refreshMs]);

  if (view.status === "err") {
    return (
      <div className="p-3 rounded-xl border border-red-300 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
        <div className="text-sm font-semibold text-red-700 dark:text-red-300">
          Spotify widget error
        </div>
        <div className="text-xs text-red-600 dark:text-red-400">
          {view.message}
        </div>
      </div>
    );
  }

  if (view.status === "loading" || !model) {
    return <div className="text-sm text-neutral-500">Loading Spotify…</div>;
  }

  const { isPlaying, label, tracks } = model;
  const list = Array.isArray(tracks) ? tracks.slice(0, limit) : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">
          {isPlaying ? (
            <span className="text-green-500 animate-pulse">• LIVE</span>
          ) : (
            <span className="text-neutral-400">
              {label || "Recently played on Spotify"}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4">
        {list.map((t, idx) => (
          <li
            key={`${t.title || "track"}-${idx}`}
            className="flex items-center gap-4"
          >
            {t.albumImageUrl ? (
              <img
                src={t.albumImageUrl}
                alt={t.title || "Album art"}
                className="w-10 h-10 rounded-md object-cover flex-none"
              />
            ) : (
              <div className="w-10 h-10 rounded-md bg-neutral-100 dark:bg-neutral-800 flex-none" />
            )}
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">
                {t.title || "Unknown title"}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                {t.artist || (isPlaying && idx === 0 ? "Unknown artist" : "—")}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Normalize various payloads into a single list model:
 * { isPlaying, label, tracks: [{title,artist,albumImageUrl}] }
 */
function normalizeToListModel(p) {
  if (!p || typeof p !== "object") {
    return { isPlaying: false, label: "Not playing", tracks: [] };
  }

  // TRMNL list: { items: [{ title, subtitle, image_url }] }
  if (Array.isArray(p.items) && p.items.length > 0) {
    const tracks = p.items.map((it) => ({
      title: it?.title ?? null,
      artist: it?.subtitle ?? null,
      albumImageUrl: it?.image_url ?? null,
    }));
    return { isPlaying: false, label: "Recently played on Spotify", tracks };
  }

  // Spotify Web API: currently playing
  if ("is_playing" in p || "item" in p) {
    const item = p.item || {};
    const artistsArr = Array.isArray(item?.artists) ? item.artists : [];
    const artist =
      artistsArr
        .map((a) => a?.name)
        .filter(Boolean)
        .join(", ") || null;
    const albumImageUrl =
      item?.album?.images?.[0]?.url || item?.album?.images?.[1]?.url || null;

    return {
      isPlaying: !!p.is_playing,
      label: p.is_playing ? "Now playing" : "Paused",
      tracks: [{ title: item?.name || null, artist, albumImageUrl }],
    };
  }

  // Single flat shape fallback
  if (
    "title" in p ||
    "artist" in p ||
    "albumImageUrl" in p ||
    "image_url" in p
  ) {
    return {
      isPlaying: !!p.isPlaying,
      label: p.isPlaying ? "Now playing" : "Recently played on Spotify",
      tracks: [
        {
          title: p.title ?? null,
          artist: p.artist ?? p.subtitle ?? null,
          albumImageUrl: p.albumImageUrl ?? p.albumUrl ?? p.image_url ?? null,
        },
      ],
    };
  }

  // Generic fallback
  return { isPlaying: false, label: "Not playing", tracks: [] };
}
