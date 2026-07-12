import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";
import { InkUnderline } from "@/components/ui/Ink";

export default function Skills() {
  return (
    <section id="arsenal" className="relative py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">The Arsenal</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-4">Technical capabilities</p>
          <InkUnderline className="mb-12" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="surface-raised rounded-lg p-6 h-full">
                <p className="text-technical-label mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full border border-hairline text-warmgray hover:border-inkline hover:text-parchment transition-colors duration-200"
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
