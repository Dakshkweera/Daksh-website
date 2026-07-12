"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import type { journey as journeyData } from "@/lib/data";

type Stage = (typeof journeyData)[number];
type ViewBox = { w: number; h: number };
type Point = { x: number; y: number; t: number };

const DESKTOP_VB: ViewBox = { w: 400, h: 1000 };
const DESKTOP_POINTS: Point[] = [
  { x: 100, y: 60, t: 0.06 },
  { x: 300, y: 220, t: 0.22 },
  { x: 120, y: 380, t: 0.38 },
  { x: 300, y: 540, t: 0.54 },
  { x: 120, y: 700, t: 0.7 },
  { x: 290, y: 860, t: 0.86 },
];
const DESKTOP_PATH =
  "M100,60 C220,110 280,160 300,220 C320,280 160,320 120,380 C80,440 280,480 300,540 C320,600 140,640 120,700 C100,760 270,800 290,860";

const MOBILE_VB: ViewBox = { w: 200, h: 1000 };
const MOBILE_POINTS: Point[] = [
  { x: 100, y: 60, t: 0.06 },
  { x: 140, y: 220, t: 0.22 },
  { x: 70, y: 380, t: 0.38 },
  { x: 140, y: 540, t: 0.54 },
  { x: 70, y: 700, t: 0.7 },
  { x: 120, y: 860, t: 0.86 },
];
const MOBILE_PATH =
  "M100,60 C160,110 160,170 140,220 C120,270 60,330 70,380 C80,430 150,490 140,540 C130,590 60,650 70,700 C80,750 130,810 120,860";

function Checkpoint({
  stage,
  point,
  vb,
  progress,
  reduced,
  isActive,
  onSelect,
}: {
  stage: Stage;
  point: Point;
  vb: ViewBox;
  progress: MotionValue<number>;
  reduced: boolean;
  isActive: boolean;
  onSelect: () => void;
}) {
  const reveal = useTransform(
    progress,
    [Math.max(0, point.t - 0.06), point.t],
    reduced ? [1, 1] : [0, 1]
  );
  const ringScale = useTransform(
    progress,
    [Math.max(0, point.t - 0.06), Math.max(0, point.t - 0.02), point.t],
    reduced ? [1, 1, 1] : [0.4, 1.3, 1]
  );

  return (
    <button
      onClick={onSelect}
      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
      style={{ left: `${(point.x / vb.w) * 100}%`, top: `${(point.y / vb.h) * 100}%` }}
      aria-label={`Open story: ${stage.label}`}
    >
      <motion.span
        className="absolute inset-0 rounded-full border"
        style={{
          scale: ringScale,
          opacity: reveal,
          borderColor: isActive ? "var(--active)" : "var(--inkline)",
          width: 22,
          height: 22,
          left: -11,
          top: -11,
        }}
        aria-hidden="true"
      />
      <span
        className="block w-2.5 h-2.5 rounded-full transition-colors duration-300 group-focus-visible:ring-2 group-focus-visible:ring-offset-2"
        style={{
          background: isActive ? "var(--active)" : "var(--ink)",
          boxShadow: "0 0 0 3px var(--canvas)",
        }}
      />
      <motion.span
        className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-technical-label"
        style={{ opacity: reveal }}
      >
        {stage.label}
      </motion.span>
    </button>
  );
}

export default function JourneyRoute({
  journey,
  progress,
  activeId,
  onSelect,
  variant,
}: {
  journey: Stage[];
  progress: MotionValue<number>;
  activeId: string | null;
  onSelect: (id: string) => void;
  variant: "desktop" | "mobile";
}) {
  const reduced = useReducedMotion() ?? false;
  const vb = variant === "desktop" ? DESKTOP_VB : MOBILE_VB;
  const points = variant === "desktop" ? DESKTOP_POINTS : MOBILE_POINTS;
  const d = variant === "desktop" ? DESKTOP_PATH : MOBILE_PATH;

  return (
    <div
      className="relative w-full mx-auto"
      style={{ maxWidth: variant === "desktop" ? 420 : 240, aspectRatio: `${vb.w} / ${vb.h}` }}
    >
      <svg viewBox={`0 0 ${vb.w} ${vb.h}`} className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={d}
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
          style={reduced ? undefined : { pathLength: progress }}
        />
      </svg>

      {journey.map((stage, i) => (
        <Checkpoint
          key={stage.id}
          stage={stage}
          point={points[i]}
          vb={vb}
          progress={progress}
          reduced={reduced}
          isActive={activeId === stage.id}
          onSelect={() => onSelect(stage.id)}
        />
      ))}
    </div>
  );
}
