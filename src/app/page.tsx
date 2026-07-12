import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import CompetitiveJourney from "@/components/CompetitiveJourney";
import BattleRecords from "@/components/BattleRecords";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blogs from "@/components/Blogs";
import HowIThink from "@/components/HowIThink";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Projects />
        <CompetitiveJourney />
        <BattleRecords />
        <Skills />
        <Experience />
        <Blogs />
        <HowIThink />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 text-center text-xs text-dim border-t border-hairline">
        Built by Daksh Kweera
      </footer>
    </>
  );
}
