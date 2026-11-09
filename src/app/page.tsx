"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import WorkProcess from "@/components/WorkProcess";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import ConversionFooter from "@/components/ConversionFooter";
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [curtainLifting, setCurtainLifting] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#09090d] text-zinc-100 overflow-x-hidden selection:bg-crimson selection:text-white">
      {/* Liquid Ether: Interactive WebGL Fluid Simulation Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          persistence={0.75}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      {/* Interactive Curtain Preloader */}
      {showPreloader && (
        <Preloader
          onExitStart={() => setCurtainLifting(true)}
          onComplete={() => setShowPreloader(false)}
        />
      )}

      {/* Main Experience */}
      <Navbar />
      <Hero isReady={curtainLifting} />
      <SelectedProjects />
      <WorkProcess />
      <TechnicalArsenal />
      <ConversionFooter />
    </main>
  );
}
