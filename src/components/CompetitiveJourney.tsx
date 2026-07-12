import Reveal from "@/components/Reveal";
import { competitive } from "@/lib/data";

export default function CompetitiveJourney() {
  return (
    <section id="trials" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            The Trials
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-4 text-glow-purple">
            Competitive programming
          </p>
          <p className="text-foreground-muted max-w-xl mb-16">
            Where algorithmic thinking got sharpened, one problem at a time.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Reveal delay={0.05}>
            <div className="glass-panel glow-border rounded-lg p-8 text-center">
              <p className="font-heading uppercase tracking-wide text-xs text-neon-cyan mb-3">Codeforces</p>
              <p className="font-display text-4xl font-black text-neon-purple-light text-glow-purple mb-2">
                {competitive.codeforces.rating}
              </p>
              <p className="text-sm text-foreground-muted">{competitive.codeforces.rank}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-panel glow-border rounded-lg p-8 text-center">
              <p className="font-heading uppercase tracking-wide text-xs text-neon-cyan mb-3">LeetCode</p>
              <p className="font-display text-4xl font-black text-neon-purple-light text-glow-purple mb-2">
                {competitive.leetcode.rating}
              </p>
              <p className="text-sm text-foreground-muted">{competitive.leetcode.rank}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass-panel rounded-lg p-6 border border-border-glow text-center">
            <p className="font-display text-2xl font-bold text-neon-cyan text-glow-cyan mb-1">
              {competitive.problemsSolved} problems solved
            </p>
            <p className="text-sm text-foreground-muted">Across {competitive.platforms}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
