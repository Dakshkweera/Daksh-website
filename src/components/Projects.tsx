import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

const FIELDS: { key: keyof (typeof projects)[number]; label: string }[] = [
  { key: "why", label: "Why it exists" },
  { key: "problem", label: "The problem" },
  { key: "built", label: "What I built" },
  { key: "challenge", label: "The hard part" },
  { key: "decision", label: "Key decision" },
  { key: "result", label: "Result" },
];

export default function Projects() {
  return (
    <section id="missions" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">Mission Records</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">What I&apos;ve built</p>
        </Reveal>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <Reveal key={project.title}>
              <article className="relative">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-display text-5xl text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-section-heading text-2xl md:text-3xl">{project.title}</h3>
                    <p className="text-technical-label mt-1">{project.subtitle}</p>
                  </div>
                </div>

                <div className="surface-raised rounded-lg p-6 md:p-8 mt-6 space-y-5">
                  {FIELDS.map(({ key, label }) => (
                    <div key={key}>
                      <p className="text-technical-label mb-1">{label}</p>
                      <p className="text-body text-sm md:text-base">{project[key] as string}</p>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded border border-hairline text-warmgray"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 font-heading text-sm uppercase tracking-wide pt-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-active transition-colors"
                    >
                      Demo ↗
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warmgray hover:text-parchment transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
