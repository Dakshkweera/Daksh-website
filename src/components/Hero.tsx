"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import DomainExpansion from "@/components/DomainExpansion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showDomain, setShowDomain] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function handleEnded() {
      setShowDomain(true);
      setTimeout(() => setShowDomain(false), 2200);
    }

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-16 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,2,1,0.92) 0%, rgba(5,2,1,0.75) 40%, rgba(5,2,1,0.55) 70%, rgba(5,2,1,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <div
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start max-w-2xl"
      >
        <span className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-6 animate-pulse-glow">
          Welcome to my terminal
        </span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-glow-purple mb-6 leading-tight">
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-neon-cyan text-glow-cyan">{profile.name.split(" ")[1]}</span>
        </h1>

        <p className="font-heading text-xl md:text-2xl text-foreground-muted tracking-wide mb-4">
          {profile.role}
        </p>

        <p className="max-w-xl text-foreground-muted mb-10">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="font-heading uppercase tracking-wide px-6 py-3 rounded bg-neon-purple/10 border border-neon-purple text-neon-purple-light glow-border"
          >
            View projects
          </a>
          <a
            href="/Daksh_Kweera_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading uppercase tracking-wide px-6 py-3 rounded border border-neon-cyan/60 text-neon-cyan glow-border"
          >
            Download resume
          </a>
        </div>
      </motion.div>

      <DomainExpansion visible={showDomain} />
    </section>
  );
}
