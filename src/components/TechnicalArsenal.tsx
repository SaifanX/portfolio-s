"use client";

import { motion } from "framer-motion";
import { Terminal, Award, Cpu, MapPin, Sparkles } from "lucide-react";

export default function TechnicalArsenal() {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-zinc-800/80">
      {/* Anchor for backward compatibility with #arsenal links */}
      <span id="arsenal" className="absolute -top-24 opacity-0 pointer-events-none" />

      {/* Atmospheric Background Crimson Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] bg-crimson/10 blur-[130px] pointer-events-none rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 rounded-3xl bg-[#0e0e14]/90 border border-zinc-800/90 p-7 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 mb-4 text-crimson font-mono text-xs uppercase tracking-widest font-bold">
          <Terminal className="w-4 h-4" />
          <span>Profile & Philosophy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase mb-8">
          Who I Am
        </h2>

        <div className="space-y-6 text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
          <p className="border-l-2 border-crimson pl-4 sm:pl-6 text-white font-medium">
            I&apos;m Saifan — a 15-year-old developer and systems builder from Bangalore.
            I build full-stack web products with React, TypeScript, and Convex, and
            I work with ESP32 hardware and drone systems at the hardware layer.
          </p>

          <p className="text-zinc-400 pl-4 sm:pl-6">
            State Runner-Up at TechnoFest 2026. Finalist at AI for Bharat.
            Live client platforms for local businesses. Currently open for
            high-impact internships and freelance contracts.
          </p>
        </div>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-zinc-800/80">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300">
            <MapPin className="w-4 h-4 text-crimson shrink-0" />
            <span>Bangalore, IN</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Award className="w-4 h-4 text-crimson shrink-0" />
            <span>TechnoFest 2nd</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>2 Live Clients</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Cpu className="w-4 h-4 text-crimson shrink-0" />
            <span>ESP32 & Drones</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
