"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Cpu, Briefcase, Layers, ArrowRight, Clock, Quote } from "lucide-react";
import CanvasRevealEffect from "@/components/CanvasRevealEffect";
import TechText from "@/components/TechText";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  badge?: string;
  badgeType?: "trophy" | "client" | "lab";
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  accent: string;
  image: string;
  imageAlt: string;
}

const flagshipProjects: Project[] = [
  {
    number: "01",
    title: "AirGuard",
    subtitle: "Autonomous Pre-Flight UAV Avionics & AI Co-Pilot",
    badge: "TechnoFest Hackathon 2026 State 2nd Place",
    badgeType: "trophy",
    caseStudyUrl: "/airguard",
    description:
      "A pre-flight safety layer for drone pilots featuring geospatial dynamic geofencing, real-time ADS-B weather rasterization, and Gemini LLM-driven FAA/DGCA aviation compliance checks. Built in 24 hours, placing 2nd out of 100+ teams across Karnataka.",
    stack: ["React", "TypeScript", "Leaflet", "Gemini API", "Convex"],
    liveUrl: "https://airguard-1.netlify.app",
    githubUrl: "https://github.com/SaifanX/Airguard-Daemons",
    accent: "from-crimson/25 via-crimson/5 to-transparent",
    image: "/screenshots/airguard.png",
    imageAlt: "AirGuard Geospatial Geofencing & Flight Deck UI",
  },
  {
    number: "02",
    title: "Strategos",
    subtitle: "Game Theory & Evolutionary Dynamics 3D Engine",
    badge: "Algorithmic Simulation Lab",
    badgeType: "lab",
    description:
      "High-performance real-time 3D mathematical simulation engine exploring multi-agent Prisoner's Dilemma, Nash Equilibria, spatial cellular mutation vectors, and real-time payoff matrices running in WebGL with zero backend latency.",
    stack: ["React 19", "TypeScript", "Three.js", "Convex", "Vitest"],
    liveUrl: "https://strategos1.netlify.app",
    githubUrl: "https://github.com/SaifanX/Strategos",
    accent: "from-crimson/25 via-crimson/5 to-transparent",
    image: "/screenshots/strategos.png",
    imageAlt: "Strategos 3D Mathematical WebGL Simulation Engine",
  },
  {
    number: "03",
    title: "BBIE",
    subtitle: "Enterprise Intelligence & Forensic Entity Registry",
    badge: "AI for Bharat Hackathon Finalist",
    badgeType: "trophy",
    description:
      "Forensic-grade entity resolution platform across fragmented national registries (GSTIN, PAN, MCA) with real-time arbitration command centers and cross-state corporate fraud relationship graphs. Finalist at AI for Bharat 2026.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://bbie-ai4bharat.netlify.app",
    githubUrl: "https://github.com/SaifanX/bbie-prototype",
    accent: "from-cyan-500/20 to-transparent",
    image: "/screenshots/bbie.png",
    imageAlt: "BBIE Enterprise Intelligence Resolution Dashboard",
  },
  {
    number: "04",
    title: "MBSYS & Hunar",
    subtitle: "Enterprise Web Systems for Commercial Clients",
    badge: "Live Client Infrastructure",
    badgeType: "client",
    description:
      "Production platforms with real-time CMS serving 2 live business clients in Bangalore with 99.9% uptime. Features high-performance architecture, dynamic GPU-accelerated canvas animations, and synchronized brand handoffs.",
    stack: ["Next.js", "React 19", "Convex", "Tailwind CSS"],
    liveUrl: "https://mbsys.co.in",
    githubUrl: "https://github.com/SaifanX/mbsys-1",
    accent: "from-rose-500/20 to-transparent",
    image: "/screenshots/mbsys.png",
    imageAlt: "MBSYS Production Platform for Enterprise Clients",
  },
  {
    number: "05",
    title: "Zuzu Minis",
    subtitle: "Boutique E-Commerce & Real-Time Retail Platform",
    badge: "Live E-Commerce Client",
    badgeType: "client",
    description:
      "High-conversion boutique e-commerce platform built to bridge physical storefront retail with digital commerce. Features real-time inventory synchronization, instant cart state, fluid motion design, and mobile-first checkout.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Convex", "GSAP"],
    liveUrl: "https://zuzuminis.com",
    accent: "from-crimson/25 via-crimson/10 to-transparent",
    image: "/screenshots/zuzuminis.png",
    imageAlt: "Zuzu Minis Boutique E-Commerce Platform",
  },
];

