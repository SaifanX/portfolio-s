"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TextLoop from "@/components/TextLoop";
import SelectedProjects from "@/components/SelectedProjects";
import WorkProcess from "@/components/WorkProcess";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import ConversionFooter from "@/components/ConversionFooter";

// Lazy-load WebGL fluid simulation so it never blocks FCP or main thread boot
const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
});

// Preloader component
const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [curtainLifting, setCurtainLifting] = useState(true);

  useEffect(() => {
    // Only show preloader on first session visit
    const hasVisited = sessionStorage.getItem("portfolio_visited");
    if (!hasVisited) {
      setShowPreloader(true);
      setCurtainLifting(false);
      sessionStorage.setItem("portfolio_visited", "true");
    } else {
      setShowPreloader(false);
      setCurtainLifting(true);
    }
  }, []);

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

      {/* Interactive Curtain Preloader (Session-capped: runs once per session) */}
      {showPreloader && (
        <Preloader
          onExitStart={() => setCurtainLifting(true)}
          onComplete={() => setShowPreloader(false)}
        />
      )}

      {/* Main Experience */}
      <Navbar isLoaded={curtainLifting} />
      <Hero isReady={curtainLifting} />

      {/* Curvilinear TextLoop Marquee Banner */}
      <section className="relative z-10 py-0.5 sm:py-1 overflow-hidden border-y border-zinc-800/40 bg-[#09090d]/60 backdrop-blur-sm max-h-[150px] flex items-center">
        <TextLoop
          text="STATE RUNNER-UP ✦ LIVE CLIENT PLATFORMS ✦ 3D SIMULATIONS ✦ AI SYSTEMS ✦ DRONE AVIONICS"
          shape="wave"
          speed={65}
          direction="forward"
          separator="✦"
          curviness={22}
          tilt={-0.3}
          fontSize={20}
          fontWeight={900}
          letterSpacing={2}
          uppercase={true}
          ribbon={true}
          ribbonColor="#18040d"
          ribbonWidth={46}
          color="#e11d48"
          scrollBoost={0.4}
          pauseOnHover={true}
        />
      </section>

      {/* "Currently Building" Real-Time Momentum Banner */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 mt-6 mb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:px-5 rounded-2xl bg-[#111118]/80 border border-zinc-800/90 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold shrink-0">
              Currently Building
            </span>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm text-zinc-300">
              Rebuilding AirGuard avionics telemetry & preparing for national aerospace competitions
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 shrink-0 self-end sm:self-center">
            Updated Nov 2026
          </span>
        </div>
      </div>

      <SelectedProjects />
      <WorkProcess />
      <TechnicalArsenal />
      <ConversionFooter />
    </main>
  );
}
