"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const VISITOR_KEY = "maniacal_visitor";
const SESSION_KEY = "maniacal_session";

function idFor(storage: Storage, key: string) {
  const current = storage.getItem(key);
  if (current) return current;
  const next = crypto.randomUUID();
  storage.setItem(key, next);
  return next;
}

function deviceType() {
  if (window.innerWidth < 640) return "Mobile";
  if (window.innerWidth < 1024) return "Tablet";
  return "Desktop";
}

function sourceFrom(referrer: string, utmSource: string | null) {
  if (utmSource) return utmSource;
  if (!referrer) return "Direct";
  try {
    const url = new URL(referrer);
    return url.origin === window.location.origin ? "Internal" : url.hostname.replace(/^www\./, "");
  } catch {
    return "Unknown";
  }
}

function send(payload: Record<string, unknown>) {
  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/events", new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  });
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/dashboard") || navigator.doNotTrack === "1") return;

    const params = new URLSearchParams(window.location.search);
    const visitorId = idFor(localStorage, VISITOR_KEY);
    const sessionId = idFor(sessionStorage, SESSION_KEY);
    const referrer = document.referrer.slice(0, 500);
    const base = {
      path: `${pathname}${window.location.search}`.slice(0, 500),
      visitorId,
      sessionId,
      referrer,
      source: sourceFrom(referrer, params.get("utm_source")),
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      device: deviceType(),
    };

    send({ ...base, eventType: "page_view" });

    const onClick = (event: MouseEvent) => {
      const element = event.target as Element | null;
      const anchor = element?.closest("a");
      if (!anchor || anchor.dataset.noTrack === "true") return;
      send({
        ...base,
        eventType: "click",
        target: anchor.href.slice(0, 500),
        label: (anchor.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 160),
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
