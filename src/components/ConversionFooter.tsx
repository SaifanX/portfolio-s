"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Github, Linkedin, Mail, Calendar, FileText, ArrowUpRight } from "lucide-react";

export default function ConversionFooter() {
  const [copied, setCopied] = useState(false);
  const email = "saifanmohammad39@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Safe dynamic import of confetti
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
    <footer id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
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
            Direct Line & Collaboration
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            Let&apos;s Work Together
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-300 max-w-xs sm:text-right">
          Open for Tier-1 engineering internships, high-impact freelance contracts, and research advisory.
        </p>
      </motion.div>

      {/* Main Conversion Callout Box with Multi-Option CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl bg-gradient-to-br from-[#1c1218] via-[#13131c] to-[#0c0c12] border border-crimson/40 p-8 sm:p-14 relative overflow-hidden mb-16 shadow-[0_10px_40px_rgba(225,29,72,0.15)]"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <blockquote className="text-lg sm:text-2xl font-semibold text-white leading-snug font-display">
            &ldquo;I build and ship real products. If you have a problem worth solving, let&apos;s talk.&rdquo;
          </blockquote>
          <p className="font-mono text-xs text-crimson font-semibold uppercase tracking-widest">
            — Mohammed Saifan · Bangalore, India
          </p>

          {/* High-Conversion Multi-Action Suite */}
          <div className="pt-4 flex flex-wrap items-center gap-3.5">
            {/* Primary Option 1: Direct 30-Min Call Booking */}
            <a
              href="https://cal.com/saifan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-6 py-3.5 text-xs sm:text-sm transition-all shadow-[0_0_30px_rgba(225,29,72,0.5)] active:scale-95"
            >
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <span>Schedule 30-Min Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Option 2: Copy Email */}
            <button
              onClick={handleCopy}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 font-semibold px-5 py-3.5 text-xs sm:text-sm transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-crimson shrink-0" />
              <span className="truncate">{email}</span>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-400 shrink-0 group-hover:text-white transition-colors" />
              )}
            </button>

            {/* Option 3: Download One-Page CV / Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mohammed_Saifan_CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-semibold px-5 py-3.5 text-xs sm:text-sm transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Download CV (PDF)</span>
            </a>

            {copied && (
              <span className="text-xs font-mono text-emerald-400 font-medium animate-in fade-in w-full sm:w-auto">
                ✓ Copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </motion.div>

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

        <p className="text-zinc-400">
          © 2026 Mohammed Saifan. Engineered with precision.
        </p>
      </div>
    </footer>
  );
}
