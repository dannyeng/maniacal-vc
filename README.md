# maniacal.vc

An independent technology journal about artificial intelligence, startups, capital, and the systems shaping modern life.

## Local development

```bash
npm install
npm run dev
```

The site uses Vinext on Cloudflare Workers, Cloudflare D1 for first-party analytics, and ChatGPT sign-in for the private publisher dashboard at `/dashboard`.

Analytics are cookieless, exclude the dashboard, honor Do Not Track, and store anonymous first-party visitor and session identifiers. No IP addresses are stored.
