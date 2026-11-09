"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const greetings = [
  "Namaste.",
  "Quiet Progress.",
  "Creative Architecture.",
  "Systems Online.",
  "Mohammed Saifan.",
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Steady, readable progression (~4s total duration)
    const intervalTime = 40;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 650);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    // Safety fallback
    const safetyTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 5500);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Cycle greetings
  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 850);

    return () => clearInterval(greetingTimer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#08080c] px-8 py-10 sm:px-14 sm:py-12 md:px-20 md:py-16 text-white select-none pointer-events-auto"
        >
          {/* Top Bar Status */}
          <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase text-zinc-400 font-mono">
            <span className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-crimson animate-pulse shadow-[0_0_10px_#e11d48]" />
              <span className="text-zinc-200 font-semibold">SAIFAN</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">Digital Lab</span>
            </span>
            <span className="text-zinc-400">BLR · 12°58' N</span>
          </div>

          {/* Center: Hand-Crafted Sequential Cursive Signature of "Saifan" (Unmistakable S) */}
          <div className="flex flex-col items-center justify-center my-auto w-full">
            {/* Ambient Red Glow in Background */}
            <div className="absolute w-[450px] h-[250px] bg-crimson/20 blur-[110px] pointer-events-none rounded-full" />

            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              {/* Cursive subtitle */}
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif italic text-crimson text-xl sm:text-2xl tracking-wide mb-3"
              >
                Creative Developer & Architect
              </motion.span>

              {/* The SVG Canvas */}
              <div className="relative w-full max-w-[540px] flex items-center justify-center">
                <svg
                  className="w-full h-40 sm:h-48 md:h-52 overflow-visible drop-shadow-[0_0_25px_rgba(225,29,72,0.55)]"
                  viewBox="0 0 520 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Letter 'S' - Authentic Calligraphic Capital S (Bottom swoop up, loop, curved belly, upward tie) */}
                  <motion.path
                    d="M 60,140 C 70,110 85,60 105,25 C 115,10 128,15 120,40 C 110,65 95,95 85,120 C 75,145 90,165 115,165 C 135,165 148,145 155,120"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                  />

                  {/* Letter 'a' - First */}
                  <motion.path
                    d="M 155,120 C 165,100 185,95 195,110 C 200,120 195,150 175,150 C 160,150 155,135 165,115 C 175,95 195,100 200,120 L 200,150 C 200,155 205,158 215,145"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.95 }}
                  />

                  {/* Letter 'i' - Stem */}
                  <motion.path
                    d="M 215,145 L 225,110 L 225,150 C 225,155 230,155 240,145"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 1.45 }}
                  />

                  {/* Letter 'i' - Glowing Ruby Crimson Dot */}
                  <motion.circle
                    cx="226"
                    cy="90"
                    r="5.5"
                    fill="#e11d48"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 14,
                      delay: 1.7,
                    }}
                  />

                  {/* Letter 'f' - Tall ascender loop, deep descender loop & cross-tie */}
                  <motion.path
                    d="M 240,145 C 255,120 265,45 275,30 C 285,20 285,40 270,105 L 255,190 C 250,210 260,210 270,190 C 280,170 280,140 265,140 L 295,138"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.85, ease: "easeInOut", delay: 1.75 }}
                  />

                  {/* Letter 'a' - Second */}
                  <motion.path
                    d="M 295,138 C 305,116 325,112 335,122 C 340,132 335,152 315,152 C 300,152 298,137 308,119 C 318,102 335,107 340,125 L 340,152 C 340,157 345,157 355,145"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 2.5 }}
                  />

                  {/* Letter 'n' */}
                  <motion.path
                    d="M 355,145 L 360,115 L 360,152 M 360,125 C 370,113 390,113 395,130 L 395,152 C 395,157 405,152 420,135"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 3.0 }}
                  />

                  {/* Sweeping Crimson Underline Flourish */}
                  <motion.path
                    d="M 65,175 C 165,175 295,172 445,162 C 470,160 475,155 465,165 C 440,185 405,185 375,185"
                    stroke="#e11d48"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 3.45 }}
                  />
                </svg>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xs uppercase font-mono tracking-[0.35em] text-zinc-400 mt-2"
              >
                Mohammed Saifan · Portfolio
              </motion.p>
            </div>
          </div>

          {/* Bottom Bar: Loading counter on left, Typewriter on right */}
          <div className="flex items-end justify-between border-t border-zinc-800/80 pt-6">
            <div className="font-mono">
              <span className="text-xs text-zinc-400 block uppercase tracking-wider mb-1 font-medium">
                Calibrating
              </span>
              <span className="text-4xl sm:text-6xl font-bold tracking-tight text-white tabular-nums">
                {String(progress).padStart(2, "0")}
                <span className="text-crimson font-light text-2xl sm:text-3xl ml-1">
                  %
                </span>
              </span>
            </div>

            <div className="text-right font-mono">
              <span className="text-xs text-zinc-400 block uppercase tracking-wider mb-1 font-medium">
                Directive
              </span>
              <motion.span
                key={greetingIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-base sm:text-xl font-medium text-crimson block font-sans"
              >
                {greetings[greetingIndex]}
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
