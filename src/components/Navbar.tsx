"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// X (formerly Twitter) Icon SVG
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface NavbarProps {
  isLoaded?: boolean;
}

export default function Navbar({ isLoaded = true }: NavbarProps) {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { number: "01", name: "Projects", href: "/#projects" },
    { number: "02", name: "Case Study", href: "/airguard" },
    { number: "03", name: "Process", href: "/#process" },
    { number: "04", name: "About", href: "/#about" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/SaifanX", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/saifanx/", icon: Linkedin },
    { name: "X", href: "https://x.com/saifanx07", icon: XIcon },
    { name: "Email", href: "mailto:saifanmohammad39@gmail.com", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-3.5 sm:top-5 inset-x-0 mx-auto w-[92%] md:w-auto max-w-fit z-50 transition-all duration-500 ${
          !isLoaded ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <nav className="flex items-center justify-between gap-4 md:gap-8 rounded-full bg-[#0e0e14]/90 border border-zinc-800/90 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(225,29,72,0.12)] px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-xl">
          {/* Left: Brand Logo with glowing crimson dot */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-black tracking-tight text-white hover:text-crimson transition-colors text-xs sm:text-sm uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#e11d48]" />
              <span>Saifan</span>
            </Link>
            <span className="hidden md:inline-block text-zinc-700 font-mono">/</span>
            <span className="hidden md:inline-block text-[11px] font-mono text-zinc-400">
              {time || "12:00 PM IST"}
            </span>
          </div>

          {/* Center Desktop: Micro-animated Navigation Links (Hidden below 768px) */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 py-1"
              >
                <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-0.5">
                  {link.name}
                </span>
                <span className="overflow-hidden inline-flex items-center max-w-0 opacity-0 group-hover:max-w-[16px] group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out">
                  <ArrowRight className="w-3 h-3 text-crimson stroke-[2.5]" />
                </span>
              </Link>
            ))}
          </div>

          {/* Right Desktop: Micro-animated Contact + Resume Buttons (Hidden below 768px) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mohammed_Saifan_CV.pdf"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-850 text-xs font-medium transition-colors"
              title="Download 1-Page Resume"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>CV</span>
            </a>

            <a
              href="/#contact"
              className="relative group inline-flex items-center gap-1.5 rounded-full bg-white text-zinc-950 font-bold px-4 py-1.5 text-xs hover:bg-crimson hover:text-white transition-colors duration-300 shadow-sm active:scale-95 overflow-hidden"
            >
              <span>Contact</span>
              <span className="relative w-3.5 h-3.5 overflow-hidden inline-flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0" />
                <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-300 ease-out -translate-x-3 translate-y-3 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 stroke-[2.5]" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button (Only visible below 768px) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-crimson transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Clean Mobile Full-Screen Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 font-display font-black tracking-tight text-white text-base uppercase"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-crimson shadow-[0_0_10px_#e11d48]" />
                <span>Saifan</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-crimson/20 border border-zinc-700/80 hover:border-crimson text-zinc-300 hover:text-white transition-all text-xs font-mono active:scale-95"
                aria-label="Close navigation"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5 text-crimson" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 my-auto py-8">
              <span className="font-mono text-xs uppercase tracking-widest text-crimson font-bold">
                Navigation
              </span>
              <ul className="flex flex-col gap-5">
                {[
                  { number: "01", label: "Projects", href: "/#projects" },
                  { number: "02", label: "AirGuard Case Study", href: "/airguard" },
                  { number: "03", label: "Process", href: "/#process" },
                  { number: "04", label: "About", href: "/#about" },
                  { number: "05", label: "Contact", href: "/#contact" },
                ].map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center gap-4 text-2xl sm:text-3xl font-display font-black uppercase text-zinc-200 hover:text-crimson transition-colors"
                    >
                      <span className="text-xs font-mono text-zinc-500 group-hover:text-crimson transition-colors">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-crimson" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CV Download button */}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohammed_Saifan_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono font-semibold"
                >
                  <FileText className="w-4 h-4 text-crimson" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Socials & Location at Bottom */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Bangalore, IN</span>
                <span className="text-xs font-mono text-zinc-400">{time}</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-crimson text-xs font-mono transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
