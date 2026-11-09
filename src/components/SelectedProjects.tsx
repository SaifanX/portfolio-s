"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Trophy, Cpu, Eye } from "lucide-react";
import CanvasRevealEffect from "@/components/CanvasRevealEffect";
import TechText from "@/components/TechText";

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
    badge: "TechnoFest Hackathon 2026 State 2nd Place",
    description:
      "A pre-flight safety layer for drone pilots featuring geospatial dynamic geofencing, real-time ADS-B weather rasterization, and Gemini LLM-driven FAA/DGCA aviation compliance checks. Built with distributed reactive state synchronization.",
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
      "High-performance real-time 3D mathematical simulation engine exploring multi-agent Prisoner's Dilemma, Nash Equilibria, spatial cellular mutation vectors, and real-time payoff matrices running at 60 FPS in WebGL.",
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
      "Forensic-grade entity resolution platform across fragmented national registries (GSTIN, PAN, MCA) with real-time arbitration command centers and cross-state corporate fraud relationship graphs.",
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
    description: "100% private in-browser image-to-PDF compiler with integrated WebAssembly Tesseract OCR and zero-server retention.",
    tags: ["React", "TypeScript", "Tesseract.js", "Vite"],
    github: "https://github.com/SaifanX/FastPDF",
  },
  {
    title: "MBSYS & Hunar",
    subtitle: "Enterprise Web Systems",
    description: "Production architectural design studio and enterprise web platforms with real-time CMS serving paying live clients.",
    tags: ["Next.js", "Convex", "Tailwind CSS"],
    github: "https://github.com/SaifanX/mbsys-1",
  },
  {
    title: "Vault",
    subtitle: "NCERT Academic OS",
    description: "Mechanical Academic OS for NCERT Grade 9 with automated curriculum validation and offline-first reactive sandboxes.",
    tags: ["Convex", "EdTech", "React"],
    github: "https://github.com/SaifanX/Vault",
  },
  {
    title: "AirGuard Daemons",
    subtitle: "Distributed Aviation Workers",
    description: "High-throughput asynchronous cron daemons that continuously poll meteorological stations and validate flight zones.",
    tags: ["Node.js", "TypeScript", "Serverless", "APIs"],
    github: "https://github.com/SaifanX/Airguard-Daemons",
  },
];

export default function SelectedProjects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
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
            Portfolio Showcase
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Selected Projects
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          Architectural feats, hackathon wins, and production systems engineered under pressure.
        </p>
      </motion.div>

      {/* Flagship Projects Grid with Framer Motion Scroll Entrance */}
      <div className="space-y-8 mb-16">
        {flagshipProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl bg-[#0e0e14]/90 border border-zinc-800/90 p-5 sm:p-8 lg:p-10 hover:border-crimson/70 transition-all duration-300 overflow-hidden shadow-2xl"
          >
            {/* Ambient Background Gradient on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-30 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Aceternity & Clerk-style Canvas Reveal Effect (Interactive Dots Tracking Cursor) */}
            <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <CanvasRevealEffect
                animationSpeed={0.65}
                dotSize={3}
                spacing={16}
                colors={
                  project.title === "BBIE"
                    ? [
                        [6, 182, 212],
                        [59, 130, 246],
                        [255, 255, 255],
                      ]
                    : [
                        [225, 29, 72],
                        [251, 113, 133],
                        [255, 255, 255],
                      ]
                }
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              {/* Left Column: Number, TechText Title, Badge */}
              <div className="lg:max-w-xl space-y-4">
                <div className="flex items-center gap-3">
                  {/* Vibrant Red Project Number */}
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
                  {/* React Bits TechText for Flagship Titles */}
                  <div className="w-full max-w-[240px] xs:max-w-[300px] sm:max-w-md h-10 xs:h-12 sm:h-14 -ml-1">
                    <TechText
                      text={project.title}
                      fontWeight={900}
                      fontSize={38}
                      letterSpacing={-0.03}
                      align="left"
                      color="#ffffff"
                      accentColor="#e11d48"
                      dashLength={4}
                      dashGap={2}
                      strokeWidth={1.5}
                      reveal="letter"
                      specks={15}
                      clickKick={true}
                      draggable={true}
                      bounce={0.4}
                      sweep={true}
                      className="h-full"
                    />
                  </div>
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

              {/* Right Column: CTA Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px] w-full sm:w-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-6 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] active:scale-95 group/btn w-full sm:w-auto"
                  >
                    <span>Launch Live Engine</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181822] hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white font-semibold px-6 py-3 text-xs sm:text-sm transition-all active:scale-95 w-full sm:w-auto"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architectural Impact Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-12 sm:my-16 p-4 sm:p-8 rounded-3xl bg-[#0e0e14]/90 border border-zinc-800/80 shadow-2xl backdrop-blur-sm"
      >
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">15+</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">Shipped Repositories</div>
        </div>
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">2nd Place</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">TechnoFest 2026 Runner-Up</div>
        </div>
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">&lt;50ms</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">Reactive State Latency</div>
        </div>
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">100%</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">WASM / WebGL Compute</div>
        </div>
      </motion.div>

      {/* Secondary Projects: Editorial Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="border-t border-zinc-800/80 pt-12"
      >
        <div className="flex items-center gap-2 mb-8 text-zinc-400">
          <Cpu className="w-4 h-4 text-crimson" />
          <h3 className="text-sm font-mono uppercase tracking-widest font-bold text-zinc-300">
            More Shipped Architecture & Tools
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-[#0e0e14]/80 border border-zinc-800/80 hover:border-crimson/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-crimson transition-colors font-display">
                    {p.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-xs font-mono text-crimson font-medium mb-3">
                  {p.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/50">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
