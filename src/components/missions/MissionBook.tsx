"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { missions } from "./missionData";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import MissionCover from "./MissionCover";

export default function MissionBook() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const mission = missions.find((m) => m.id === activeId) ?? null;

  return (
    <div className="relative mx-auto max-w-6xl">
      <AnimatePresence mode="wait">
        {!mission ? (
          <motion.div
            key="covers"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            {missions.map((m) => (
              <MissionCover key={m.id} mission={m} onOpen={() => setActiveId(m.id)} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="book"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, rotateY: -8 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, rotateY: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: reduced ? 0.15 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center", perspective: 1800 }}
          >
            <button
              onClick={() => setActiveId(null)}
              className="text-technical-label mb-4 transition-colors duration-200 hover:text-parchment"
              style={{ color: "var(--dim)" }}
            >
              ← Back to Archive
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
                    "linear-gradient(90deg, transparent, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.35) 55%, transparent)",
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
