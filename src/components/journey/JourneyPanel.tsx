"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { journey as journeyData } from "@/lib/data";

type Stage = (typeof journeyData)[number];

export default function JourneyPanel({
  stage,
  onClose,
}: {
  stage: Stage | null;
  onClose: () => void;
}) {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!stage) return;
    closeRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [stage, onClose]);

  return (
    <AnimatePresence>
      {stage && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-40 bg-deep"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.3 }}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {stage && (
        <motion.div
          key="panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="journey-panel-title"
          className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] md:w-[480px] surface-raised overflow-y-auto"
          initial={reduced ? { opacity: 0 } : { clipPath: "inset(0% 0% 0% 100%)" }}
          animate={reduced ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
          exit={reduced ? { opacity: 0 } : { clipPath: "inset(0% 0% 0% 100%)" }}
          transition={{ duration: reduced ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="p-8 md:p-10">
            <button
              ref={closeRef}
              onClick={onClose}
              className="text-metadata hover:text-parchment transition-colors mb-10"
            >
              Close ↦
            </button>

            <p className="text-display text-5xl text-dim mb-4">{stage.chapter}</p>
            <p className="text-technical-label mb-2">{stage.label}</p>
            <h3 id="journey-panel-title" className="text-section-heading text-2xl md:text-3xl mb-6">
              {stage.title}
            </h3>

            <p className="text-body mb-8">{stage.story}</p>

            <div className="flex flex-wrap gap-2">
              {stage.evidence.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-hairline text-warmgray"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
