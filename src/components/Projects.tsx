import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            04 — Projects
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12 text-glow-purple">
            Things I&apos;ve built
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <div className="glass-panel glow-border rounded-lg p-6 h-full flex flex-col">
                <p className="font-display text-xl font-bold text-neon-purple-light mb-1">
                  {project.title}
                </p>
                <p className="text-sm text-neon-cyan mb-4">{project.subtitle}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.bullets.map((b) => (
                    <li key={b} className="text-foreground-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-neon-purple mt-1 shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded border border-neon-purple/40 text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 font-heading text-sm uppercase tracking-wide">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-glow-cyan transition-colors"
                  >
                    Demo ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-neon-purple-light transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
