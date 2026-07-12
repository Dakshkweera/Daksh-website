import Reveal from "@/components/Reveal";
import { howIThink } from "@/lib/data";

export default function HowIThink() {
  return (
    <section id="how-i-think" className="relative py-28 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">My Way</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">How I think</p>
        </Reveal>

        <div className="space-y-4">
          {howIThink.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="surface-raised rounded-lg p-6">
                <p className="font-heading text-parchment mb-2">{item.title}</p>
                <p className="text-metadata italic">{item.placeholder}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
