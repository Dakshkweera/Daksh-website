import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="field-experience" className="relative py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            Field Experience
          </h2>
        </Reveal>

        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.08}>
            <div className="glass-panel glow-border rounded-lg p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-heading text-lg text-neon-purple-light">{job.role}</h3>
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

              <p className="text-sm text-foreground-muted mb-5">{job.focus}</p>

              <div className="grid grid-cols-3 gap-3">
                {job.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-xl md:text-2xl font-black text-neon-cyan text-glow-cyan">
                      {m.value}
                    </p>
                    <p className="text-xs text-foreground-muted mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
