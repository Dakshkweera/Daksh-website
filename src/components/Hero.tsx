"use client";

import { motion } from "framer-motion";
import { whoIAm, profile } from "@/lib/data";
import { InkUnderline } from "@/components/ui/Ink";

export default function Hero() {
  return (
    <section id="who-i-am" className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start max-w-2xl"
      >
        <span className="text-chapter-label mb-6">{whoIAm.eyebrow}</span>
        <InkUnderline className="mb-6" />

        <h1 className="text-display text-3xl md:text-5xl lg:text-6xl mb-6">
          {whoIAm.lead}
        </h1>

        <p className="text-body-large max-w-xl mb-10">{whoIAm.body}</p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#missions"
            className="font-heading uppercase tracking-wide text-sm text-parchment border-b border-ink pb-1 hover:text-ink transition-colors duration-200"
          >
            See what I&apos;ve built
          </a>
          <a
            href="/Daksh_Kweera_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading uppercase tracking-wide text-sm text-warmgray border-b border-hairline pb-1 hover:text-parchment hover:border-hairline transition-colors duration-200"
          >
            Résumé
          </a>
        </div>

        <p className="mt-8 text-metadata">{profile.location}</p>
      </motion.div>
    </section>
  );
}
