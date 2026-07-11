import { motion } from "framer-motion";
import LavaEmbers from "@/components/LavaEmbers";

export default function DomainExpansion() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <LavaEmbers />
      <motion.p
        className="relative font-display text-4xl md:text-6xl lg:text-7xl font-black text-neon-purple-light text-glow-purple text-center px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Domain Expansion
      </motion.p>
    </div>
  );
}
