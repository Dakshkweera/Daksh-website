"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const hoveringRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    function handleMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
      }
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      const scale = hoveringRef.current ? 1.4 : 1;
      const half = 14 * scale;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - half}px, ${ringY - half}px) scale(${scale})`;
      }
      requestAnimationFrame(animateRing);
    }

    function handleHover(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = !!target.closest("a, button, [data-cursor-hover]");
      hoveringRef.current = interactive;
      ringRef.current?.classList.toggle("border-ink", interactive);
      ringRef.current?.classList.toggle("border-hairline", !interactive);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);
    const raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-ink pointer-events-none z-[100] hidden md:block"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-hairline pointer-events-none z-[100] hidden md:block transition-[border-color] duration-150 ease-out"
        aria-hidden="true"
      />
    </>
  );
}
