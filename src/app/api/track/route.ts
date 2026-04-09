export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { path, referrer } = body;

    // Privacy-safe analytics: no cookies, no PII storage
    // Hash the IP for anonymization
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const encoder = new TextEncoder();
    const data = encoder.encode(ip + new Date().toISOString().slice(0, 10));
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const ipHash = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);

    console.log("track:", {
      ipHash,
      path: path || "/",
      referrer: referrer || null,
      ua: request.headers.get("user-agent")?.slice(0, 100),
      ts: Date.now(),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: true });
  }
}
