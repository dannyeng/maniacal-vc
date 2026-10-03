import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const analyticsEvents = sqliteTable(
  "analytics_events",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    eventType: text("event_type", { enum: ["page_view", "click"] }).notNull(),
    path: text("path").notNull(),
    target: text("target"),
    label: text("label"),
    sessionId: text("session_id").notNull(),
    visitorId: text("visitor_id").notNull(),
    referrer: text("referrer"),
    source: text("source"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    device: text("device"),
    createdAt: text("created_at").notNull(),
  },
  (table) => [
    index("analytics_events_created_at_idx").on(table.createdAt),
    index("analytics_events_type_idx").on(table.eventType),
    index("analytics_events_path_idx").on(table.path),
  ],
);
