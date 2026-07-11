import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            06 — Contact
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold mb-6 text-glow-purple">
            Let&apos;s build something
          </p>
          <p className="text-foreground-muted mb-10 max-w-xl mx-auto">
            Open to SWE roles and internships. Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="font-heading uppercase tracking-wide px-6 py-3 rounded bg-neon-purple/10 border border-neon-purple text-neon-purple-light glow-border"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="font-heading uppercase tracking-wide px-6 py-3 rounded border border-neon-cyan/60 text-neon-cyan glow-border"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex items-center justify-center gap-6 font-heading text-sm uppercase tracking-wide text-foreground-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-cyan transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-neon-purple/40">/</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-cyan transition-colors"
            >
              GitHub
            </a>
            <span className="text-neon-purple/40">/</span>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
