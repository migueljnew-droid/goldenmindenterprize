"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "7+", label: "Products", sublabel: "Across 5 Industries" },
  { value: "400+", label: "AI Agents", sublabel: "7 LLM Providers" },
  { value: "6,150", label: "Lines of Rust", sublabel: "SOVEREIGN Engine" },
  { value: "24/7", label: "Cloud Ops", sublabel: "grandcouncil.cloud" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Massive heading — clip-path reveal from left
      gsap.fromTo(
        ".about-big-text",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: ".about-big-text", start: "top 80%" },
        }
      );

      // Body text fade
      gsap.fromTo(
        ".about-body",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".about-body", start: "top 80%" },
        }
      );

      // Stats — staggered from bottom
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
        }
      );

      // Pillars
      gsap.fromTo(
        ".pillar",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
          scrollTrigger: { trigger: ".pillars-row", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-40 md:py-56">

      <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-12">
        {/* ═══ ASYMMETRIC HEADER — Logo left, text right ═══ */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start mb-28 md:mb-40">
          {/* Left: Coin logo + label */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logos/GMECOINNOBG.png"
              alt=""
              width={100}
              height={100}
              className="mb-6 opacity-50"
            />
            <p
              className="text-[0.6rem] tracking-[0.6em] uppercase text-[#e8c547]"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              About the Company
            </p>
          </div>

          {/* Right: Massive heading + body */}
          <div>
            <h2
              className="about-big-text text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-10"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              <span className="gold-text">The Mind</span>
              <br />
              <span className="text-[#f0ead6]">Behind the</span>
              <br />
              <span className="text-[#f0ead6]">Machine</span>
            </h2>

            <div className="about-body space-y-6 max-w-xl">
              <p className="text-[#d0d8e8] text-base md:text-lg leading-[1.9]">
                Golden Mind Enterprize LLC is the technology holding company
                that powers a constellation of applications, AI platforms, and
                creative technologies.
              </p>
              <p className="text-[#d0d8e8] text-base md:text-lg leading-[1.9]">
                Founded by{" "}
                <span className="text-[#e8c547] font-medium">Miguel Jiminez</span>{" "}
                — technologist and entrepreneur — GME
                operates at the intersection of art, artificial intelligence,
                and engineering excellence.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ STATS ROW ═══ */}
        <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-28 md:mb-40">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center p-8 card">
              <p
                className="text-3xl md:text-5xl font-bold gold-text-shimmer mb-3"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[0.6rem] tracking-[0.25em] uppercase text-[#f0ead6]/95 mb-1"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {stat.label}
              </p>
              <p className="text-[0.65rem] text-[#d0d8e8]">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* ═══ PILLARS — Asymmetric grid ═══ */}
        <div className="pillars-row grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Autonomous Intelligence",
              desc: "400+ AI agents operating across 7 LLM providers. Orchestrating decisions, analyzing data, and driving operations with minimal human intervention.",
            },
            {
              title: "Creative Technology",
              desc: "Where Grammy-level artistry meets cutting-edge engineering. Every product designed with uncompromising attention to aesthetic beauty and technical precision.",
            },
            {
              title: "Rust-First Architecture",
              desc: "Performance without compromise. The SOVEREIGN engine is built in Rust — zero-cost abstractions, memory safety, and blazing-fast execution as the foundation.",
            },
          ].map((p, i) => (
            <div
              key={p.title}
              className={`pillar card p-8 md:p-10 ${i === 1 ? "md:translate-y-8" : ""}`}
            >
              <div className="w-8 h-[2px] bg-[#c9a227]/40 mb-6" />
              <h3
                className="text-lg md:text-xl font-semibold text-[#f0ead6] mb-4"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[#d0d8e8] text-sm leading-[1.9]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
