export async function GET() {
  try {
    const r = await fetch(
      "https://trmnl-spotify-server.vercel.app/api/spotify",
      {
        cache: "no-store",
        headers: { accept: "application/json" },
      }
    );
    const ct = r.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      const text = await r.text();
      return new Response(text, {
        status: r.status,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
    const json = await r.json();
    return Response.json(json, { status: r.status });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
