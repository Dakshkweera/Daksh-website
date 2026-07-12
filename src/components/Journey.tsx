import Reveal from "@/components/Reveal";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            My Journey
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-16 text-glow-purple">
            How the identity formed
          </p>
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, var(--neon-purple), var(--neon-cyan))" }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {journey.map((step, i) => (
              <Reveal key={step.stage} delay={i * 0.06}>
                <div className="relative flex gap-6 pl-0">
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full glass-panel glow-border flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                  </div>
                  <div className="pt-0.5">
                    <p className="font-heading text-lg text-neon-purple-light mb-1">{step.stage}</p>
                    <p className="text-sm text-foreground-muted">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
