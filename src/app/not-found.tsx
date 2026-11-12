import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#07070a] text-zinc-100 flex items-center justify-center px-4 relative overflow-hidden selection:bg-crimson selection:text-white">
      {/* Ambient Crimson Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-crimson/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 p-8 sm:p-12 rounded-3xl bg-[#0e0e14]/90 border border-zinc-800 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-crimson/15 border border-crimson/40 text-crimson mb-2">
          <Compass className="w-7 h-7 animate-spin [animation-duration:8s]" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-crimson font-bold block">
            Error 404 · Vector Out of Bounds
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            Page Not Found
          </h1>
        </div>

        <p className="text-sm text-zinc-400 font-mono leading-relaxed">
          The requested system trajectory does not exist or has been decommissioned into the void.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-7 py-3 text-sm transition-all shadow-[0_0_25px_rgba(225,29,72,0.5)] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
