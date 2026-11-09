"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu";

export default function Navbar() {
  const [time, setTime] = useState("");

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

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Arsenal", href: "#arsenal" },
  ];

  return (
    <header className="fixed top-3.5 sm:top-5 inset-x-0 mx-auto w-[92%] sm:w-auto max-w-fit z-50 transition-all duration-300">
      <nav className="flex items-center justify-between gap-4 sm:gap-8 rounded-full bg-[#0e0e14]/90 border border-zinc-800/90 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(225,29,72,0.12)] px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-xl">
        {/* Left: Brand Logo with glowing crimson dot */}
        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="flex items-center gap-2 font-display font-black tracking-tight text-white hover:text-crimson transition-colors text-xs sm:text-sm uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#e11d48]" />
            <span>Saifan</span>
          </a>
          <span className="hidden md:inline-block text-zinc-700 font-mono">/</span>
          <span className="hidden md:inline-block text-[11px] font-mono text-zinc-400">
            {time || "12:00 PM IST"}
          </span>
        </div>

        {/* Center Desktop: Micro-animated Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 text-xs font-semibold">
          {navLinks.map((link) => (
            <a
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
            </a>
          ))}
        </div>

        {/* Right Desktop: Micro-animated Contact Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="relative group inline-flex items-center gap-1.5 rounded-full bg-white text-zinc-950 font-bold px-4 py-1.5 text-xs hover:bg-crimson hover:text-white transition-colors duration-300 shadow-sm active:scale-95 overflow-hidden"
          >
            <span>Contact</span>
            <span className="relative w-3.5 h-3.5 overflow-hidden inline-flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0" />
              <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-300 ease-out -translate-x-3 translate-y-3 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 stroke-[2.5]" />
            </span>
          </a>
        </div>

        {/* Mobile: React Bits StaggeredMenu */}
        <div className="sm:hidden flex items-center">
          <StaggeredMenu
            position="right"
            items={[
              { label: "Home", ariaLabel: "Go to home", link: "#" },
              { label: "Projects", ariaLabel: "View projects", link: "#projects" },
              { label: "Process", ariaLabel: "View process", link: "#process" },
              { label: "Arsenal", ariaLabel: "View arsenal", link: "#arsenal" },
              { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
            ]}
            socialItems={[
              { label: "GitHub", link: "https://github.com/SaifanX" },
              { label: "LinkedIn", link: "https://www.linkedin.com/in/saifanx/" },
              { label: "X", link: "https://x.com/saifanx07" },
              { label: "Email", link: "mailto:saifanmohammad39@gmail.com" },
            ]}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            colors={["#1c040d", "#4c0519", "#9f1239", "#e11d48"]}
            accentColor="#e11d48"
            logoUrl=""
            isFixed={false}
          />
        </div>
      </nav>
    </header>
  );
}
