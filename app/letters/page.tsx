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
        paper hiding in plain sight. We read thoughtful notes.
      </p>
      <a className="text-link" href="mailto:letters@maniacal.vc">
        letters@maniacal.vc <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
