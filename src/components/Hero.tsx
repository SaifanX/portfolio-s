"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import FluidGlass from "@/components/FluidGlass";

// X (formerly Twitter) Icon SVG
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Typewriter Text Effect Component (Preserves existing typography/fonts)
function TypewriterText({
  text,
  startTrigger = true,
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
    if (!startTrigger) {
      setDisplayedText("");
      setIsDone(false);
      return;
    }

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
  }, [text, startTrigger, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
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
  const [isNameHovered, setIsNameHovered] = useState(false);
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
    <section className="relative min-h-screen flex flex-col justify-between pt-16 sm:pt-20 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Rich Atmospheric Crimson Glow & Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[1100px] h-[480px] bg-crimson/20 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[340px] bg-crimson-dark/30 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-crimson/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Central Composition: Monumental Typewriter SAIFAN + Cutout Portrait with Fade-in Entry */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-auto">
        <div
          className="relative w-full h-[220px] sm:h-[280px] md:h-[330px] lg:h-[370px] xl:h-[410px] flex items-end justify-center group/hero-name cursor-pointer"
          onMouseEnter={() => setIsNameHovered(true)}
          onMouseLeave={() => setIsNameHovered(false)}
        >
          {/* Monumental White Display Text BEHIND the image (Typewriter Effect) */}
          <div className="absolute inset-0 flex items-center justify-center z-10 select-none pointer-events-none">
            <span
              className={`font-display font-black tracking-tight text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] uppercase text-white leading-none drop-shadow-[0_15px_40px_rgba(225,29,72,0.35)] transition-opacity duration-300 ${
                isNameHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              <TypewriterText
                text="SAIFAN"
                startTrigger={isReady}
                delay={500}
                speed={75}
              />
            </span>
          </div>

          {/* Portrait Image in the Foreground (Follows the curtain lift without fade-in) */}
          <motion.div
            initial={{ y: 90 }}
            animate={isReady ? { y: 0 } : { y: 90 }}
            transition={{
              duration: 0.95,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="relative z-20 w-[220px] sm:w-[280px] md:w-[330px] lg:w-[370px] xl:w-[410px] h-full flex items-end justify-center pointer-events-none"
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
              className="object-contain object-bottom select-none pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
            />

            {/* Smooth dark vignette blend at the base */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09090d] via-[#09090d]/80 to-transparent pointer-events-none" />
          </motion.div>

          {/* 3D Refractive Glass Lens: ONLY active in Hero when hovering over the monumental name */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ease-out pointer-events-none z-30 ${
              isNameHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <FluidGlass
              text="SAIFAN"
              shape="lens"
              size={280}
              refraction={1.25}
              dispersion={0.4}
              reflection={1.0}
              tint={0.15}
              color="#ff1744"
              interaction="follow"
              idle={false}
              morphOnClick={false}
              background="transparent"
              fontFamily="'Syne', sans-serif"
              fontWeight={900}
              textColor="#ffffff"
            />
          </div>
        </div>

        {/* Text Placed Directly Below the Image (Typewriter Effect) */}
        <div className="relative z-30 text-center mt-3 sm:mt-4">
          <h1 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-zinc-300 font-display">
            <TypewriterText
              text="SOLUTIONS ARCHITECT & SYSTEMS ENGINEER"
              startTrigger={isReady}
              delay={1000}
              speed={25}
              showCursor={true}
            />
          </h1>
        </div>
      </div>

      {/* Clean Editorial Bottom Bar */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-zinc-800/40">
        {/* Sleek Circular Social Media Icons (Fading Outwards from Behind Each Other) */}
        <div className="relative flex items-center gap-2.5">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                initial={{ x: -(i * 44), opacity: 0, scale: 0.35 }}
                animate={
                  isReady
                    ? { x: 0, opacity: 1, scale: 1 }
                    : { x: -(i * 44), opacity: 0, scale: 0.35 }
                }
                transition={{
                  delay: 1.7 + i * 0.1,
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                }}
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-zinc-950 hover:bg-crimson hover:text-white transition-colors duration-300 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95 group overflow-hidden"
              >
                {/* Default Social Icon (exits diagonally to top-right on hover) */}
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-3.5 group-hover:-translate-y-3.5 group-hover:opacity-0">
                  <Icon className="w-3.5 h-3.5" />
                </span>

                {/* Micro-animated Arrow (↗) (shoots in diagonally from bottom-left on hover) */}
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out -translate-x-3.5 translate-y-3.5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom-Right: CTA Button & Availability Indicator (Smooth Entrance) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">Open for High-Impact Roles</span>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold px-6 py-2.5 text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(225,29,72,0.6)] active:scale-95 group"
          >
            <span>Explore Flagship Systems</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}