/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { about } from "../../data";

export default function AboutSection() {
  return (
    <section className="py-20 px-16">
      <h2
        className="text-xs font-semibold tracking-widest uppercase mb-10"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-sans)" }}
      >
        About
      </h2>

      <div className="space-y-6">
        {about.bio.map((paragraph, i) => (
          <p
            key={i}
            className="text-lg leading-loose"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-text)",
              fontWeight: 300,
              maxWidth: "58ch",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p
        className="mt-10 text-base"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-sans)" }}
      >
        Based in{" "}
        <span style={{ color: "var(--color-forest)" }}>{about.location}</span>.
      </p>

      <div
        className="mt-14 w-16 h-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />
    </section>
  );
}
