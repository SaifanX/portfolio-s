"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Trophy, Cpu, Eye } from "lucide-react";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  accent: string;
}

const flagshipProjects: Project[] = [
  {
    number: "01",
    title: "AirGuard",
    subtitle: "Autonomous Pre-Flight UAV Avionics & AI Co-Pilot",
    badge: "TechnoFest Hackathon 2026 State Winner",
    description:
      "A pre-flight safety layer for drone pilots featuring geospatial dynamic geofencing, real-time weather analytics, and LLM-driven aviation compliance checks.",
    stack: ["React", "TypeScript", "Leaflet", "Gemini API", "Convex"],
    liveUrl: "https://airguard-1.netlify.app",
    githubUrl: "https://github.com/SaifanX/Airguard-Daemons",
    accent: "from-crimson/25 via-crimson/5 to-transparent",
  },
  {
    number: "02",
    title: "Strategos",
    subtitle: "Game Theory & Evolutionary Dynamics 3D Engine",
    badge: "Algorithmic Simulation Lab",
    description:
      "High-performance real-time 3D mathematical simulation engine exploring multi-agent Prisoner's Dilemma, Nash Equilibria, and payoff mutation dynamics.",
    stack: ["React 19", "TypeScript", "Three.js", "Convex", "Vitest"],
    liveUrl: "https://strategos1.netlify.app",
    githubUrl: "https://github.com/SaifanX/Strategos",
    accent: "from-crimson/25 via-crimson/5 to-transparent",
  },
  {
    number: "03",
    title: "BBIE",
    subtitle: "Enterprise Intelligence & Forensic Entity Registry",
    badge: "AI for Bharat Hackathon Finalist",
    description:
      "Forensic-grade entity resolution platform across fragmented national registries (GSTIN, PAN, MCA) with real-time arbitration command centers.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://bbie-ai4bharat.netlify.app",
    githubUrl: "https://github.com/SaifanX/bbie-prototype",
    accent: "from-cyan-500/20 to-transparent",
  },
];

const secondaryProjects = [
  {
    title: "FastPDF",
    subtitle: "Client-Side Document Engine",
    description: "100% private in-browser image-to-PDF compiler with integrated Tesseract OCR.",
    tags: ["React", "TypeScript", "Tesseract.js", "Vite"],
    github: "https://github.com/SaifanX/FastPDF",
  },
  {
    title: "Omnibundler-AI",
    subtitle: "Bidirectional Compiler",
    description: "AI-native bundler that compresses React apps into single-file HTML & extracts components.",
    tags: ["TypeScript", "Compiler", "React AST"],
    github: "https://github.com/SaifanX/Omnibundler-AI",
  },
  {
    title: "MBSYS & Hunar",
    subtitle: "Enterprise Web Systems",
    description: "Production architectural design studio and enterprise web platforms serving live clients.",
    tags: ["Next.js", "Convex", "Tailwind CSS"],
    github: "https://github.com/SaifanX/mbsys-1",
  },
  {
    title: "Vault",
    subtitle: "NCERT Academic OS",
    description: "Mechanical Academic OS for NCERT Grade 9 with automated curriculum validation.",
    tags: ["Convex", "EdTech", "React"],
    github: "https://github.com/SaifanX/Vault",
  },
];

export default function SelectedProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Clean Editorial Header (No brackets or hacker slashes) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-crimson font-bold block mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Selected Projects
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          Architectural feats, hackathon wins, and production systems engineered under pressure.
        </p>
      </div>

      {/* Flagship Projects Grid */}
      <div className="space-y-8 mb-16">
        {flagshipProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-3xl bg-[#121218] border border-zinc-800 p-6 sm:p-10 hover:border-crimson/60 transition-all duration-300 overflow-hidden shadow-2xl"
          >
            {/* Ambient Background Gradient on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              {/* Left Column: Number, Title, Badge */}
              <div className="lg:max-w-xl space-y-4">
                <div className="flex items-center gap-3">
                  {/* Vibrant Red Project Number (Reference 2 style) */}
                  <span className="text-3xl sm:text-4xl font-mono font-black text-crimson">
                    {project.number}
                  </span>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/20 border border-crimson/50 px-3.5 py-1 text-xs font-mono text-zinc-100 font-semibold shadow-sm">
                      <Trophy className="w-3.5 h-3.5 text-crimson-glow" />
                      {project.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display group-hover:text-crimson transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-zinc-400 mt-1 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#181822] border border-zinc-700/80 px-3 py-1 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Direct Launch Actions */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 pt-4 lg:pt-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-6 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] group/btn"
                  >
                    <span>Launch Live Engine</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#181822] border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white px-5 py-3 text-xs sm:text-sm transition-all"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>Inspect Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary Systems Bento Grid */}
      <div className="mt-12">
        <h3 className="text-base font-bold uppercase tracking-wider text-crimson font-mono mb-6">
          More Shipped Architecture & Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryProjects.map((p) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-[#121218] border border-zinc-800 p-6 hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold text-white group-hover:text-crimson transition-colors">
                    {p.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs font-mono text-zinc-400 mb-2 font-medium">{p.subtitle}</p>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-zinc-400 bg-[#171722] px-2 py-0.5 rounded border border-zinc-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
