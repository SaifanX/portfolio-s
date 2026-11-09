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
    // 4s smooth progression
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

          {/* Center: Hand-Crafted Sequential Cursive Signature of "Saifan" */}
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
                  {/* Letter 'S' - Distinct Capital S with dramatic top arch, center waist, and rounded bottom bowl */}
                  <motion.path
                    d="M 65,55 C 80,30 115,22 135,38 C 150,50 148,72 130,88 C 110,102 75,108 70,130 C 65,152 85,172 118,170 C 140,168 152,152 158,135"
                    stroke="#ffffff"
                    strokeWidth="4.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                  />

                  {/* Letter 'a' - First */}
                  <motion.path
                    d="M 158,135 C 168,112 188,105 198,120 C 203,130 198,160 178,160 C 163,160 158,145 168,125 C 178,105 198,110 203,130 L 203,160 C 203,165 208,168 218,155"
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
                    d="M 218,155 L 228,120 L 228,160 C 228,165 233,165 243,155"
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
                    cx="229"
                    cy="100"
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
                    d="M 243,155 C 258,130 268,55 278,40 C 288,30 288,50 273,115 L 258,200 C 253,220 263,220 273,200 C 283,180 283,150 268,150 L 298,148"
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
                    d="M 298,148 C 308,126 328,122 338,132 C 343,142 338,162 318,162 C 303,162 301,147 311,129 C 321,112 338,117 343,135 L 343,162 C 343,167 348,167 358,155"
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
                    d="M 358,155 L 363,125 L 363,162 M 363,135 C 373,123 393,123 398,140 L 398,162 C 398,167 408,162 423,145"
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
                    d="M 65,185 C 165,185 295,182 445,172 C 470,170 475,165 465,175 C 440,195 405,195 375,195"
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
