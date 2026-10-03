import { posts } from "@/lib/posts";

const escapeXml = (text: string) => text.replace(/[<>&"']/g, (character) => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
})[character]!);

export function GET() {
  const items = posts.map((post) => {
    const url = `https://maniacal.vc/journal/${post.slug}`;
    return `<item><title>${escapeXml(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escapeXml(post.deck)}</description><category>${escapeXml(post.category)}</category><pubDate>${new Date(post.isoDate).toUTCString()}</pubDate></item>`;
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>maniacal.</title><link>https://maniacal.vc</link><description>Technology, intelligence, and people. Independent essays from Maniacal.</description><language>en-us</language><atom:link href="https://maniacal.vc/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=300" } });
}
