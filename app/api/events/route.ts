import { env } from "cloudflare:workers";

type AnalyticsEvent = {
  eventType?: unknown;
  path?: unknown;
  target?: unknown;
  label?: unknown;
  sessionId?: unknown;
  visitorId?: unknown;
  referrer?: unknown;
  source?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  device?: unknown;
};

const clean = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) || null : null;

export async function POST(request: Request) {
  if (request.headers.get("dnt") === "1") return new Response(null, { status: 204 });

  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") {
    return Response.json({ error: "same-origin only" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 8_192) {
    return Response.json({ error: "payload too large" }, { status: 413 });
  }

  let body: AnalyticsEvent;
  try {
    body = (await request.json()) as AnalyticsEvent;
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "invalid event" }, { status: 400 });
  }

  const eventType = body.eventType;
  const path = clean(body.path)?.split("?")[0];
  const sessionId = clean(body.sessionId, 80);
  const visitorId = clean(body.visitorId, 80);
  if (
    (eventType !== "page_view" && eventType !== "click") ||
    !path?.startsWith("/") ||
    path.startsWith("/dashboard") ||
    path.startsWith("/api/") ||
    !sessionId ||
    !visitorId
  ) {
    return Response.json({ error: "invalid event" }, { status: 400 });
  }

  const runtime = env as unknown as { DB: D1Database };
  await runtime.DB.prepare(
    `INSERT INTO analytics_events
      (event_type, path, target, label, session_id, visitor_id, referrer, source,
       utm_source, utm_medium, utm_campaign, device, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      eventType,
      path,
      clean(body.target),
      clean(body.label, 160),
      sessionId,
      visitorId,
      clean(body.referrer),
      clean(body.source, 160),
      clean(body.utmSource, 160),
      clean(body.utmMedium, 160),
      clean(body.utmCampaign, 160),
      clean(body.device, 40),
      new Date().toISOString(),
    )
    .run();

  return new Response(null, { status: 204 });
}
