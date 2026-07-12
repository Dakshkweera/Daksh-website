import Reveal from "@/components/Reveal";
import { profile, nextChapter } from "@/lib/data";
import { InkUnderline } from "@/components/ui/Ink";

export default function Contact() {
  return (
    <section id="next-chapter" className="relative py-28 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-chapter-label mb-3">The Next Chapter</h2>
          <p className="text-section-heading text-3xl md:text-5xl mb-4">{nextChapter.statement}</p>
          <InkUnderline className="mx-auto mb-10" />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="font-heading uppercase tracking-wide text-sm text-parchment border-b border-ink pb-1 hover:text-ink transition-colors duration-200"
            >
              {profile.email}
            </a>
            <a
              href="/Daksh_Kweera_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading uppercase tracking-wide text-sm text-warmgray border-b border-hairline pb-1 hover:text-parchment transition-colors duration-200"
            >
              Résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex items-center justify-center gap-6 font-heading text-sm uppercase tracking-wide text-warmgray">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors">
              GitHub
            </a>
            <span className="text-dim">/</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors">
              LinkedIn
            </a>
            <span className="text-dim">/</span>
            <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors">
              Medium
            </a>
            <span className="text-dim">/</span>
            <span className="text-dim">{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
