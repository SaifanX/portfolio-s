"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

// X (formerly Twitter) Icon SVG
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Accessible Typewriter Text Effect Component
function TypewriterText({
  text,
  delay = 0,
  speed = 40,
  className = "",
  showCursor = false,
}: {
  text: string;
  startTrigger?: boolean;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        charIndex++;
        if (charIndex <= text.length) {
          setDisplayedText(text.slice(0, charIndex));
        } else {
          setIsDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      <span>{displayedText || text.slice(0, 1)}</span>
      {showCursor && !isDone && (
        <span className="inline-block w-[2px] h-[0.9em] bg-crimson ml-1 animate-pulse align-middle" />
      )}
    </span>
  );
}

interface HeroProps {
  isReady?: boolean;
}

export default function Hero({ isReady = true }: HeroProps) {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/SaifanX",
      icon: (props: { className?: string }) => <Github {...props} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saifanx/",
      icon: (props: { className?: string }) => <Linkedin {...props} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/saifaan_07",
      icon: (props: { className?: string }) => <Instagram {...props} />,
    },
    {
      name: "X",
      href: "https://x.com/saifanx07",
      icon: (props: { className?: string }) => <XIcon {...props} />,
    },
    {
      name: "Email",
      href: "mailto:saifanmohammad39@gmail.com",
      icon: (props: { className?: string }) => <Mail {...props} />,
    },
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-24 xs:pt-28 sm:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-10 overflow-hidden font-sans">
      {/* Rich Atmospheric Crimson Glow & Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[750px] lg:w-[1100px] h-[300px] sm:h-[480px] bg-crimson/20 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[280px] sm:w-[400px] h-[240px] sm:h-[340px] bg-crimson-dark/30 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[280px] sm:w-[450px] h-[200px] sm:h-[300px] bg-crimson/15 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Central Composition: Monumental Typewriter SAIFAN + Cutout Portrait */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-auto">
        <div className="relative w-full py-4 md:py-0 md:h-[350px] lg:h-[390px] xl:h-[420px] flex items-center md:items-end justify-center select-none">
          {/* Monumental White Display Text (Scales down to 18vw on mobile) */}
          <div className="relative md:absolute md:inset-0 flex items-center justify-center z-10 pointer-events-none text-center">
            <h1 className="hero-name font-display font-black tracking-tight text-[18vw] md:text-[9.5rem] lg:text-[12rem] xl:text-[14rem] uppercase text-white leading-none drop-shadow-[0_15px_40px_rgba(225,29,72,0.35)]">
              <TypewriterText
                text="SAIFAN"
                delay={150}
                speed={50}
              />
            </h1>
          </div>

          {/* Portrait Image (Hidden on mobile < 768px, visible on desktop behind foreground text) */}
          <motion.div
            initial={{ y: 90 }}
            animate={isReady ? { y: 0 } : { y: 90 }}
            transition={{
              duration: 0.95,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="hero-portrait hidden md:flex relative z-20 md:w-[350px] lg:w-[390px] xl:w-[420px] h-full items-end justify-center pointer-events-none"
          >
            {/* Backlight Glow around the portrait */}
            <motion.div
              initial={{ opacity: 0.4 }}
              animate={isReady ? { opacity: 0.85 } : { opacity: 0.4 }}
              transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 bg-gradient-to-t from-crimson/35 via-transparent to-transparent blur-2xl pointer-events-none"
            />

            <Image
              src="/saifan.png"
              alt="Mohammed Saifan"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              priority
              quality={85}
              className="object-contain object-bottom select-none pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
            />

            {/* Smooth dark vignette blend at the base */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09090d] via-[#09090d]/80 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Text Placed Directly Below */}
        <div className="relative z-30 text-center mt-3 sm:mt-6 px-3 flex flex-col items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-[11px] font-mono text-zinc-300 font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            <span>MOHAMMAD SAIFAN · GRADE 9 SYSTEMS ARCHITECT</span>
          </div>
          <h2 className="text-[13px] xs:text-[14px] sm:text-base md:text-lg font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.25em] text-white font-display">
            <TypewriterText
              text="SOLUTIONS ARCHITECT & SYSTEMS ENGINEER"
              delay={400}
              speed={20}
              showCursor={true}
            />
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm font-mono text-zinc-400">
            Avionics telemetry, 3D mathematical simulations, and commercial client web platforms.
          </p>
        </div>
      </div>

      {/* Clean Editorial Bottom Bar */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 pt-4 border-t border-zinc-800/50">
        {/* Sleek Circular Social Media Icons (Placed above CTA button on mobile, left on desktop) */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap w-full md:w-auto">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                aria-label={`Mohammed Saifan's ${s.name}`}
                initial={{ x: -(i * 44), opacity: 0, scale: 0.35 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + i * 0.08,
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                }}
                className="relative w-9 h-9 sm:w-9 sm:h-9 rounded-full bg-white text-zinc-950 hover:bg-crimson hover:text-white transition-colors duration-300 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95 group overflow-hidden"
              >
                {/* Default Social Icon */}
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-3.5 group-hover:-translate-y-3.5 group-hover:opacity-0">
                  <Icon className="w-3.5 h-3.5" />
                </span>

                {/* Micro-animated Arrow (↗) */}
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out -translate-x-3.5 translate-y-3.5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA Button (Full-width on mobile, auto on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto"
        >
          <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">Open for High-Impact Roles</span>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-6 py-3.5 sm:py-2.5 text-sm transition-all shadow-[0_0_25px_rgba(225,29,72,0.6)] active:scale-95 group w-full md:w-auto text-center"
          >
            <span>Explore Flagship Systems</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
