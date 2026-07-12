import Reveal from "@/components/Reveal";
import { battleRecords } from "@/lib/data";

export default function BattleRecords() {
  const [featured, ...rest] = battleRecords;

  return (
    <section id="battle-records" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">Battle Records</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">Hackathons &amp; major wins</p>
        </Reveal>

        <Reveal>
          <div className="surface-raised rounded-lg p-8 md:p-12 mb-10 text-center">
            <p className="text-technical-label mb-3">{featured.result}</p>
            <p className="text-display text-3xl md:text-5xl mb-4">{featured.event}</p>
            <p className="text-body">{featured.scale}</p>
            {(featured.context || featured.contribution) ? (
              <p className="text-body text-sm mt-4 max-w-xl mx-auto">
                {featured.contribution || featured.context}
              </p>
            ) : (
              <p className="text-metadata italic mt-4">Contribution details to be added.</p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((a, i) => (
            <Reveal key={a.event} delay={i * 0.08}>
              <div className="surface-raised rounded-lg p-6 h-full">
                <p className="text-technical-label mb-2">{a.result}</p>
                <p className="text-section-heading text-xl mb-2">{a.event}</p>
                <p className="text-body text-sm mb-3">{a.scale}</p>
                {(a.context || a.contribution) ? (
                  <p className="text-body text-sm">{a.contribution || a.context}</p>
                ) : (
                  <p className="text-metadata italic">Contribution details to be added.</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
