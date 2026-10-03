import type { Metadata } from "next";
import { env } from "cloudflare:workers";
import { chatGPTSignOutPath, requireChatGPTUser } from "@/app/chatgpt-auth";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Dashboard", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

type CountRow = {
  pageViews: number;
  visitors: number;
  sessions: number;
  clicks: number;
};
type DailyRow = { day: string; views: number; visitors: number };
type ContentRow = { path: string; views: number; visitors: number };
type ClickRow = { target: string; label: string | null; clicks: number };
type SourceRow = { source: string; visits: number };
type DeviceRow = { device: string; visits: number };

const allowedRanges = new Set([7, 30, 90]);
const number = new Intl.NumberFormat("en-US");

function pageTitle(path: string) {
  if (path === "/") return "Homepage";
  const slug = path.replace(/^\/journal\//, "").split("?")[0];
  return posts.find((post) => post.slug === slug)?.title ?? path;
}

function MiniLineChart({ data }: { data: DailyRow[] }) {
  if (!data.length) return <div className="empty-chart">Visits will appear here after publication.</div>;
  const max = Math.max(...data.map((row) => row.views), 1);
  const width = 100;
  const height = 34;
  const points = data
    .map((row, index) => {
      const x = data.length === 1 ? 0 : (index / (data.length - 1)) * width;
      const y = height - 2 - (row.views / max) * (height - 5);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <div className="chart-wrap">
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label="Daily page views">
        <line x1="0" x2="100" y1="32" y2="32" className="chart-axis" />
        <polyline points={points} className="chart-line" />
      </svg>
      <div className="chart-labels">
        <span>{data[0]?.day}</span>
        <span>{data.at(-1)?.day}</span>
      </div>
    </div>
  );
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const query = await searchParams;
  const requestedRange = Number(query.range ?? 30);
  const range = allowedRanges.has(requestedRange) ? requestedRange : 30;
  const user = await requireChatGPTUser(`/dashboard?range=${range}`);
  const runtime = env as unknown as { DB: D1Database; ADMIN_USER_ID?: string };
  const configuredOwner = runtime.ADMIN_USER_ID;
  const localDevelopment = process.env.NODE_ENV !== "production";

  if ((!configuredOwner && !localDevelopment) || (configuredOwner && user.userId !== configuredOwner)) {
    return (
      <section className="dashboard-denied page-shell">
        <p className="eyebrow">Private dashboard</p>
        <h1>This view belongs to the publisher.</h1>
        <p>You are signed in, but this account is not authorized to view Maniacal analytics.</p>
        <a className="text-link" href={chatGPTSignOutPath("/dashboard")}>Sign out</a>
      </section>
    );
  }

  const since = `-${range} days`;
  const [counts, daily, content, clicks, sources, devices] = await Promise.all([
    runtime.DB.prepare(
      `SELECT
        SUM(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS pageViews,
        COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visitor_id END) AS visitors,
        COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN session_id END) AS sessions,
        SUM(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) AS clicks
       FROM analytics_events WHERE created_at >= datetime('now', ?)`,
    ).bind(since).first<CountRow>(),
    runtime.DB.prepare(
      `SELECT date(created_at) AS day, COUNT(*) AS views, COUNT(DISTINCT visitor_id) AS visitors
       FROM analytics_events
       WHERE event_type = 'page_view' AND created_at >= datetime('now', ?)
       GROUP BY date(created_at) ORDER BY day ASC`,
    ).bind(since).all<DailyRow>(),
    runtime.DB.prepare(
      `SELECT path, COUNT(*) AS views, COUNT(DISTINCT visitor_id) AS visitors
       FROM analytics_events
       WHERE event_type = 'page_view' AND created_at >= datetime('now', ?)
       GROUP BY path ORDER BY views DESC LIMIT 8`,
    ).bind(since).all<ContentRow>(),
    runtime.DB.prepare(
      `SELECT COALESCE(target, '') AS target, label, COUNT(*) AS clicks
       FROM analytics_events
       WHERE event_type = 'click' AND created_at >= datetime('now', ?)
       GROUP BY target, label ORDER BY clicks DESC LIMIT 8`,
    ).bind(since).all<ClickRow>(),
    runtime.DB.prepare(
      `SELECT COALESCE(source, 'Direct') AS source, COUNT(*) AS visits
       FROM analytics_events
       WHERE event_type = 'page_view' AND created_at >= datetime('now', ?)
       GROUP BY source ORDER BY visits DESC LIMIT 6`,
    ).bind(since).all<SourceRow>(),
    runtime.DB.prepare(
      `SELECT COALESCE(device, 'Unknown') AS device, COUNT(*) AS visits
       FROM analytics_events
       WHERE event_type = 'page_view' AND created_at >= datetime('now', ?)
       GROUP BY device ORDER BY visits DESC`,
    ).bind(since).all<DeviceRow>(),
  ]);

  const metrics = counts ?? { pageViews: 0, visitors: 0, sessions: 0, clicks: 0 };
  const clickRate = metrics.pageViews ? (metrics.clicks / metrics.pageViews) * 100 : 0;

  return (
    <section className="dashboard page-shell">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Publisher dashboard</p>
          <h1>Signals, not noise.</h1>
          <p>First-party, cookieless analytics for maniacal.vc.</p>
        </div>
        <div className="dashboard-account">
          <span>{user.displayName}</span>
          <a href={chatGPTSignOutPath("/")}>Sign out</a>
        </div>
      </header>

      <nav className="range-switcher" aria-label="Date range">
        {[7, 30, 90].map((days) => (
          <a key={days} href={`/dashboard?range=${days}`} className={range === days ? "active" : ""}>
            {days} days
          </a>
        ))}
      </nav>

      <div className="metric-grid">
        <div className="metric-card"><span>Page views</span><strong>{number.format(metrics.pageViews ?? 0)}</strong></div>
        <div className="metric-card"><span>Unique visitors</span><strong>{number.format(metrics.visitors ?? 0)}</strong></div>
        <div className="metric-card"><span>Sessions</span><strong>{number.format(metrics.sessions ?? 0)}</strong></div>
        <div className="metric-card"><span>Tracked clicks</span><strong>{number.format(metrics.clicks ?? 0)}</strong></div>
        <div className="metric-card"><span>Clicks / view</span><strong>{clickRate.toFixed(1)}%</strong></div>
      </div>

      <section className="dashboard-panel dashboard-chart-panel">
        <div className="panel-heading"><h2>Daily attention</h2><span>Page views · last {range} days</span></div>
        <MiniLineChart data={daily.results} />
      </section>

      <div className="dashboard-split">
        <section className="dashboard-panel">
          <div className="panel-heading"><h2>Top content</h2><span>Views / visitors</span></div>
          <div className="data-list">
            {content.results.length ? content.results.map((row) => (
              <div className="data-row" key={row.path}>
                <div><strong>{pageTitle(row.path)}</strong><span>{row.path}</span></div>
                <div className="data-values"><strong>{number.format(row.views)}</strong><span>{number.format(row.visitors)}</span></div>
              </div>
            )) : <p className="empty-state">No content activity yet.</p>}
          </div>
        </section>

        <section className="dashboard-panel">
          <div className="panel-heading"><h2>Top clicks</h2><span>Total clicks</span></div>
          <div className="data-list">
            {clicks.results.length ? clicks.results.map((row, index) => (
              <div className="data-row" key={`${row.target}-${row.label}-${index}`}>
                <div><strong>{row.label || "Unlabelled link"}</strong><span>{row.target}</span></div>
                <div className="data-values"><strong>{number.format(row.clicks)}</strong></div>
              </div>
            )) : <p className="empty-state">No click activity yet.</p>}
          </div>
        </section>
      </div>

      <div className="dashboard-split compact-panels">
        <section className="dashboard-panel">
          <div className="panel-heading"><h2>Traffic sources</h2><span>Visits</span></div>
          <div className="data-list">
            {sources.results.length ? sources.results.map((row) => (
              <div className="data-row simple" key={row.source}><strong>{row.source}</strong><strong>{number.format(row.visits)}</strong></div>
            )) : <p className="empty-state">No source data yet.</p>}
          </div>
        </section>
        <section className="dashboard-panel">
          <div className="panel-heading"><h2>Devices</h2><span>Visits</span></div>
          <div className="data-list">
            {devices.results.length ? devices.results.map((row) => (
              <div className="data-row simple" key={row.device}><strong>{row.device}</strong><strong>{number.format(row.visits)}</strong></div>
            )) : <p className="empty-state">No device data yet.</p>}
          </div>
        </section>
      </div>

      <p className="dashboard-note">
        Counts exclude the dashboard, honor Do Not Track, and use anonymous first-party visitor and session IDs. No advertising cookies or IP addresses are stored.
      </p>
    </section>
  );
}
