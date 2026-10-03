import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: "https://maniacal.vc", lastModified: new Date(posts[0]?.isoDate ?? "2026-10-03"), changeFrequency: "daily", priority: 1 },
    { url: "https://maniacal.vc/about", lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://maniacal.vc/letters", lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.4 },
    { url: "https://maniacal.vc/archive", lastModified: new Date(posts[0]?.isoDate ?? "2026-10-03"), changeFrequency: "daily", priority: 0.6 },
  ];

  return pages.concat(
    posts.map((post) => ({
      url: `https://maniacal.vc/journal/${post.slug}`,
      lastModified: new Date(post.updatedDate ?? post.isoDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );
}
