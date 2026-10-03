import type { Metadata } from "next";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maniacal.vc"),
  title: {
    default: "maniacal. — Technology, without the theater",
    template: "%s — maniacal.",
  },
  description:
    "Clear-eyed essays on the companies, capital, and ideas shaping technology and artificial intelligence.",
  openGraph: {
    title: "maniacal.",
    description:
      "Clear-eyed essays on the companies, capital, and ideas shaping technology and artificial intelligence.",
    url: "https://maniacal.vc",
    siteName: "maniacal.",
    type: "website",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsTracker />
        <header className="site-header">
          <a className="wordmark" href="/" aria-label="maniacal home">
            maniacal.
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="/#journal">Journal</a>
            <a href="/about">About</a>
            <a href="/letters">Letters</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div>
            <a className="wordmark wordmark-small" href="/">
              maniacal.
            </a>
            <p>Technology, without the theater.</p>
          </div>
          <div className="footer-meta">
            <span>Independent · San Francisco</span>
            <span>© 2026 Maniacal</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
