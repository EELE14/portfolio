/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { projects, type DescriptionSegment } from "../../data";

function renderDescription(description: string | DescriptionSegment[]) {
  if (typeof description === "string") return description;
  return description.map((segment, i) =>
    typeof segment === "string" ? (
      segment
    ) : (
      <a
        key={i}
        href={segment.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--color-forest-dark)",
          textDecoration: "none",
          borderBottom: "1px solid var(--color-accent)",
        }}
      >
        {segment.text}
      </a>
    ),
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-16">
      <h2
        className="text-xs font-semibold tracking-widest uppercase mb-12"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-sans)" }}
      >
        Projects
      </h2>

      <div className="space-y-14">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="flex items-baseline gap-4 mb-4">
              <h3
                className="text-2xl font-semibold"
                style={{
                  fontFamily: "var(--font-lora)",
                  color: "var(--color-forest-dark)",
                }}
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ textDecorationColor: "var(--color-accent)" }}
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <span
                className="text-sm flex-shrink-0"
                style={{
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {project.year}
              </span>
            </div>

            <p
              className="text-base leading-relaxed mb-5"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                maxWidth: "58ch",
              }}
            >
              {renderDescription(project.description)}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded"
                  style={{
                    backgroundColor: "var(--color-accent-bg)",
                    color: "var(--color-forest)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div
        className="mt-14 w-16 h-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />
    </section>
  );
}
