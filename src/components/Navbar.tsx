"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";

interface NavbarProps {
  onReplayIntro?: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between rounded-full bg-[#0e0e12]/80 backdrop-blur-md border border-white/10 px-5 sm:px-7 py-3 transition-all duration-300 shadow-2xl">
        {/* Left: Name & Location/Time + Replay Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayIntro}
            title="Click to replay intro animation"
            className="group flex items-center gap-1.5 font-display font-extrabold tracking-tight text-white hover:text-crimson transition-colors text-sm sm:text-base uppercase"
          >
            <span>Saifan</span>
            <RotateCcw className="w-3 h-3 text-zinc-500 group-hover:text-crimson group-hover:rotate-180 transition-all opacity-0 group-hover:opacity-100" />
          </button>
          <span className="hidden sm:inline-block text-zinc-600 font-mono">/</span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            Bangalore · {time || "12:00 PM IST"}
          </span>
        </div>

        {/* Center: Live Status Indicator */}
        <div className="hidden md:flex items-center gap-2 rounded-full bg-zinc-900/90 border border-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for High-Impact Roles & Freelance</span>
        </div>

        {/* Right: Quick Links & Contact */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
          <a
            href="#projects"
            className="text-zinc-300 hover:text-white transition-colors hidden sm:inline"
          >
            Projects
          </a>
          <a
            href="#process"
            className="text-zinc-300 hover:text-white transition-colors hidden sm:inline"
          >
            Process
          </a>
          <a
            href="#arsenal"
            className="text-zinc-300 hover:text-white transition-colors hidden sm:inline"
          >
            Arsenal
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-zinc-950 font-semibold px-4 py-1.5 text-xs hover:bg-zinc-200 transition-all shadow-md active:scale-95"
          >
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
