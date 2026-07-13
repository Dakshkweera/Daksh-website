"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { journey } from "@/lib/data";

type Layer = { d: string; color: string; opacity: number; parallax: number };

const LAYERS: Layer[] = [
  {
    d: "M-20,420 C40,390 70,430 130,400 C190,370 230,410 290,385 C330,368 370,395 420,405 L420,1000 L-20,1000 Z",
    color: "#241d16",
    opacity: 0.03,
    parallax: 10,
  },
  {
    d: "M-20,540 C30,500 80,545 140,510 C210,470 250,530 310,495 C355,470 390,510 420,520 L420,1000 L-20,1000 Z",
    color: "#362a1c",
    opacity: 0.04,
    parallax: 18,
  },
  {
    d: "M-20,650 C50,600 100,660 170,610 C230,565 270,635 330,600 C365,580 395,615 420,630 L420,1000 L-20,1000 Z",
    color: "#4a3823",
    opacity: 0.05,
    parallax: 28,
  },
  {
    d: "M-20,780 C60,710 120,790 190,720 C250,660 300,750 360,700 C385,680 405,715 420,725 L420,1000 L-20,1000 Z",
    color: "#5f4527",
    opacity: 0.06,
    parallax: 40,
  },
  {
    d: "M-20,900 C70,810 140,905 210,820 C270,750 320,860 380,800 C400,780 410,810 420,820 L420,1000 L-20,1000 Z",
    color: "#74522c",
    opacity: 0.08,
    parallax: 54,
  },
];

const MIST = [
  { top: "38%", height: "10%" },
  { top: "58%", height: "10%" },
  { top: "76%", height: "10%" },
];

export default function JourneyTerrainTest({
  activeStage,
  progress,
}: {
  activeStage: string | null;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const activeIndex = activeStage ? journey.findIndex((s) => s.id === activeStage) : -1;
  const focusLayer =
    activeIndex >= 0 ? Math.round((activeIndex / (journey.length - 1)) * (LAYERS.length - 1)) : -1;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 90% at 50% 55%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 90% at 50% 55%, black 55%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      {LAYERS.map((layer, i) => {
        const y = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, -layer.parallax]);
        return (
          <motion.svg
            key={i}
            viewBox="0 0 400 1000"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
            style={{ y }}
          >
            <motion.path
              d={layer.d}
              fill={layer.color}
              initial={false}
              animate={{ opacity: focusLayer === i ? layer.opacity + 0.025 : layer.opacity }}
              transition={{ duration: reduced ? 0 : 1.4, ease: "easeInOut" }}
            />
          </motion.svg>
        );
      })}

      {MIST.map((m, i) => (
        <div
          key={i}
          className="absolute inset-x-0"
          style={{
            top: m.top,
            height: m.height,
            background: "linear-gradient(to bottom, transparent, rgba(233,225,212,0.025), transparent)",
            filter: "blur(30px)",
          }}
        />
      ))}
    </div>
  );
}
