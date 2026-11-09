"use client";

import { useState } from "react";
import { Copy, Check, Github, Linkedin, Mail } from "lucide-react";

export default function ConversionFooter() {
  const [copied, setCopied] = useState(false);
  const email = "saifanmohammad39@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Safe dynamic import of confetti to prevent Webpack CJS bundling issues
      try {
        const confettiModule = await import("canvas-confetti");
        const confetti = confettiModule.default || confettiModule;
        if (typeof confetti === "function") {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.85 },
            colors: ["#e11d48", "#ffffff", "#ff2e63"],
          });
        }
      } catch {
        // Fallback silently if canvas-confetti is unavailable
      }

      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Clean Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-crimson font-bold block mb-2">
            Direct Line & Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Let's Work Together
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          Open for Tier-1 engineering internships, high-impact freelance contracts, and research advisory.
        </p>
      </div>

      {/* Main Conversion Callout Box with Rich Crimson Gradient */}
      <div className="rounded-3xl bg-gradient-to-br from-[#1c1218] via-[#13131c] to-[#0c0c12] border border-crimson/40 p-8 sm:p-14 relative overflow-hidden mb-16 shadow-[0_10px_40px_rgba(225,29,72,0.15)]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <blockquote className="text-lg sm:text-2xl font-semibold text-white leading-snug font-display">
            "Most developers build static websites that look good. I architect high-performance, reactive engines that scale, compute, and perform under real-world pressure."
          </blockquote>
          <p className="font-mono text-xs text-crimson font-semibold uppercase tracking-widest">
            — Mohammed Saifan · Bangalore, India
          </p>

          {/* Interactive Email Copy Pill */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopy}
              className="group flex items-center gap-3 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-7 py-4 text-sm transition-all shadow-[0_0_30px_rgba(225,29,72,0.5)] active:scale-95"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>{email}</span>
              {copied ? (
                <Check className="w-4 h-4 text-white animate-in fade-in zoom-in" />
              ) : (
                <Copy className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              )}
            </button>

            {copied && (
              <span className="text-xs font-mono text-emerald-400 font-medium animate-in fade-in">
                ✓ Copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Channels & Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SaifanX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-crimson transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub / SaifanX</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saifanx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-crimson transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn / saifanx</span>
          </a>
        </div>

        <p>© 2026 Mohammed Saifan. Engineered with precision.</p>
      </div>
    </footer>
  );
}
