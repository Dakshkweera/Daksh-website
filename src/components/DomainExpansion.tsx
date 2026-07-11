"use client";

import { AnimatePresence, motion } from "framer-motion";
import LavaEmbers from "@/components/LavaEmbers";

export default function DomainExpansion({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[150] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <LavaEmbers />
          <motion.p
            className="relative font-display text-4xl md:text-6xl lg:text-7xl font-black text-neon-purple-light text-glow-purple text-center px-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Domain Expansion
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
