import Reveal from "@/components/Reveal";
import { profile, stats, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            01 — About
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-8 text-glow-purple">
            The story so far
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl mb-12">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel glow-border rounded-lg p-5 text-center"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-neon-cyan text-glow-cyan mb-1">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-foreground-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="glass-panel rounded-lg p-6 border border-border-glow">
            <p className="font-heading text-lg text-neon-purple-light mb-1">
              {education.school}
            </p>
            <p className="text-foreground-muted text-sm mb-2">
              {education.degree} · {education.duration} · {education.location}
            </p>
            <p className="text-sm text-foreground-muted">{education.details}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
