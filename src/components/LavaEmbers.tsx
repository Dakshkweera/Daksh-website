"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  vy: number;
  vx: number;
  radius: number;
  life: number;
  maxLife: number;
};

const COLORS = ["255, 47, 15", "255, 157, 31", "138, 16, 16"];

export default function LavaEmbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let embers: Ember[] = [];
    let animationId: number;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    function spawn() {
      embers.push({
        x: Math.random() * width,
        y: height + 10,
        vy: -(Math.random() * 1.2 + 0.5),
        vx: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1,
        life: 0,
        maxLife: Math.random() * 200 + 160,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      if (Math.random() < 0.55 && embers.length < 140) spawn();

      embers = embers.filter((e) => e.life < e.maxLife && e.y > -20);

      for (const e of embers) {
        e.x += e.vx;
        e.y += e.vy;
        e.life++;

        const fade = 1 - e.life / e.maxLife;
        const color = COLORS[Math.floor((e.x + e.y) % COLORS.length)];

        ctx!.beginPath();
        ctx!.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color}, ${fade * 0.9})`;
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = `rgba(${color}, ${fade})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
