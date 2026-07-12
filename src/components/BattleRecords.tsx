import Reveal from "@/components/Reveal";
import { battleRecords } from "@/lib/data";

export default function BattleRecords() {
  const [featured, ...rest] = battleRecords;

  return (
    <section id="battle-records" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            Battle Records
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-16 text-glow-purple">
            Hackathons &amp; major wins
          </p>
        </Reveal>

        <Reveal>
          <div className="glass-panel glow-border rounded-lg p-8 md:p-12 mb-10 text-center">
            <p className="font-heading uppercase tracking-wide text-xs text-neon-cyan mb-3">
              {featured.result}
            </p>
            <p className="font-display text-3xl md:text-5xl font-black text-neon-purple-light text-glow-purple mb-4">
              {featured.event}
            </p>
            <p className="text-foreground-muted">{featured.scale}</p>
            {(featured.context || featured.contribution) ? (
              <p className="text-sm text-foreground-muted mt-4 max-w-xl mx-auto">
                {featured.contribution || featured.context}
              </p>
            ) : (
              <p className="text-sm text-foreground-muted/50 italic mt-4">
                Contribution details to be added.
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((a, i) => (
            <Reveal key={a.event} delay={i * 0.08}>
              <div className="glass-panel glow-border rounded-lg p-6 h-full">
                <p className="font-heading uppercase tracking-wide text-xs text-neon-cyan mb-2">
                  {a.result}
                </p>
                <p className="font-display text-xl font-bold text-neon-purple-light mb-2">{a.event}</p>
                <p className="text-sm text-foreground-muted mb-3">{a.scale}</p>
                {(a.context || a.contribution) ? (
                  <p className="text-sm text-foreground-muted">{a.contribution || a.context}</p>
                ) : (
                  <p className="text-sm text-foreground-muted/50 italic">Contribution details to be added.</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
