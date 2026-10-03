import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Archive",
  description: "Every Maniacal essay on technology, intelligence, startups, capital, and people.",
  alternates: { canonical: "/archive" },
};

export default function ArchivePage() {
  return (
    <section className="archive-page page-shell">
      <header className="archive-header">
        <p className="eyebrow">The archive · {posts.length} essays</p>
        <h1>Ideas worth<br />returning to.</h1>
        <p>Every piece, newest first.</p>
      </header>
      <div className="story-list">
        {posts.map((post, index) => (
          <article className="story-row" key={post.slug}>
            <a data-analytics-label={post.title} href={`/journal/${post.slug}`}>
              <div className="story-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="story-title-block">
                <p className="story-kicker">{post.category}</p>
                <h2>{post.title}</h2>
                <p className="story-deck">{post.deck}</p>
              </div>
              <div className="story-meta">
                <time dateTime={post.isoDate}>{post.date}</time>
                <span>{post.readTime}</span>
              </div>
              <span className="story-arrow" aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
