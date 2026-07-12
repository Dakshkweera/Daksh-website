"use client";

import { motion } from "framer-motion";
import { whoIAm, profile } from "@/lib/data";
import { InkUnderline } from "@/components/ui/Ink";
import EditorialLink from "@/components/ui/EditorialLink";

export default function Hero() {
  return (
    <section id="who-i-am" className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-16 pt-28 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,4,0.72) 0%, rgba(5,5,4,0.55) 35%, rgba(5,5,4,0.35) 65%, rgba(5,5,4,0.12) 100%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start max-w-2xl"
      >
        <span className="text-chapter-label mb-6">{whoIAm.eyebrow}</span>
        <InkUnderline className="mb-8" />

        <h1 className="text-display text-3xl md:text-5xl lg:text-6xl mb-10">
          {whoIAm.lead}
        </h1>

        <p className="text-body-large max-w-xl mb-14">{whoIAm.body}</p>

        <div className="flex flex-wrap items-center gap-8 mb-14">
          <EditorialLink href="#missions" variant="primary">
            See what I&apos;ve built
          </EditorialLink>
          <EditorialLink href="/Daksh_Kweera_Resume.pdf" external>
            Résumé
          </EditorialLink>
        </div>

        <p className="text-metadata">{whoIAm.credentials}</p>
        <p className="text-metadata mt-1">{profile.location}</p>
      </motion.div>
    </section>
  );
}
