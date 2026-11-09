"use client";

import { motion } from "framer-motion";
import { Search, Compass, Cpu, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discover & Formulate",
    icon: Search,
    description:
      "Deconstruct requirements into fundamental mathematical and physical constraints. Zero fluff, defining strict bounds before a single line of code.",
  },
  {
    step: "02",
    title: "Architect Reactive Schema",
    icon: Compass,
    description:
      "Design real-time data schemas (Convex / Supabase), mutation contracts, and asynchronous event streams built for concurrent durability.",
  },
  {
    step: "03",
    title: "Model & Simulate",
    icon: Cpu,
    description:
      "Prototype interactive 3D simulations (Three.js) and integrate AI reasoning agents (Gemini / Groq) to stress-test system dynamics under load.",
  },
  {
    step: "04",
    title: "Engineer With Rigor",
    icon: Code2,
    description:
      "Build modular, strictly-typed frontends (Next.js / TypeScript) with sub-50ms UI feedback and resilient client-side state transitions.",
  },
  {
    step: "05",
    title: "Ship, Win & Scale",
    icon: Rocket,
    description:
      "Deploy with automated CI/CD to Netlify and Vercel. From winning 24-hour hackathons to delivering enterprise-grade client platforms.",
  },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Clean Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-crimson font-bold block mb-2">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Work Process
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          How I take complex ideas from mathematical blueprint to production systems.
        </p>
      </div>

      {/* 5-Step Process Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {processSteps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-[#121218] border border-zinc-800 p-6 flex flex-col justify-between hover:border-crimson/60 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-black text-crimson">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#181824] border border-zinc-700/80 flex items-center justify-center text-zinc-300 group-hover:text-crimson group-hover:border-crimson/50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800 flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-crimson" />
                Phase {s.step} Complete
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
