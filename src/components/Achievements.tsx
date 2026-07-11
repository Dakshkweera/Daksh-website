import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            05 — Achievements
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12 text-glow-purple">
            Wins &amp; milestones
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="glass-panel glow-border rounded-lg p-6 h-full">
                <p className="font-heading text-neon-purple-light mb-2">{a.title}</p>
                <p className="text-sm text-foreground-muted leading-relaxed">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
