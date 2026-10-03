import { homepagePosts } from "@/lib/posts";

export default function HomePage() {
  const [lead, ...rest] = homepagePosts;
  const latest = homepagePosts.slice(0, 5);

  return (
    <>
      <section className="home-hero page-shell">
        <p className="eyebrow">Independent journal · San Francisco</p>
        <h1>Technology, intelligence,<br />&amp; people.</h1>
        <p className="hero-deck">
          Thoughts on the companies, capital, and ideas shaping our future—and what their
          momentum actually means.
        </p>
      </section>

      <section className="latest-briefing page-shell" aria-labelledby="latest-heading">
        <div className="latest-intro">
          <p className="eyebrow">Briefing</p>
          <h2 id="latest-heading">Today&rsquo;s latest</h2>
        </div>
        <ol className="latest-list">
          {latest.map((post, index) => (
            <li key={post.slug}>
              <a data-analytics-label={`Today's latest: ${post.title}`} href={`/journal/${post.slug}`}>
                <span className="latest-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="latest-meta">
                  <span>{post.category}</span>
                  <time dateTime={post.isoDate}>{post.date}</time>
                </span>
                <span className="latest-line">
                  <strong>{post.title}</strong>
                  <span> — {post.deck}</span>
                </span>
                <span className="latest-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="lead-story page-shell" aria-labelledby="lead-heading">
        <div className="section-rule">
          <span>The lead</span>
          <span>{lead.date} · {lead.readTime}</span>
        </div>
        <a className="lead-link" data-analytics-label={lead.title} href={`/journal/${lead.slug}`}>
          <div>
            <p className="story-index">01 / {homepagePosts.length}</p>
            <h2 id="lead-heading">{lead.title}</h2>
          </div>
          <div className="lead-copy">
            <p>{lead.deck}</p>
            <span className="read-link">Read the analysis <span aria-hidden="true">↗</span></span>
          </div>
        </a>
      </section>

      <section className="journal page-shell" id="journal" aria-labelledby="journal-heading">
        <div className="section-intro">
          <p className="eyebrow">The journal</p>
          <h2 id="journal-heading">Companies<br />worth understanding.</h2>
        </div>
        <div className="story-list">
          {rest.map((post, index) => (
            <article className="story-row" key={post.slug}>
              <a data-analytics-label={post.title} href={`/journal/${post.slug}`}>
                <div className="story-number">{String(index + 2).padStart(2, "0")}</div>
                <div className="story-title-block">
                  <p className="story-kicker">{post.category}</p>
                  <h3>{post.title}</h3>
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

      <div className="archive-link page-shell"><a className="text-link" href="/archive">Explore the archive <span aria-hidden="true">↗</span></a></div>

      <section className="home-manifesto page-shell">
        <p className="eyebrow">Our filter</p>
        <p className="manifesto-line">
          Capital is a signal.<br />Products are evidence.<br />Outcomes are the story.
        </p>
      </section>
    </>
  );
}