const secondaryProjects = [
  {
    title: "ESP32 UAV Flight Avionics",
    subtitle: "Hardware Layer · Drone Systems",
    description:
      "Silicon-to-UI hardware architecture: ESP32 micro-controller telemetry firmware with MPU6050 IMU attitude stabilization, fail-safe triggers, and low-latency WebSocket streaming to web ground stations.",
    tags: ["ESP32", "C++", "FreeRTOS", "Avionics", "I2C", "Hardware"],
    github: "https://github.com/SaifanX/Airguard-Daemons",
    highlight: true,
  },
  {
    title: "FastPDF",
    subtitle: "Client-Side Document Engine",
    description:
      "100% private in-browser image-to-PDF compiler with integrated WebAssembly Tesseract OCR and zero-server retention.",
    tags: ["React", "TypeScript", "Tesseract.js", "Vite"],
    github: "https://github.com/SaifanX/FastPDF",
  },
  {
    title: "Vault",
    subtitle: "NCERT Academic OS",
    description:
      "Mechanical Academic OS for NCERT Grade 9 with automated curriculum validation and offline-first reactive sandboxes.",
    tags: ["Convex", "EdTech", "React"],
    github: "https://github.com/SaifanX/Vault",
  },
  {
    title: "Omnibundler AI",
    subtitle: "Bidirectional AST Transformer",
    description:
      "AI-native bidirectional transformer: bundle React apps into single-file HTML & extract HTML into reusable React components.",
    tags: ["TypeScript", "Babel", "AST", "React"],
    github: "https://github.com/SaifanX/Omnibundler-AI",
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
          Proven outcomes, hackathon wins, and production systems engineered under pressure.
        </p>
      </motion.div>

      {/* Flagship Projects Grid (Dual Column with Screenshots & Clean Visual Flow) */}
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

            {/* Canvas Reveal Interactive Particle Dots */}
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

            {/* Two Column Layout: Project Info Left + Screenshot Preview Right */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Project Info & Actions */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Vibrant Red Project Number */}
                  <span className="text-3xl sm:text-4xl font-mono font-black text-crimson">
                    {project.number}
                  </span>

                  {/* Badge */}
                  {project.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono font-semibold shadow-sm bg-crimson/15 border border-crimson/40 text-zinc-100">
                      {project.badgeType === "client" ? (
                        <Briefcase className="w-3.5 h-3.5 text-crimson-glow" />
                      ) : project.badgeType === "lab" ? (
                        <Layers className="w-3.5 h-3.5 text-crimson-glow" />
                      ) : (
                        <Trophy className="w-3.5 h-3.5 text-crimson-glow" />
                      )}
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

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-1">
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

                {/* CTA Buttons & Cold-Start Notice */}
                <div className="space-y-2 pt-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-5 py-2.5 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] active:scale-95 group/btn"
                      >
                        <span>{project.title === "Zuzu Minis" ? "Launch Store" : "Launch Live Engine"}</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    {project.caseStudyUrl && (
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-600/70 text-white font-semibold px-5 py-2.5 text-xs sm:text-sm transition-all group/cs"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-4 h-4 text-crimson group-hover/cs:translate-x-0.5 transition-transform" />
                      </Link>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181822] hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white font-semibold px-5 py-2.5 text-xs sm:text-sm transition-all active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Code</span>
                      </a>
                    )}
                  </div>

                  {project.liveUrl && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Hosted on Netlify / Cloudflare — may take 3-5s for cold start.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Screenshot Preview */}
              <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-950/70 shadow-2xl group-hover:border-crimson/50 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  quality={85}
                  className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VERIFIED CLIENT SOCIAL PROOF: Consistent Dark-Crimson Palette */}
      <div className="my-14 space-y-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <Briefcase className="w-4 h-4 text-crimson" />
          <h3 className="text-xs uppercase font-mono tracking-widest text-crimson font-bold">
            Verified Client Endorsements & Production Deployments
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Review 1: MBSYS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#160d13] via-[#0f0f16] to-[#0a0a0f] border border-crimson/30 hover:border-crimson/60 relative overflow-hidden shadow-2xl flex flex-col justify-between gap-6 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/10 blur-[80px] pointer-events-none rounded-full" />
            <Quote className="absolute right-4 bottom-4 w-28 h-28 text-crimson/5 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-[11px] font-mono text-rose-300 font-bold">
                <Briefcase className="w-3.5 h-3.5 text-crimson-glow" />
                Enterprise Infrastructure
              </span>

              <blockquote className="text-sm sm:text-base font-medium text-white italic leading-relaxed font-display">
                &ldquo;Saifan delivered our enterprise platform on time and with zero downtime. The architecture is fast, reliable, and exceptionally engineered.&rdquo;
              </blockquote>

              <p className="text-xs font-mono text-zinc-400">
                — <span className="text-zinc-100 font-bold">MBSYS Enterprise Solutions</span> · Bangalore, India
              </p>
            </div>

            <div className="relative z-10 pt-2 border-t border-zinc-800/80">
              <a
                href="https://mbsys.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-crimson border border-zinc-700/80 hover:border-crimson text-white text-xs font-mono font-bold transition-all shadow-sm shrink-0"
              >
                <span>Visit Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Review 2: Zuzu Minis */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#160d13] via-[#0f0f16] to-[#0a0a0f] border border-crimson/30 hover:border-crimson/60 relative overflow-hidden shadow-2xl flex flex-col justify-between gap-6 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/10 blur-[80px] pointer-events-none rounded-full" />
            <Quote className="absolute right-4 bottom-4 w-28 h-28 text-crimson/5 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-[11px] font-mono text-rose-300 font-bold">
                <Briefcase className="w-3.5 h-3.5 text-crimson-glow" />
                Retail E-Commerce
              </span>

              <blockquote className="text-sm sm:text-base font-medium text-white italic leading-relaxed font-display">
                &ldquo;Saifan built our e-commerce platform with incredible speed and fluidity. The inventory sync and checkout flow feel truly top-tier.&rdquo;
              </blockquote>

              <p className="text-xs font-mono text-zinc-400">
                — <span className="text-zinc-100 font-bold">Zuzu Minis Store</span> · Bangalore, India
              </p>
            </div>

            <div className="relative z-10 pt-2 border-t border-zinc-800/80">
              <a
                href="https://zuzuminis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-crimson hover:bg-crimson-glow text-white text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] shrink-0"
              >
                <span>Visit Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Architectural Impact Metrics Bar: 3 Live Clients & Outranked 100+ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-12 sm:my-16 p-4 sm:p-8 rounded-3xl bg-[#0e0e14]/90 border border-zinc-800/80 shadow-2xl backdrop-blur-sm"
      >
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">3</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Live Client Platforms
          </div>
        </div>
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">2nd Place</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">
            TechnoFest 2026 Runner-Up
          </div>
        </div>
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">100+</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Teams Competed Across State
          </div>
        </div>
        <div className="space-y-1 p-2.5 sm:p-4 border-l-2 border-crimson">
          <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-black text-white">Silicon to UI</div>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Hardware, WebGL & AI Systems
          </div>
        </div>
      </motion.div>

      {/* Secondary Projects: Editorial Grid (Including ESP32 Hardware Drone Systems) */}
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
            Hardware Systems & Shipped Tools
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
              className={`group p-6 rounded-2xl bg-[#0e0e14]/80 border transition-all duration-300 flex flex-col justify-between ${
                p.highlight
                  ? "border-crimson/50 hover:border-crimson shadow-[0_0_25px_rgba(225,29,72,0.15)]"
                  : "border-zinc-800/80 hover:border-crimson/60"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-crimson transition-colors font-display">
                      {p.title}
                    </h4>
                    {p.highlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-crimson/20 border border-crimson/50 text-crimson font-bold">
                        SILICON
                      </span>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
