"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";

const ACCENTS: Record<string, string> = {
  foundation: "M40,860 C160,840 260,880 380,850",
  "problem-solving": "M60,760 C120,700 100,600 160,520 M160,520 C210,470 190,400 240,340",
  competitive: "M80,640 C110,600 100,560 130,520 M130,520 C150,490 140,460 165,430 M100,600 C130,580 150,600 175,570",
  "full-stack": "M20,500 C140,480 260,520 380,495 M20,560 C140,545 260,575 380,555",
  backend: "M60,900 C160,760 200,620 260,480 M300,900 C230,760 210,620 260,480 M20,780 C120,700 200,600 260,480",
  "ai-systems": "M120,600 A140,140 0 1 1 380,600 A140,140 0 1 1 120,600",
};

export default function JourneyTerrain({
  activeStage,
  progress,
}: {
  activeStage: string | null;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();

  const baseY = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, -24]);
  const accentY = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, -48]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.svg
        viewBox="0 0 400 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ y: baseY }}
      >
        {/* distant ridge */}
        <path
          d="M-20,300 C60,260 120,310 200,270 C280,230 340,290 420,250"
          stroke="var(--warmgray)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.05"
        />
        {/* mid ridge */}
        <path
          d="M-20,480 C80,420 160,470 240,410 C300,365 360,420 420,390"
          stroke="var(--parchment)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.06"
        />
        {/* near ridge */}
        <path
          d="M-20,700 C100,630 200,690 280,620 C330,580 370,630 420,600"
          stroke="var(--ink)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.04"
        />

        {/* faint contour traces */}
        <path
          d="M20,200 C100,190 140,220 220,205 C280,195 320,215 380,205"
          stroke="var(--warmgray)"
          strokeWidth="1"
          fill="none"
          opacity="0.035"
        />
        <path
          d="M10,950 C90,935 170,955 250,935 C310,920 350,940 390,930"
          stroke="var(--warmgray)"
          strokeWidth="1"
          fill="none"
          opacity="0.035"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 400 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ y: accentY }}
      >
        {Object.entries(ACCENTS).map(([id, d]) => (
          <motion.path
            key={id}
            d={d}
            stroke="var(--ink)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            initial={false}
            animate={{ opacity: activeStage === id ? 0.05 : 0 }}
            transition={{ duration: reduced ? 0 : 1.2, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
