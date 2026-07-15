import Reveal from "@/components/Reveal";
import MissionBook from "@/components/missions/MissionBook";

export default function Projects() {
  return (
    <section id="missions" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">Mission Records</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">What I&apos;ve built</p>
        </Reveal>
      </div>

      <Reveal>
        <MissionBook />
      </Reveal>
    </section>
  );
}
