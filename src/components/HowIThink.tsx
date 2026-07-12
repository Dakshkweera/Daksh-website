import Reveal from "@/components/Reveal";
import { howIThink } from "@/lib/data";

export default function HowIThink() {
  return (
    <section id="how-i-think" className="relative py-28 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            My Way
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-16 text-glow-purple">
            How I think
          </p>
        </Reveal>

        <div className="space-y-4">
          {howIThink.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="glass-panel rounded-lg p-6 border border-border-glow">
                <p className="font-heading text-neon-purple-light mb-2">{item.title}</p>
                <p className="text-sm text-foreground-muted/60 italic">{item.placeholder}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
