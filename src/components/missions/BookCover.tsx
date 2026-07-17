"use client";

import { motion } from "framer-motion";

export default function BookCover({
  onOpen,
  reduced,
}: {
  onOpen: () => void;
  reduced: boolean;
}) {
  return (
    <motion.button
      onClick={onOpen}
      aria-label="Open Mission Archive"
      className="group [grid-area:1/1] relative block mx-auto w-[260px] sm:w-[300px] md:w-[340px] rounded-sm overflow-hidden focus:outline-none"
      style={{
        aspectRatio: "0.78",
        transformOrigin: "left center",
        backfaceVisibility: "hidden",
        backgroundImage: "url(/mission-book-cover.png)",
        backgroundSize: "230%",
        backgroundPosition: "58% 46%",
        boxShadow: "0 40px 70px -20px rgba(0,0,0,0.75)",
      }}
      initial={reduced ? { opacity: 0 } : { opacity: 0, rotateY: -20 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, rotateY: 0 }}
      exit={
        reduced
          ? { opacity: 0 }
          : { rotateY: -112, opacity: 0, transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] } }
      }
      whileHover={{ y: -8 }}
      transition={{ duration: reduced ? 0.15 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Vignette to blend the photo into the site's matte canvas */}
      <span
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 38%, rgba(5,5,4,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Spine-side accent, restrained burnt-orange */}
      <span
        className="absolute inset-y-0 left-0 w-2"
        style={{ background: "linear-gradient(90deg, var(--ink), transparent)", opacity: 0.5 }}
        aria-hidden="true"
      />

      {/* Embossed double frame, echoing the site's editorial borders */}
      <span
        className="absolute inset-4 rounded-[1px] pointer-events-none"
        style={{ border: "1px solid var(--hairline)" }}
        aria-hidden="true"
      />
      <span
        className="absolute inset-5 rounded-[1px] pointer-events-none transition-colors duration-300 group-hover:border-[var(--inkline)]"
        style={{ border: "1px solid var(--hairline)" }}
        aria-hidden="true"
      />

      {/* Title block */}
      <span className="absolute inset-x-0 top-[38%] flex flex-col items-center px-6 text-center">
        <span className="text-technical-label" style={{ color: "var(--ink)" }}>
          Mission Archive
        </span>
        <span
          className="text-display text-xl md:text-2xl mt-3"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.85), 0 0 16px rgba(196,79,22,0.12)" }}
        >
          The Complete Record
        </span>
        <span className="text-technical-label mt-3" style={{ color: "var(--dim)" }}>
          Daksh Kweera
        </span>
      </span>

      <span
        className="absolute inset-x-0 bottom-8 text-center text-technical-label transition-colors duration-300"
        style={{ color: "var(--dim)" }}
      >
        <span className="group-hover:text-parchment transition-colors duration-300">Open Archive ↦</span>
      </span>
    </motion.button>
  );
}
