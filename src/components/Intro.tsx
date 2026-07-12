"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC = "/intro.mp4";

type Phase = "video" | "done";

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

    function finish() {
      if (settledRef.current) return;
      settledRef.current = true;
      setPhase("done");
    }

    video.addEventListener("ended", finish);
    video.addEventListener("error", finish);

    // Safety net: if the video never becomes playable (e.g. missing file), don't block the site.
    const safety = setTimeout(() => {
      if (video.readyState === 0) finish();
    }, 2500);

    return () => {
      video.removeEventListener("ended", finish);
      video.removeEventListener("error", finish);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
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
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={VIDEO_SRC}
            autoPlay
            muted
            playsInline
            preload="auto"
          />

          <button
            onClick={toggleMute}
            className="absolute bottom-6 left-6 font-heading text-xs uppercase tracking-widest text-warmgray hover:text-ink transition-colors"
          >
            {muted ? "Unmute" : "Mute"} ↦
          </button>

          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 font-heading text-xs uppercase tracking-widest text-warmgray hover:text-ink transition-colors"
          >
            Skip ↦
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
