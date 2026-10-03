# maniacal.vc

An independent technology journal about artificial intelligence, startups, capital, and the systems shaping modern life.

## Local development

```bash
npm install
npm run dev
```

The site uses Vinext on Cloudflare Workers, Cloudflare D1 for first-party analytics, and ChatGPT sign-in for the private publisher dashboard at `/dashboard`.

Analytics are cookieless, exclude the dashboard, honor Do Not Track, and store anonymous first-party visitor and session identifiers. No IP addresses are stored.

## Editorial operations

See `AGENTS.md` for the standing editorial mandate and `docs/editorial-calendar.md` for the current assignments, publishing gates, and unresolved dependencies. The existing daily edition is the sole scheduled news publisher.

The homepage shows the newest twenty essays. `/archive` keeps the full collection discoverable; all `/journal/[slug]` URLs remain available. `/feed.xml` is the RSS feed. Published posts stay in `lib/posts.ts`, sorted by publication date at runtime. Reading times are computed from the article text.

The Sites source repository is the verified production source. A separate GitHub mirror has not been resolved; do not report it synchronized without checking its identity and commit.
