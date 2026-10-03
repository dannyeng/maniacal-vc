import { posts } from "@/lib/posts";

export default function HomePage() {
  const [lead, ...rest] = posts;

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

      <section className="lead-story page-shell" aria-labelledby="lead-heading">
        <div className="section-rule">
          <span>The lead</span>
          <span>{lead.date} · {lead.readTime}</span>
        </div>
        <a className="lead-link" href={`/journal/${lead.slug}`}>
          <div>
            <p className="story-index">01 / 20</p>
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
          <h2 id="journal-heading">Twenty companies<br />worth understanding.</h2>
        </div>
        <div className="story-list">
          {rest.map((post, index) => (
            <article className="story-row" key={post.slug}>
              <a href={`/journal/${post.slug}`}>
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

      <section className="home-manifesto page-shell">
        <p className="eyebrow">Our filter</p>
        <p className="manifesto-line">
          Capital is a signal.<br />Products are evidence.<br />Outcomes are the story.
        </p>
      </section>
    </>
  );
}
