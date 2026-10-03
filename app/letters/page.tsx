import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letters",
  description: "Write to Maniacal with a company, idea, or argument worth following.",
};

export default function LettersPage() {
  return (
    <section className="letters-page page-shell">
      <p className="eyebrow">Letters</p>
      <h1>Send the thing<br />we should be reading.</h1>
      <p>
        A company with unusual momentum. A founder interview that changed your mind. A technical
        paper hiding in plain sight. A short editorial letter is coming soon.
      </p>
      <a className="text-link" href="/#journal">
        Read the journal <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
