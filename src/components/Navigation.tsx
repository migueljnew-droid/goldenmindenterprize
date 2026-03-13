"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#050a18]/90 backdrop-blur-2xl border-b border-[#c9a227]/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo mark + wordmark */}
          <a href="#home" className="flex items-center gap-4 group cursor-pointer">
            <Image
              src="/logos/GMECOINNOBG.png"
              alt="Golden Mind Enterprize"
              width={48}
              height={48}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span
                className="font-[var(--font-cinzel)] text-[0.7rem] font-bold tracking-[0.35em] uppercase gold-text"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                Golden Mind
              </span>
              <span
                className="text-[0.55rem] tracking-[0.5em] uppercase text-[#d0d8e8]"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                Enterprize
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] tracking-[0.25em] uppercase text-[#d0d8e8] hover:text-[#e8c547] transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-3 cursor-pointer"
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#c9a227] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#c9a227] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#c9a227] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050a18]/98 backdrop-blur-2xl border-b border-[#c9a227]/10">
          <div className="px-8 py-8 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[0.75rem] tracking-[0.3em] uppercase text-[#d0d8e8] hover:text-[#e8c547] transition-colors py-2 cursor-pointer"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
