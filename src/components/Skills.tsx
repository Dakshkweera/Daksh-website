import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="arsenal" className="relative py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            The Arsenal
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12 text-glow-purple">
            Technical capabilities
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="glass-panel rounded-lg p-6 h-full border border-border-glow">
                <p className="font-heading text-neon-cyan uppercase tracking-wide text-sm mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full border border-neon-purple/50 text-foreground bg-neon-purple/5 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
