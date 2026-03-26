/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { about } from "../../data";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 px-16">
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-8"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-sans)" }}
      >
        {about.title}
      </p>

      <h1
        className="text-8xl font-bold leading-none mb-10"
        style={{
          fontFamily: "var(--font-lora)",
          color: "var(--color-forest-dark)",
        }}
      >
        {about.name}.
      </h1>

      <p
        className="text-xl leading-relaxed"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--color-muted)",
          fontWeight: 300,
          maxWidth: "52ch",
        }}
      >
        {about.intro}
      </p>

      <div
        className="mt-12 w-16 h-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />
    </section>
  );
}
