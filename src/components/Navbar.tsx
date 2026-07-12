"use client";

import { useEffect, useState } from "react";
import EditorialLink from "@/components/ui/EditorialLink";

const LINKS = [
  { href: "#who-i-am", label: "Who I Am" },
  { href: "#journey", label: "Journey" },
  { href: "#missions", label: "Missions" },
  { href: "#trials", label: "Trials" },
  { href: "#battle-records", label: "Battles" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#next-chapter", label: "Connect" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/90 border-b border-hairline" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-display text-xl tracking-wide text-parchment">
          DK
        </a>
        <ul className="hidden lg:flex items-center gap-6 font-heading text-xs tracking-wide uppercase text-warmgray">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-parchment transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <EditorialLink href="/Daksh_Kweera_Resume.pdf" external>
          Resume
        </EditorialLink>
      </nav>
    </header>
  );
}
