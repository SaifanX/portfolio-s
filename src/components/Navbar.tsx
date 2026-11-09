"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Arsenal", href: "#arsenal" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? "top-4 px-4 sm:px-8 py-0"
          : "top-0 px-4 sm:px-10 py-3.5 sm:py-4 border-b border-zinc-800/40 bg-[#09090d]/85 backdrop-blur-md"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          isScrolled
            ? "max-w-6xl rounded-full bg-[#0e0e12]/85 backdrop-blur-md border border-white/10 px-5 sm:px-7 py-2.5 sm:py-3 shadow-2xl"
            : "max-w-7xl px-1 sm:px-3 py-0.5"
        }`}
      >
        {/* Left: Clean Brand Logo & Location/Time */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-display font-extrabold tracking-tight text-white hover:text-crimson transition-colors text-sm sm:text-base uppercase"
          >
            Saifan
          </a>
          <span className="hidden sm:inline-block text-zinc-600 font-mono">/</span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            Bangalore · {time || "12:00 PM IST"}
          </span>
        </div>

        {/* Right: Quick Links & Contact */}
        <div className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative inline-flex items-center text-zinc-300 hover:text-white transition-colors duration-200 hidden sm:inline-flex py-1"
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-0.5">
                {link.name}
              </span>
              <span className="overflow-hidden inline-flex items-center max-w-0 opacity-0 group-hover:max-w-[18px] group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out">
                <ArrowRight className="w-3.5 h-3.5 text-crimson stroke-[2.5]" />
              </span>
            </a>
          ))}

          {/* Contact Button with Bottom-Left to Top-Right Arrow micro-animation */}
          <a
            href="#contact"
            className="relative group inline-flex items-center gap-1.5 rounded-full bg-white text-zinc-950 font-semibold px-4 py-1.5 text-xs hover:bg-crimson hover:text-white transition-colors duration-300 shadow-md active:scale-95 overflow-hidden"
          >
            <span>Contact</span>
            <span className="relative w-3.5 h-3.5 overflow-hidden inline-flex items-center justify-center">
              {/* Default Arrow exits up-right */}
              <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0" />
              {/* New Arrow shoots in from bottom-left */}
              <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-300 ease-out -translate-x-3 translate-y-3 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 stroke-[2.5]" />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
