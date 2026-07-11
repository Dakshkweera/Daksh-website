"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg tracking-widest text-neon-purple-light text-glow-purple"
        >
          DK
        </a>
        <ul className="hidden md:flex items-center gap-8 font-heading text-sm tracking-wide uppercase text-foreground-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-neon-cyan transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Daksh_Kweera_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-sm uppercase tracking-wide px-4 py-2 rounded border border-neon-purple text-neon-purple-light glow-border"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
