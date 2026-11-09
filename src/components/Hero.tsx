"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, ArrowDown, Code2, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between items-center pt-24 pb-14 px-4 sm:px-6 overflow-hidden">
      {/* Rich Atmospheric Crimson Glow & Ambient Lighting (No flat dead black) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] bg-crimson/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-crimson-dark/30 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-crimson/15 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern with subtle warm red/white tint */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Top Accolade Tag */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-crimson/50 bg-crimson/15 px-4 py-1.5 text-xs font-mono text-zinc-200 backdrop-blur-md shadow-[0_0_20px_rgba(225,29,72,0.3)] mb-4"
      >
        <Trophy className="w-3.5 h-3.5 text-crimson-glow" />
        <span className="font-semibold text-white">TechnoFest 2026 Winner (State Level)</span>
      </motion.div>

      {/* Central Portrait Container with Bold Crimson-Infused "SAIFAN" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-[390px] sm:max-w-[460px] md:max-w-[500px] h-[330px] sm:h-[390px] md:h-[430px] flex items-end justify-center mb-6"
      >
        {/* Dynamic Vibrant Backlight behind the portrait */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-crimson/40 via-crimson/10 to-transparent opacity-80 blur-2xl pointer-events-none" />

        {/* User Photo */}
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            src="/saifan.png"
            alt="Mohammed Saifan"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
            className="object-contain object-bottom select-none pointer-events-none filter drop-shadow-[0_15px_30px_rgba(225,29,72,0.35)]"
          />

          {/* Smooth dark vignette blend over the lower third */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#09090d] via-[#09090d]/85 to-transparent pointer-events-none" />

          {/* "SAIFAN" bold display title with rich crimson glow */}
          <div className="absolute -bottom-2 sm:bottom-0 inset-x-0 flex flex-col items-center justify-center pointer-events-none text-center">
            {/* Cursive cursive lead (Reference 2 style) */}
            <span className="font-serif italic text-crimson-glow text-xl sm:text-2xl drop-shadow-[0_2px_10px_rgba(225,29,72,0.9)] mb-0 select-none">
              Hello, I'm
            </span>

            {/* Giant display title */}
            <span className="font-display font-black tracking-tight text-6xl sm:text-7xl md:text-8xl uppercase text-white drop-shadow-[0_10px_35px_rgba(225,29,72,0.8)] leading-none select-none">
              SAIFAN
            </span>

            <span className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-zinc-300 mt-1 select-none">
              Mohammed Saifan
            </span>
          </div>
        </div>
      </motion.div>

      {/* Sub-headline, Rigor Statement & Metric Badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 max-w-2xl mx-auto text-center space-y-3 px-4"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white font-display">
          Solutions Architect & Full-Stack Systems Engineer
        </h1>
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
          15-year-old developer based in Bangalore. Building high-performance reactive engines, 3D simulations, and mission-critical AI workflows under real-world pressure.
        </p>

        {/* High-Impact Stat Metrics (Reference 2 inspired with bold Crimson numbers) */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-zinc-200">
          <div className="flex items-center gap-2 bg-[#14141c] border border-crimson/30 hover:border-crimson transition-colors rounded-xl px-4 py-2 shadow-lg">
            <span className="text-crimson-glow font-extrabold text-base sm:text-lg">15+</span>
            <span className="text-zinc-300 text-xs">Shipped Repos</span>
          </div>
          <div className="flex items-center gap-2 bg-[#14141c] border border-crimson/30 hover:border-crimson transition-colors rounded-xl px-4 py-2 shadow-lg">
            <span className="text-crimson-glow font-extrabold text-base sm:text-lg">State Winner</span>
            <span className="text-zinc-300 text-xs">TechnoFest 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-[#14141c] border border-crimson/30 hover:border-crimson transition-colors rounded-xl px-4 py-2 shadow-lg">
            <MapPin className="w-4 h-4 text-crimson-glow" />
            <span className="text-zinc-300 text-xs">Bangalore, IN</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-7 py-3 text-xs sm:text-sm transition-all shadow-[0_0_30px_rgba(225,29,72,0.6)] active:scale-95"
          >
            <span>Explore Flagship Systems</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          <a
            href="https://github.com/SaifanX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#15151e] border border-zinc-700 hover:border-crimson/60 text-zinc-100 font-medium px-6 py-3 text-xs sm:text-sm transition-all hover:bg-[#1a1a24] shadow-md"
          >
            <Code2 className="w-4 h-4 text-crimson" />
            <span>GitHub / SaifanX</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
