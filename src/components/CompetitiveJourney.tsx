import Reveal from "@/components/Reveal";
import { competitive } from "@/lib/data";

export default function CompetitiveJourney() {
  return (
    <section id="trials" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">The Trials</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-4">Competitive programming</p>
          <p className="text-body max-w-xl mb-16">
            Where algorithmic thinking got sharpened, one problem at a time.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Reveal delay={0.05}>
            <div className="surface-raised rounded-lg p-8 text-center">
              <p className="text-technical-label mb-3">Codeforces</p>
              <p className="text-display text-4xl text-ink mb-2">{competitive.codeforces.rating}</p>
              <p className="text-body text-sm">{competitive.codeforces.rank}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="surface-raised rounded-lg p-8 text-center">
              <p className="text-technical-label mb-3">LeetCode</p>
              <p className="text-display text-4xl text-ink mb-2">{competitive.leetcode.rating}</p>
              <p className="text-body text-sm">{competitive.leetcode.rank}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="surface-raised rounded-lg p-6 text-center">
            <p className="text-section-heading text-2xl mb-1">
              {competitive.problemsSolved} problems solved
            </p>
            <p className="text-body text-sm">Across {competitive.platforms}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
