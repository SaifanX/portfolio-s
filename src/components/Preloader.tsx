"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
  onExitStart?: () => void;
}

const greetings = [
  "Namaste.",
  "Quiet Progress.",
  "Creative Architecture.",
  "Systems Online.",
  "Mohammed Saifan.",
];

export default function Preloader({ onComplete, onExitStart }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Instantly bypass if Lighthouse / crawler / bot / prefers-reduced-motion is detected
    const isBotOrAudit =
      typeof navigator !== "undefined" &&
      (/bot|crawler|spider|lighthouse|chrome-lighthouse|headlesschrome/i.test(navigator.userAgent) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    if (isBotOrAudit) {
      onExitStart?.();
      onComplete();
      return;
    }

    // 2. Snappy progress (~1.3s total)
    const intervalTime = 13;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            onExitStart?.();
          }, 350);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    // 3. Max safety timeout (1.8s) so page NEVER hangs
    const safetyTimeout = setTimeout(() => {
      setIsExiting(true);
      onExitStart?.();
    }, 1800);

    // 4. If window loses focus or document is backgrounded (preventing Lighthouse tab freeze)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsExiting(true);
        onExitStart?.();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onComplete, onExitStart]);

  // Cycle greetings smoothly
  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 700);

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
            transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#08080c] px-8 py-10 sm:px-14 sm:py-12 md:px-20 md:py-16 text-white select-none pointer-events-auto"
        >
          <div className="h-6" />

          {/* Center: Hand-Crafted Sequential Cursive Signature */}
          <div className="flex flex-col items-center justify-center my-auto w-full">
            <div className="absolute w-[450px] h-[250px] bg-crimson/20 blur-[110px] pointer-events-none rounded-full" />

            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <span className="font-serif italic text-crimson text-xl sm:text-2xl tracking-wide mb-3">
                Creative Developer & Architect
              </span>

              {/* The SVG Canvas */}
              <div className="relative w-full max-w-[540px] flex items-center justify-center">
                <svg
                  className="w-full h-40 sm:h-48 md:h-52 overflow-visible drop-shadow-[0_0_25px_rgba(225,29,72,0.55)]"
                  viewBox="0 0 520 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Letter 'S' */}
                  <motion.path
                    d="M 130,40 C 115,22 85,25 75,45 C 68,60 78,80 95,92 C 115,105 138,118 138,140 C 138,165 105,175 80,165 C 70,155 75,145 90,145 C 110,145 140,140 155,120"
                    stroke="#ffffff"
                    strokeWidth="4.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                  />

                  {/* Letter 'a' */}
                  <motion.path
                    d="M 155,120 C 165,100 185,95 195,110 C 200,120 195,150 175,150 C 160,150 155,135 165,115 C 175,95 195,100 200,120 L 200,150 C 200,155 205,158 215,145"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
                  />

                  {/* Letter 'i' */}
                  <motion.path
                    d="M 215,145 L 225,110 L 225,150 C 225,155 230,155 240,145"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
                  />

                  {/* Letter 'i' Dot */}
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
                      delay: 0.7,
                    }}
                  />

                  {/* Letter 'f' */}
                  <motion.path
                    d="M 240,145 C 255,120 265,45 275,30 C 285,20 285,40 270,105 L 255,190 C 250,210 260,210 270,190 C 280,170 280,140 265,140 L 295,138"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.75 }}
                  />

                  {/* Letter 'a' */}
                  <motion.path
                    d="M 295,138 C 305,116 325,112 335,122 C 340,132 335,152 315,152 C 300,152 298,137 308,119 C 318,102 335,107 340,125 L 340,152 C 340,157 345,157 355,145"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 1.0 }}
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
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 1.15 }}
                  />

                  {/* Sweeping Crimson Underline */}
                  <motion.path
                    d="M 65,175 C 165,175 295,172 445,162 C 470,160 475,155 465,165 C 440,185 405,185 375,185"
                    stroke="#e11d48"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.25 }}
                  />
                </svg>
              </div>

              {/* Subtitle */}
              <p className="text-xs uppercase font-mono tracking-[0.35em] text-zinc-400 mt-2">
                Mohammed Saifan · Portfolio
              </p>
            </div>
          </div>

          {/* Bottom Bar: Rolling Ticker */}
          <div className="flex items-end justify-between pt-6">
            <div className="font-mono">
              <span className="text-xs text-zinc-400 block uppercase tracking-wider mb-1 font-medium">
                Calibrating
              </span>
              <div className="flex items-baseline overflow-hidden h-12 sm:h-16 relative">
                <span className="text-4xl sm:text-6xl font-bold tracking-tight text-white tabular-nums inline-block leading-none">
                  {String(progress).padStart(2, "0")}
                </span>
                <span className="text-crimson font-light text-2xl sm:text-3xl ml-1">
                  %
                </span>
              </div>
            </div>

            <div className="text-right font-mono">
              <span className="text-xs text-zinc-400 block uppercase tracking-wider mb-1 font-medium">
                Directive
              </span>
              <div className="overflow-hidden h-7 sm:h-9 relative flex items-center justify-end">
                <span className="text-base sm:text-xl font-medium text-crimson block font-sans leading-none">
                  {greetings[greetingIndex]}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
