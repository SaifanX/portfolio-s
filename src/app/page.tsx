"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import WorkProcess from "@/components/WorkProcess";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import ConversionFooter from "@/components/ConversionFooter";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handleReplayPreloader = () => {
    setShowPreloader(false);
    setTimeout(() => {
      setShowPreloader(true);
    }, 100);
  };

  useEffect(() => {
    (window as unknown as { __replay: () => void }).__replay = handleReplayPreloader;
  }, []);

  return (
    <main className="relative min-h-screen bg-[#070709] text-zinc-100 overflow-x-hidden">
      {/* Interactive Curtain Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Main Experience */}
      <Navbar onReplayIntro={handleReplayPreloader} />
      <Hero />
      <SelectedProjects />
      <WorkProcess />
      <TechnicalArsenal />
      <ConversionFooter />
    </main>
  );
}
