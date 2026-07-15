"use client";

import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Reveal from "@/components/Reveal";
import { journey } from "@/lib/data";
import JourneyTerrain from "@/components/journey/JourneyTerrain";
import JourneyRoute from "@/components/journey/JourneyRoute";
import JourneyPanel from "@/components/journey/JourneyPanel";

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const activeStage = journey.find((s) => s.id === activeId) ?? null;

  return (
    <section id="journey" className="relative py-28 px-6 md:px-16 bg-canvas overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 18%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%)",
        }}
        src="/mountain-reference.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <JourneyTerrain activeStage={activeId} progress={scrollYProgress} />

      <div className="relative max-w-3xl">
        <Reveal>
          <h2 className="text-chapter-label mb-3">The Path</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">Built one layer at a time.</p>
        </Reveal>
      </div>

      <div ref={trackRef} className="relative">
        <div className="hidden md:block">
          <JourneyRoute
            journey={journey}
            progress={scrollYProgress}
            activeId={activeId}
            onSelect={setActiveId}
            variant="desktop"
          />
        </div>
        <div className="md:hidden">
          <JourneyRoute
            journey={journey}
            progress={scrollYProgress}
            activeId={activeId}
            onSelect={setActiveId}
            variant="mobile"
          />
        </div>
      </div>

      <JourneyPanel stage={activeStage} onClose={() => setActiveId(null)} />
    </section>
  );
}
