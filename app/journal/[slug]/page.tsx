import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.deck,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.deck,
      publishedTime: post.isoDate,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const index = posts.findIndex((candidate) => candidate.slug === post.slug);
  const next = posts[(index + 1) % posts.length];

  return (
    <article className="article-page page-shell">
      <header className="article-header">
        <div className="article-meta">
          <span>{post.category}</span>
          <time dateTime={post.isoDate}>{post.date}</time>
          <span>{post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.deck}</p>
      </header>

      <div className="article-body-grid">
        <aside className="article-aside">
          <span className="eyebrow">The thesis</span>
          <p>{post.thesis}</p>
        </aside>
        <div className="article-copy">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="article-sources">
            <h2>Sources & further reading</h2>
            <ol>
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
            <p className="source-note">
              Reporting is based on company announcements and attributed coverage. Analysis and
              interpretation are Maniacal’s own.
            </p>
          </section>
        </div>
      </div>

      <nav className="next-story" aria-label="Continue reading">
        <span className="eyebrow">Next in the journal</span>
        <a href={`/journal/${next.slug}`}>
          <span>{next.title}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </article>
  );
}
