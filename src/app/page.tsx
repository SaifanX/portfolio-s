"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
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

      {/* "Now Working" Real-Time Momentum Banner */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 mt-6 mb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:px-5 rounded-2xl bg-[#111118]/90 border border-crimson/30 shadow-[0_0_20px_rgba(225,29,72,0.12)] backdrop-blur-md">
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crimson"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-crimson font-bold shrink-0">
              Now Working
            </span>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm text-zinc-200">
              Working on the Zuzu Minis client e-commerce store
            </span>
          </div>
          <a
            href="https://zuzuminis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson/15 hover:bg-crimson/30 border border-crimson/50 text-white text-xs font-mono font-semibold transition-all shrink-0 self-end sm:self-center group"
          >
            <span>Visit Live Store</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-crimson-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <SelectedProjects />
      <WorkProcess />
      <TechnicalArsenal />
      <ConversionFooter />
    </main>
  );
}
