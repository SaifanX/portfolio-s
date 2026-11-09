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
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-10 py-3.5 border-b border-zinc-800/40 bg-[#09090d]/85 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
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

        {/* Right Desktop: Quick Links & Contact */}
        <div className="hidden sm:flex items-center gap-7 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative inline-flex items-center text-zinc-300 hover:text-white transition-colors duration-200 py-1"
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
