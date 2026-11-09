"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Layers, Sparkles } from "lucide-react";

const domains = [
  {
    name: "Languages & Foundations",
    icon: Terminal,
    skills: ["TypeScript", "Python", "JavaScript", "Kotlin", "HTML5", "Modern CSS"],
  },
  {
    name: "Frontend, 3D & Simulation",
    icon: Layers,
    skills: ["React 19", "Next.js App Router", "Three.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    name: "Reactive Backends & Cloud",
    icon: Database,
    skills: ["Convex (Real-time)", "Supabase", "Node.js", "Netlify Serverless", "Vercel"],
  },
  {
    name: "AI Workflows & Precision",
    icon: Sparkles,
    skills: ["Google Gemini API", "Groq LPU", "Tesseract OCR", "Vitest", "Git Automation"],
  },
];

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Clean Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-crimson font-bold block mb-2">
            Skills & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Technical Arsenal
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          Curated tooling engineered for reactive speed, zero lag, and structural reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-[#121218] border border-zinc-800 p-6 flex flex-col justify-between shadow-xl hover:border-crimson/50 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#181824] border border-zinc-700/80 flex items-center justify-center text-crimson mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display mb-4">
                  {domain.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[#181822] border border-zinc-700/80 px-3 py-1.5 text-xs font-mono text-zinc-200 hover:text-white hover:border-crimson/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
