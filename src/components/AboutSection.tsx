"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Autonomous Intelligence",
    desc: "400+ AI agents operating across 7 LLM providers — orchestrating decisions, analyzing data, and driving operations with minimal human intervention around the clock.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6l-.7.5V18H9v-2.5l-.7-.5A7 7 0 0112 2z" />
        <path d="M9 21h6M10 18v3M14 18v3" />
      </svg>
    ),
  },
  {
    title: "Creative Technology",
    desc: "Where Grammy-level artistry meets cutting-edge engineering. Every product is designed with uncompromising attention to both aesthetic beauty and technical precision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Rust-First Architecture",
    desc: "Performance without compromise. Our SOVEREIGN engine is built in Rust — zero-cost abstractions, memory safety, and blazing-fast execution powering every system.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "7+", label: "Active Products", sublabel: "Across 5 Industries" },
  { value: "400+", label: "AI Agents", sublabel: "7 LLM Providers" },
  { value: "6,150", label: "Lines of Rust", sublabel: "SOVEREIGN Engine" },
  { value: "24/7", label: "Cloud Operations", sublabel: "grandcouncil.cloud" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        ".about-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".about-header", start: "top 80%" },
        }
      );

      // Animate stats
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12,
          scrollTrigger: { trigger: ".stats-grid", start: "top 80%" },
        }
      );

      // Animate pillars
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
          scrollTrigger: { trigger: ".pillars-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 md:py-44">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,27,58,0.5)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <div className="about-header text-center mb-20 md:mb-28">
          {/* Coin logo as section divider */}
          <Image
            src="/logos/GMECOINNOBG.png"
            alt=""
            width={60}
            height={60}
            className="mx-auto mb-8 opacity-40"
          />
          <p
            className="text-[0.65rem] tracking-[0.6em] uppercase text-[#c9a227]/70 mb-5"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            About the Company
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            <span className="gold-text">The Mind</span>{" "}
            <span className="text-[#f0ead6]">Behind the Machine</span>
          </h2>
          <p className="text-[#8a99b8] max-w-3xl mx-auto text-base md:text-lg leading-[1.8]">
            Golden Mind Enterprize LLC is the technology holding company
            that powers a constellation of applications, AI platforms, and
            creative technologies. Founded by{" "}
            <span className="text-[#e8c547] font-medium">Louis Gold</span> —
            3x Grammy-nominated songwriter and technologist — GME operates at
            the intersection of art, artificial intelligence, and engineering
            excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card card p-6 md:p-8 text-center"
            >
              <p
                className="text-3xl md:text-4xl font-bold gold-text-shimmer mb-2"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[0.65rem] tracking-[0.2em] uppercase text-[#f0ead6]/80 mb-1"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {stat.label}
              </p>
              <p className="text-[0.7rem] text-[#5a6a88]">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-24 md:mb-32" />

        {/* Pillars */}
        <div className="pillars-grid grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="pillar-card card p-8 md:p-10"
            >
              <div className="text-[#c9a227] mb-6">{pillar.icon}</div>
              <h3
                className="text-lg md:text-xl font-semibold text-[#f0ead6] mb-4"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-[#8a99b8] text-sm leading-[1.8]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
