"use client";

import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { journey } from "@/lib/data";
import JourneyTerrainTest from "@/components/journey/JourneyTerrainTest";
import JourneyRouteTest from "@/components/journey/JourneyRouteTest";
import JourneyPanelTest from "@/components/journey/JourneyPanelTest";

export default function TerrainTestPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const activeStage = journey.find((s) => s.id === activeId) ?? null;

  return (
    <div className="relative bg-canvas">
      <div className="sticky top-0 z-10 py-8 text-center pointer-events-none">
        <span className="text-chapter-label">Sample (test route only)</span>
        <p className="text-section-heading text-2xl md:text-3xl mt-2">
          Sumi-e mountains + existing path system
        </p>
      </div>

      <section className="relative py-10 px-6 md:px-16 overflow-hidden">
        <JourneyTerrainTest activeStage={activeId} progress={scrollYProgress} />

        <div ref={trackRef} className="relative">
          <div className="hidden md:block">
            <JourneyRouteTest
              journey={journey}
              progress={scrollYProgress}
              activeId={activeId}
              onSelect={setActiveId}
              variant="desktop"
            />
          </div>
          <div className="md:hidden">
            <JourneyRouteTest
              journey={journey}
              progress={scrollYProgress}
              activeId={activeId}
              onSelect={setActiveId}
              variant="mobile"
            />
          </div>
        </div>

        <JourneyPanelTest stage={activeStage} onClose={() => setActiveId(null)} />
      </section>
    </div>
  );
}
