import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github, Trophy, Clock, AlertTriangle, Cpu, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AirGuard Case Study — Mohammed Saifan",
  description:
    "Engineering case study of AirGuard: autonomous pre-flight UAV avionics and AI co-pilot. Built in 24 hours, State 2nd Place at TechnoFest Hackathon 2026.",
};

export default function AirGuardCaseStudy() {
  return (
    <main className="min-h-screen bg-[#07070a] text-zinc-100 selection:bg-crimson selection:text-white pb-24">
      {/* Ambient Crimson Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-crimson/15 blur-[160px] pointer-events-none rounded-full z-0" />
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Nav */}
      <header className="relative z-20 border-b border-zinc-800/80 bg-[#07070a]/80 backdrop-blur-md px-4 sm:px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-crimson" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SaifanX/Airguard-Daemons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inspect Code</span>
            </a>

            <a
              href="https://airguard-1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-crimson hover:bg-crimson-glow text-white text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)]"
            >
              <span>Launch Live Engine</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 space-y-12">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-xs font-mono text-zinc-100 font-semibold shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-crimson" />
              TechnoFest 2026 State 2nd Place
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              Built in 24 Hours
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            AirGuard: Autonomous Pre-Flight UAV Avionics & AI Co-Pilot
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
            How a 24-hour sprint created an airspace pre-flight safety layer placed 2nd across Karnataka out of 100+ engineering teams.
          </p>
        </div>

        {/* Hero Screenshot */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
          <Image
            src="/screenshots/airguard.png"
            alt="AirGuard Geofencing and Avionics Interface"
            fill
            priority
            quality={90}
            className="object-cover object-top"
          />
        </div>

        {/* Executive Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0e0e14] border border-zinc-800">
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white">24h</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase">Hackathon Sprint</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-crimson">2nd</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase">State Ranking</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white">&lt;50ms</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase">Sync Latency</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">100+</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase">Competing Teams</div>
          </div>
        </div>

        {/* 1. The Problem */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-crimson font-mono">01.</span> The Real-World Problem
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            Civilian drone pilots navigate an unforgiving regulatory landscape. In India, DGCA Digital Sky mandates strict no-fly zones (NFZs), airport buffer perimeters, and dynamic meteorological clearances before a motor can arm.
          </p>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            Pilots typically cross-reference 3 separate websites: PDF NOTAM circulars, third-party weather apps, and government map coordinates. Under pre-flight time pressure, miscalculating an airfield radius by 500 meters results in immediate hardware confiscation or criminal prosecution.
          </p>
        </section>

        {/* 2. The Solution & Architecture */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-crimson font-mono">02.</span> System Architecture
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            AirGuard unites real-time geospatial geofencing, meteorological telemetry, and Google Gemini LLM regulatory reasoning into a single zero-latency flight deck.
          </p>

          {/* Architecture Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <Layers className="w-5 h-5 text-crimson" />
              <h3 className="font-bold text-white text-sm">Geospatial UI</h3>
              <p className="text-xs text-zinc-400">
                React 19 & Leaflet dynamic vector polygons with GPS geofencing & airspace zone rasterization.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <Cpu className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Reactive State Engine</h3>
              <p className="text-xs text-zinc-400">
                Convex reactive backend distributing flight parameters & telemetry updates under 50ms.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="font-bold text-white text-sm">Gemini AI Co-Pilot</h3>
              <p className="text-xs text-zinc-400">
                Structured prompt pipeline parsing pilot flight paths against Indian DGCA & FAA civil codes.
              </p>
            </div>
          </div>
        </section>

        {/* 3. What Broke During the Hackathon */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-crimson font-mono">03.</span> What Broke at 2:00 AM & How I Fixed It
          </h2>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-zinc-200">
              <span className="font-bold text-amber-300">The 2:00 AM Crisis:</span>
              <p>
                During live testing, continuous ADS-B meteorological radar requests quickly exhausted our upstream API rate limits. Simultaneously, Leaflet polygon re-renders on mousemove tanked browser framerates to 14 FPS.
              </p>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            <strong>The Pivot:</strong> I refactored the pipeline into an asynchronous polling worker inside Convex, caching weather vectors on a 15-minute sliding TTL. On the client side, I isolated polygon boundaries with spatial debouncing and WebGL canvas overlay layers, immediately bringing framerates back to a steady 60 FPS.
          </p>
        </section>

        {/* 4. What I Would Change in V2 */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-crimson font-mono">04.</span> Retrospective: What I Would Change
          </h2>
          <ul className="space-y-2 text-zinc-300 text-sm sm:text-base list-disc list-inside">
            <li>
              <strong>Hardware LoRaWAN Fallback:</strong> In dense forest or rural flight areas where 4G cellular drops, integrate a physical 868MHz LoRa mesh direct to an onboard ESP32 controller.
            </li>
            <li>
              <strong>Offline-First WASM Map Tiles:</strong> Pre-cache vectorized spatial vector tiles via SQLite in WASM so pilots can plan missions in remote wilderness with zero connectivity.
            </li>
          </ul>
        </section>

        {/* Next Steps CTA */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-mono transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-crimson" />
            <span>Return to Flagship Projects</span>
          </Link>

          <a
            href="https://airguard-1.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-crimson hover:bg-crimson-glow text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all"
          >
            <span>Launch AirGuard Live</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </article>
    </main>
  );
}
