"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Layers, Sparkles, Cpu } from "lucide-react";

const domains = [
  {
    name: "Languages & Foundations",
    icon: Terminal,
    skills: ["TypeScript", "Python", "JavaScript", "Kotlin", "WebAssembly", "HTML5", "Modern CSS"],
  },
  {
    name: "Frontend, 3D & Compute",
    icon: Layers,
    skills: ["React 19", "Next.js App Router", "Three.js", "WebGL Shaders", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    name: "Reactive Backends & Cloud",
    icon: Database,
    skills: ["Convex (Real-time)", "Supabase", "Node.js", "Netlify Serverless", "Vercel", "Distributed State"],
  },
  {
    name: "AI Systems & Automation",
    icon: Sparkles,
    skills: ["Google Gemini API", "Groq LPU", "Tesseract OCR", "Vitest", "CI/CD Automation", "AST Compilers"],
  },
];

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Clean Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-6 mb-12 sm:mb-16 gap-4"
      >
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-crimson font-bold block mb-2">
            Skills & Infrastructure
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Technical Arsenal
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          Curated tooling engineered for reactive speed, zero lag, and structural reliability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
