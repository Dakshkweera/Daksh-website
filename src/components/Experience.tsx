import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            03 — Experience
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12 text-glow-purple">
            Where I&apos;ve worked
          </p>
        </Reveal>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.1}>
              <div className="glass-panel glow-border rounded-lg p-6 md:p-8 relative">
                <div className="absolute -left-px top-8 bottom-8 w-px bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent hidden md:block" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-heading text-xl text-neon-purple-light">
                    {job.role}
                  </h3>
                  <span className="text-sm text-foreground-muted font-heading tracking-wide">
                    {job.duration}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-neon-cyan text-sm">{job.org}</p>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wide text-foreground-muted hover:text-neon-cyan transition-colors underline underline-offset-4"
                  >
                    {job.linkLabel}
                  </a>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-foreground-muted text-sm leading-relaxed flex gap-3">
                      <span className="text-neon-purple mt-1.5 shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
