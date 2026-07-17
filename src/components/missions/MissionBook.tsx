"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { missions } from "./missionData";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import BookCover from "./BookCover";

export default function MissionBook() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(missions[0].id);
  const reduced = useReducedMotion();
  const mission = missions.find((m) => m.id === activeId) ?? missions[0];

  return (
    <div
      className="relative mx-auto max-w-6xl grid place-items-center"
      style={{ perspective: 2200, minHeight: 560 }}
    >
      <AnimatePresence>
        {!open && <BookCover key="cover" onOpen={() => setOpen(true)} reduced={!!reduced} />}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="interior"
            className="[grid-area:1/1] w-full"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: reduced ? 0 : 0.3, duration: reduced ? 0.15 : 0.5, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
          >
            <button
              onClick={() => setOpen(false)}
              className="text-technical-label mb-4 transition-colors duration-200 hover:text-parchment"
              style={{ color: "var(--dim)" }}
            >
              ← Close Archive
            </button>

            <div
              className="relative rounded-sm border border-hairline overflow-hidden"
              style={{
                background: "var(--raised)",
                boxShadow: "0 50px 90px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(233,225,212,0.03)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 hidden md:block"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(40,26,12,0.3) 45%, rgba(40,26,12,0.3) 55%, transparent)",
                }}
                aria-hidden="true"
              />

              <div style={{ perspective: 1800 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mission.id}
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10, rotateX: -4 }}
                    animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10, rotateX: 4 }}
                    transition={{ duration: reduced ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "top center" }}
                    className="grid grid-cols-1 md:grid-cols-2 relative"
                  >
                    <div className="border-b md:border-b-0 md:border-r border-hairline">
                      <LeftPage mission={mission} missions={missions} onSelect={setActiveId} />
                    </div>
                    <div>
                      <RightPage mission={mission} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
