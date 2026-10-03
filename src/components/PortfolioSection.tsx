"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AvailableApps from "./AvailableApps";
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
  featured?: boolean;
  logo?: string;
}

const products: Product[] = [
  {
    name: "The Council",
    tagline: "SOVEREIGN AI Engine",
    description:
      "Rust-native multi-agent orchestration engine. 8 orchestration patterns, 5-tier memory, cost-aware routing across 10 LLM providers.",
    status: "OPERATIONAL",
    statusColor: "#4ade80",
    category: "AI Infrastructure",
    tech: ["Rust", "SQLite", "MCP", "Multi-LLM"],
    featured: true,
    logo: "/logos/apps/council.png",
  },
  {
    name: "Mercury Studio",
    tagline: "Next-Generation DAW",
    description:
      "Professional digital audio workstation built from scratch in Rust. 86 UI components, 1,858 tests, zero-latency real-time audio.",
    status: "IN DEVELOPMENT",
    statusColor: "#e8c547",
    category: "Creative Technology",
    tech: ["Rust", "Tauri", "WASM", "WebAudio"],
    logo: "/logos/apps/mercury.png",
  },
  {
    name: "Aligned",
    tagline: "Astrology-Powered Dating",
    description:
      "Next-generation dating platform using astrological compatibility and AI-driven matching for meaningful connections.",
    status: "COMING SOON",
    statusColor: "#e8c547",
    category: "Consumer App",
    tech: ["React Native", "Supabase", "Fly.io"],
    logo: "/logos/apps/aligned.png",
  },
  {
    name: "NeoBrain",
    tagline: "AI Second Brain",
    description:
      "Intelligent knowledge management that captures, organizes, and surfaces your thoughts using AI. Your external neural network.",
    status: "iOS SUBMITTED",
    statusColor: "#60a5fa",
    category: "Productivity",
    tech: ["React Native", "AI Skills", "Obsidian"],
    logo: "/logos/apps/neobrain-v2.png",
  },
  {
    name: "LANCE",
    tagline: "Legal Intelligence",
    description:
      "AI-assisted legal analysis framework for structuring disputes, tracking proceedings, and generating documents with precision.",
    status: "v1.0.0 RELEASED",
    statusColor: "#c084fc",
    category: "Legal Technology",
    tech: ["TypeScript", "AI Analysis", "GitHub"],
    logo: "/logos/apps/lance.svg",
  },
  {
    name: "SPEAR",
    tagline: "Development Methodology",
    description:
      "Spec-driven planning, phased execution, 6-category parallel audits, and a ratchet that ensures projects never regress in quality.",
    status: "ACTIVE",
    statusColor: "#4ade80",
    category: "Dev Framework",
    tech: ["Spec", "Plan", "Execute", "Audit", "Ratchet"],
    logo: "/logos/apps/spear.svg",
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header clip-path reveal
      gsap.fromTo(
        ".portfolio-heading",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: ".portfolio-heading", start: "top 80%" },
        }
      );

      // Each card reveals at its own position, including the two app spotlights.
      gsap.utils.toArray<HTMLElement>(".product-card, .available-app-card").forEach((card) => {
        gsap.fromTo(card, { opacity: 0, y: 50 }, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-40 md:py-56">

      <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-12">
        {/* ═══ HEADER — Asymmetric like About ═══ */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-end mb-20 md:mb-28">
          <div>
            <p
              className="text-[0.6rem] tracking-[0.6em] uppercase text-[#e8c547]"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              Portfolio
            </p>
          </div>
          <div>
            <h2
              className="portfolio-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              <span className="gold-text">Products</span>{" "}
              <span className="text-[#f0ead6]">&amp;</span>
              <br />
              <span className="text-[#f0ead6]">Platforms</span>
            </h2>
          </div>
        </div>

        <AvailableApps />

        {/* ═══ FEATURED: The Council — Full width ═══ */}
        <div className="product-card card gold-border-glow p-8 md:p-12 mb-6 md:flex md:items-start md:gap-16">
          <div className="md:flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[0.55rem] tracking-[0.3em] uppercase text-[#e8c547]"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {products[0].category}
              </span>
              <span className="flex items-center gap-1.5 text-[0.6rem] font-mono">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: products[0].statusColor }} />
                <span style={{ color: products[0].statusColor }}>{products[0].status}</span>
              </span>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-[#f0ead6] mb-2"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              {products[0].name}
            </h3>
            <p className="text-[0.8rem] text-[#e8c547] font-medium mb-5">{products[0].tagline}</p>
            <p className="text-[#d0d8e8] text-sm leading-[1.8] mb-8 max-w-lg">{products[0].description}</p>
            <div className="flex flex-wrap gap-2">
              {products[0].tech.map((t) => (
                <span key={t} className="text-[0.6rem] px-3 py-1.5 bg-[#c9a227]/[0.12] text-[#e8c547] border border-[#c9a227]/25">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Logo + number */}
          <div className="hidden md:flex md:flex-col md:items-center md:gap-4">
            {products[0].logo && (
              <Image
                src={products[0].logo}
                alt={products[0].name}
                width={120}
                height={120}
                className="rounded-2xl opacity-80"
              />
            )}
            <span
              className="text-[6rem] font-bold leading-none gold-text opacity-50"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              01
            </span>
          </div>
        </div>

        {/* ═══ GRID: Rest of products — 2x3 masonry-style ═══ */}
        <div className="product-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(1).map((product, i) => (
            <div
              key={product.name}
              className={`product-card card p-7 md:p-8 ${i === 1 || i === 4 ? "md:translate-y-6" : ""}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[0.5rem] tracking-[0.3em] uppercase text-[#e8c547]"
                  style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
                >
                  {product.category}
                </span>
                <span className="flex items-center gap-1.5 text-[0.55rem] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.statusColor }} />
                  <span style={{ color: product.statusColor }}>{product.status}</span>
                </span>
              </div>

              {/* Logo + name */}
              <div className="flex items-start gap-4 mb-4">
                {product.logo && (
                  <Image
                    src={product.logo}
                    alt={product.name}
                    width={56}
                    height={56}
                    className="rounded-xl shrink-0"
                  />
                )}
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#f0ead6] mb-1"
                    style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[0.7rem] text-[#e8c547] font-medium">{product.tagline}</p>
                </div>
              </div>

              <p className="text-[#d0d8e8] text-[0.8rem] leading-[1.8] mb-6">{product.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {product.tech.map((t) => (
                  <span key={t} className="text-[0.55rem] px-2.5 py-1 bg-[#c9a227]/[0.12] text-[#e8c547] border border-[#c9a227]/25">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
