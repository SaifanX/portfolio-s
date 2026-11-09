"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TextLoop from "@/components/TextLoop";
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
          colors={['#4c0519', '#e11d48', '#ff1744']}
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

      {/* React Bits Curvilinear TextLoop Marquee Banner */}
      <section className="relative z-10 py-3 sm:py-4 overflow-hidden border-y border-zinc-800/40 bg-[#09090d]/60 backdrop-blur-sm">
        <TextLoop
          text="SOLUTIONS ARCHITECT ✦ REACTIVE SYSTEMS ✦ 3D SIMULATIONS ✦ TECHNOFEST 2ND PLACE ✦ MISSION-CRITICAL AI ✦ ZERO-LAG ARCHITECTURE"
          shape="wave"
          speed={65}
          direction="forward"
          separator="✦"
          curviness={36}
          tilt={-0.6}
          fontSize={22}
          fontWeight={900}
          letterSpacing={2}
          uppercase={true}
          ribbon={true}
          ribbonColor="#18040d"
          ribbonWidth={56}
          color="#e11d48"
          scrollBoost={0.4}
          pauseOnHover={true}
        />
      </section>

      <SelectedProjects />
      <WorkProcess />
      <TechnicalArsenal />
      <ConversionFooter />
    </main>
  );
}
