import Reveal from "@/components/Reveal";
import { journey } from "@/lib/data";
import { InkCircle } from "@/components/ui/Ink";

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">The Path</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">How the identity formed</p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-hairline" aria-hidden="true" />

          <div className="space-y-10">
            {journey.map((step, i) => (
              <Reveal key={step.stage} delay={i * 0.06}>
                <div className="relative flex gap-6 pl-0">
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full surface-raised flex items-center justify-center">
                    <InkCircle />
                  </div>
                  <div className="pt-0.5">
                    <p className="font-heading text-lg text-parchment mb-1">{step.stage}</p>
                    <p className="text-body text-sm">{step.detail}</p>
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
