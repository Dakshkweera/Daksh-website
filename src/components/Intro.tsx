"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DomainExpansion from "@/components/DomainExpansion";

const VIDEO_SRC = "/intro.mp4";

type Phase = "video" | "domain" | "done";

export default function Intro({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("video");
  const [muted, setMuted] = useState(true);
  const settledRef = useRef(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const video = videoRef.current;
    if (!video) return;

    function toDomain() {
      if (settledRef.current) return;
      settledRef.current = true;
      setPhase("domain");
    }

    function handleError() {
      if (settledRef.current) return;
      settledRef.current = true;
      setPhase("done");
    }

    video.addEventListener("ended", toDomain);
    video.addEventListener("error", handleError);

    // Safety net: if the video never becomes playable (e.g. missing file), don't block the site.
    const safety = setTimeout(() => {
      if (video.readyState === 0) handleError();
    }, 2500);

    return () => {
      video.removeEventListener("ended", toDomain);
      video.removeEventListener("error", handleError);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (phase === "domain") {
      const t = setTimeout(() => setPhase("done"), 2200);
      return () => clearTimeout(t);
    }
    if (phase === "done") {
      document.body.style.overflow = "";
      onDoneRef.current();
    }
  }, [phase]);

  function handleSkip() {
    settledRef.current = true;
    setPhase("done");
  }

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Video stays mounted (just hidden) through the domain phase so its
              audio/decoder state doesn't hitch, and so there's zero gap in the
              opaque backdrop between phases. */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ visibility: phase === "video" ? "visible" : "hidden" }}
            src={VIDEO_SRC}
            autoPlay
            muted
            playsInline
            preload="auto"
          />

          <AnimatePresence>
            {phase === "domain" && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DomainExpansion />
              </motion.div>
            )}
          </AnimatePresence>

          {phase === "video" && (
            <>
              <button
                onClick={toggleMute}
                className="absolute bottom-6 left-6 font-heading text-xs uppercase tracking-widest text-foreground-muted hover:text-neon-cyan transition-colors"
              >
                {muted ? "Unmute" : "Mute"} ↦
              </button>

              <button
                onClick={handleSkip}
                className="absolute top-6 right-6 font-heading text-xs uppercase tracking-widest text-foreground-muted hover:text-neon-cyan transition-colors"
              >
                Skip ↦
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
