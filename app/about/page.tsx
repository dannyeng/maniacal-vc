import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Why Maniacal exists and how the journal approaches technology.",
};

export default function AboutPage() {
  return (
    <section className="prose-page page-shell">
      <p className="eyebrow">About maniacal.</p>
      <h1>We follow the signal<br />past the spectacle.</h1>
      <div className="prose-page-grid">
        <p className="prose-lede">
          Maniacal is an independent journal about technology, artificial intelligence,
          capital, and the people turning improbable ideas into institutions.
        </p>
        <div className="prose-copy">
          <p>
            We read the funding announcement, then ask what the money is supposed to make true.
            We study the product, the business model, the constraints, and the second-order
            effects. The goal is not to predict every winner. It is to build a better mental
            model of what is changing.
          </p>
          <p>
            Our editorial aesthetic borrows from the restraint of a good product and the space
            of an independent fashion journal: fewer elements, stronger choices, and enough room
            for an idea to hold its shape.
          </p>
          <p>
            Facts are linked to their original sources whenever possible. Analysis is clearly
            presented as analysis. Hype is treated as a clue, never as proof.
          </p>
        </div>
      </div>
    </section>
  );
}
