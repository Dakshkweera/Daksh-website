"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import ParticleField from "@/components/ParticleField";
import Atmosphere from "@/components/Atmosphere";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <Intro onDone={() => setIntroDone(true)} />
      {introDone && (
        <>
          <ParticleField />
          <Atmosphere />
        </>
      )}
      {children}
    </>
  );
}
