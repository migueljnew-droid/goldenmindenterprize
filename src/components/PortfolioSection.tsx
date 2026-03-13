"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusColor: string;
  category: string;
  tech: string[];
}

const products: Product[] = [
  {
    name: "The Council",
    tagline: "SOVEREIGN AI Engine",
    description:
      "Rust-native multi-agent orchestration engine. 8 orchestration patterns, 5-tier memory, cost-aware routing across 10 LLM providers. The brain behind everything.",
    status: "OPERATIONAL",
    statusColor: "#4ade80",
    category: "AI Infrastructure",
    tech: ["Rust", "SQLite", "MCP Protocol", "Multi-LLM"],
  },
  {
    name: "Mercury Studio",
    tagline: "Next-Generation DAW",
    description:
      "Professional digital audio workstation built from scratch in Rust. 86 UI components, 1,858 tests, zero-latency real-time audio processing with Tauri frontend.",
    status: "IN DEVELOPMENT",
    statusColor: "#e8c547",
    category: "Creative Technology",
    tech: ["Rust", "Tauri", "WASM", "WebAudio"],
  },
  {
    name: "Aligned",
    tagline: "Astrology-Powered Dating",
    description:
      "Next-generation dating platform using astrological compatibility and AI-driven matching to create deeper, more meaningful connections.",
    status: "LIVE",
    statusColor: "#4ade80",
    category: "Consumer App",
    tech: ["React Native", "Supabase", "Fly.io"],
  },
  {
    name: "Omni",
    tagline: "Spiritual Wellness Companion",
    description:
      "Comprehensive spiritual wellness platform featuring guided meditations, energy tracking, chakra analysis, and AI-powered spiritual guidance.",
    status: "APP STORE",
    statusColor: "#4ade80",
    category: "Health & Wellness",
    tech: ["React Native", "Expo", "AI"],
  },
  {
    name: "NeoBrain",
    tagline: "AI Second Brain",
    description:
      "Intelligent knowledge management system that captures, organizes, and surfaces your thoughts using AI. An external neural network for your mind.",
    status: "iOS SUBMITTED",
    statusColor: "#60a5fa",
    category: "Productivity",
    tech: ["React Native", "AI Skills", "Obsidian"],
  },
  {
    name: "LANCE",
    tagline: "Legal Intelligence Framework",
    description:
      "AI-assisted legal analysis framework for structuring disputes, tracking proceedings, and generating legal documents with precision.",
    status: "v1.0.0 RELEASED",
    statusColor: "#c084fc",
    category: "Legal Technology",
    tech: ["TypeScript", "AI Analysis", "GitHub"],
  },
  {
    name: "SPEAR",
    tagline: "Software Project Execution & Audit Runtime",
    description:
      "Rigorous development methodology with spec-driven planning, phased execution with atomic commits, 6-category parallel audits, and a ratchet system that ensures projects never regress in quality.",
    status: "ACTIVE",
    statusColor: "#4ade80",
    category: "Development Framework",
    tech: ["Spec", "Plan", "Execute", "Audit", "Ratchet"],
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".portfolio-header", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: ".product-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 md:py-44">
      {/* Subtle navy shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-[#071020] to-[#050a18]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="portfolio-header text-center mb-20 md:mb-28">
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
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            <span className="gold-text">Products</span>{" "}
            <span className="text-[#f0ead6]">&amp; Platforms</span>
          </h2>
          <p className="text-[#8a99b8] max-w-2xl mx-auto text-base md:text-lg leading-[1.8]">
            A growing constellation of applications spanning artificial intelligence,
            music production, wellness, legal technology, and social impact.
          </p>
        </div>

        {/* Product grid — featured first card (The Council) is full-width */}
        <div className="product-grid space-y-6">
          {/* Featured: The Council */}
          <div className="product-card card p-8 md:p-12 md:flex md:items-start md:gap-12">
            <div className="md:flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="text-[0.6rem] tracking-[0.3em] uppercase text-[#c9a227]/50"
                  style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
                >
                  {products[0].category}
                </span>
                <span className="flex items-center gap-1.5 text-[0.65rem] font-mono">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: products[0].statusColor }}
                  />
                  <span style={{ color: products[0].statusColor }}>
                    {products[0].status}
                  </span>
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-[#f0ead6] mb-2"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {products[0].name}
              </h3>
              <p className="text-[#c9a227]/70 text-sm font-medium mb-4">{products[0].tagline}</p>
              <p className="text-[#8a99b8] text-sm leading-[1.8] mb-6">{products[0].description}</p>
              <div className="flex flex-wrap gap-2">
                {products[0].tech.map((t) => (
                  <span
                    key={t}
                    className="text-[0.65rem] px-3 py-1.5 bg-[#c9a227]/[0.06] text-[#c9a227]/70 border border-[#c9a227]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden md:block md:w-[200px] md:flex-shrink-0">
              <Image
                src="/logos/GMECOINNOBG.png"
                alt=""
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
          </div>

          {/* Rest of portfolio — 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(1).map((product) => (
              <div key={product.name} className="product-card card p-7 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[0.55rem] tracking-[0.3em] uppercase text-[#c9a227]/40"
                    style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
                  >
                    {product.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.6rem] font-mono">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: product.statusColor }}
                    />
                    <span style={{ color: product.statusColor }}>
                      {product.status}
                    </span>
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#f0ead6] mb-1"
                  style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-[0.75rem] text-[#c9a227]/60 font-medium mb-3">
                  {product.tagline}
                </p>
                <p className="text-[#8a99b8] text-[0.8rem] leading-[1.7] mb-5">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[0.6rem] px-2.5 py-1 bg-[#c9a227]/[0.05] text-[#c9a227]/60 border border-[#c9a227]/8"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
