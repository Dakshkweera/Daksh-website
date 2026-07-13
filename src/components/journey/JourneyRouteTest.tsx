"use client";

import { useState } from "react";
import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import type { journey as journeyData } from "@/lib/data";

type Stage = (typeof journeyData)[number];
type ViewBox = { w: number; h: number };
type Point = { x: number; y: number; t: number };

const DESKTOP_VB: ViewBox = { w: 400, h: 1000 };
const DESKTOP_POINTS: Point[] = [
  { x: 140, y: 60, t: 0.06 },
  { x: 280, y: 230, t: 0.22 },
  { x: 150, y: 400, t: 0.38 },
  { x: 290, y: 570, t: 0.54 },
  { x: 160, y: 740, t: 0.7 },
  { x: 270, y: 860, t: 0.86 },
];
const DESKTOP_SEGMENTS = [
  "M140,60 C220,120 260,170 280,230",
  "M280,230 C300,300 180,340 150,400",
  "M150,400 C120,470 260,510 290,570",
  "M290,570 C310,650 190,680 160,740",
  "M160,740 C140,790 250,810 270,860",
];

const MOBILE_VB: ViewBox = { w: 200, h: 1000 };
const MOBILE_POINTS: Point[] = [
  { x: 100, y: 60, t: 0.06 },
  { x: 150, y: 230, t: 0.22 },
  { x: 75, y: 400, t: 0.38 },
  { x: 145, y: 570, t: 0.54 },
  { x: 80, y: 740, t: 0.7 },
  { x: 135, y: 860, t: 0.86 },
];
const MOBILE_SEGMENTS = [
  "M100,60 C140,120 155,170 150,230",
  "M150,230 C145,300 85,340 75,400",
  "M75,400 C65,470 140,510 145,570",
  "M145,570 C150,650 90,680 80,740",
  "M80,740 C72,790 130,810 135,860",
];

function fullPath(segments: string[]) {
  return segments.map((s, i) => (i === 0 ? s : s.replace(/^M[\d.,]+\s*/, ""))).join(" ");
}

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
  const [hovered, setHovered] = useState(false);

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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform duration-300"
      style={{
        left: `${(point.x / vb.w) * 100}%`,
        top: `${(point.y / vb.h) * 100}%`,
        transform: `translate(-50%, -50%) scale(${hovered ? 1.15 : 1})`,
      }}
      aria-label={`Open story: ${stage.label}`}
    >
      <motion.span
        className="absolute inset-0 rounded-full border"
        style={{
          scale: ringScale,
          opacity: reveal,
          borderColor: isActive || hovered ? "var(--active)" : "var(--inkline)",
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
          background: isActive || hovered ? "var(--active)" : "var(--ink)",
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

export default function JourneyRouteTest({
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
  const segments = variant === "desktop" ? DESKTOP_SEGMENTS : MOBILE_SEGMENTS;
  const d = fullPath(segments);

  const activeIndex = activeId ? journey.findIndex((s) => s.id === activeId) : -1;

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

        {segments.map((seg, i) => {
          const emphasized = activeIndex === i || activeIndex === i + 1;
          return (
            <motion.path
              key={i}
              d={seg}
              fill="none"
              stroke="var(--active)"
              strokeWidth="2.4"
              strokeLinecap="round"
              initial={false}
              animate={{ opacity: emphasized ? 0.8 : 0 }}
              transition={{ duration: reduced ? 0 : 0.5, ease: "easeInOut" }}
            />
          );
        })}
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
