/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { contact } from "../../data";

export default function ContactSection() {
  return (
    <section className="py-20 px-16 pb-28">
      <h2
        className="text-xs font-semibold tracking-widest uppercase mb-10"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-sans)" }}
      >
        Contact
      </h2>

      <p
        className="text-lg leading-relaxed mb-10"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--color-muted)",
          fontWeight: 300,
        }}
      >
        Have a project in mind or just want to say hello?
      </p>

      <div className="flex flex-col gap-3">
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-base w-fit"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-forest)",
            }}
          >
            <span
              className="w-4 h-px transition-all duration-200 group-hover:w-8"
              style={{ backgroundColor: "var(--color-forest)" }}
            />
            {link.label}
          </a>
        ))}
      </div>

      <p
        className="mt-20 text-xs"
        style={{ color: "var(--color-border)", fontFamily: "var(--font-sans)" }}
      >
        Built with ♡ &amp; React.
      </p>
    </section>
  );
}
