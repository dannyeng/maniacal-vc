CREATE TABLE `analytics_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event_type` text NOT NULL,
	`path` text NOT NULL,
	`target` text,
	`label` text,
	`session_id` text NOT NULL,
	`visitor_id` text NOT NULL,
	`referrer` text,
	`source` text,
	`utm_source` text,
	`utm_medium` text,
	`utm_campaign` text,
	`device` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `analytics_events_created_at_idx` ON `analytics_events` (`created_at`);--> statement-breakpoint
CREATE INDEX `analytics_events_type_idx` ON `analytics_events` (`event_type`);--> statement-breakpoint
CREATE INDEX `analytics_events_path_idx` ON `analytics_events` (`path`);