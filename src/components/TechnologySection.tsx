"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    num: "I",
    name: "SOVEREIGN Core",
    desc: "Rust-native AI orchestrator. 6,150 lines, 62 public functions, zero stubs. 8 patterns: Chain, Parallel, Debate, Ensemble, Refinement, Hierarchical, Swarm, Human-in-the-Loop.",
    highlight: true,
  },
  {
    num: "II",
    name: "Multi-Agent Intelligence",
    desc: "400+ specialized agents across 10 LLM providers. Cost-aware routing, ensemble consensus, autonomous decision-making with 5-tier memory persistence.",
  },
  {
    num: "III",
    name: "Council Cloud",
    desc: "grandcouncil.cloud — 24/7 VPS infrastructure. Heartbeat monitoring, 10 scheduled agents, automated workflows, Telegram alerting, and continuous deployment pipeline.",
  },
  {
    num: "IV",
    name: "Creative Generation Engine",
    desc: "Vertex AI-powered content pipeline. Imagen 4 for visual assets, Veo 3.1 for video production, brand-consistent AI creative generation at enterprise scale.",
  },
  {
    num: "V",
    name: "Cross-Platform Distribution",
    desc: "React Native + Expo for iOS and Android. Next.js for web. Tauri for desktop. Unified codebases shipping to App Store, Google Play, and the open web simultaneously.",
  },
];

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".tech-header", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".tech-layer",
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.12,
          scrollTrigger: { trigger: ".tech-stack", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".arch-diagram",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".arch-diagram", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="relative py-32 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(42,74,138,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="tech-header text-center mb-20 md:mb-28">
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
            Technology
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            <span className="gold-text">The Stack</span>{" "}
            <span className="text-[#f0ead6]">That Powers Everything</span>
          </h2>
          <p className="text-[#8a99b8] max-w-2xl mx-auto text-base md:text-lg leading-[1.8]">
            Five interlocking layers of technology — from bare-metal Rust
            to high-level AI orchestration — engineered for performance,
            autonomy, and resilience.
          </p>
        </div>

        {/* Tech layers */}
        <div className="tech-stack space-y-4 mb-20 md:mb-28">
          {layers.map((layer) => (
            <div
              key={layer.num}
              className={`tech-layer group flex items-start gap-6 md:gap-8 p-6 md:p-8 transition-all duration-400 cursor-default ${
                layer.highlight
                  ? "card gold-border-glow"
                  : "card"
              }`}
            >
              <span
                className="text-2xl md:text-3xl font-bold gold-text shrink-0 pt-1 w-12 text-center"
                style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
              >
                {layer.num}
              </span>
              <div>
                <h3
                  className="text-lg md:text-xl font-semibold text-[#f0ead6] mb-2 group-hover:text-[#e8c547] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
                >
                  {layer.name}
                </h3>
                <p className="text-[#8a99b8] text-sm leading-[1.8]">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="arch-diagram card gold-border-bright p-8 md:p-12">
          <p
            className="text-center text-[0.6rem] tracking-[0.5em] uppercase text-[#c9a227]/50 mb-10"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            System Architecture
          </p>
          <div className="flex flex-col items-center gap-3 font-mono text-[0.75rem] md:text-sm">
            {[
              { label: "Applications — Aligned / Omni / NeoBrain / FathersCAN / LANCE", w: "max-w-2xl", op: "0.9" },
              { label: "Mercury Studio — Rust DAW + Tauri UI", w: "max-w-xl", op: "0.75" },
              { label: "Content Engine — Imagen 4 / Veo 3.1 / Vertex AI", w: "max-w-md", op: "0.6" },
              { label: "Council Cloud — grandcouncil.cloud — 24/7", w: "max-w-sm", op: "0.5" },
              { label: "400+ AI Agents — 10 LLM Providers", w: "max-w-[17rem]", op: "0.4" },
              { label: "SOVEREIGN — Rust Core Engine", w: "max-w-[13rem]", op: "0.3" },
            ].map((tier, i) => (
              <div key={i}>
                <div
                  className={`px-5 py-3 text-center border border-[#c9a227] text-[#e8c547] ${tier.w} w-full`}
                  style={{
                    borderColor: `rgba(201, 162, 39, ${tier.op})`,
                    color: `rgba(232, 197, 71, ${Number(tier.op) + 0.1})`,
                    background: `rgba(201, 162, 39, ${Number(tier.op) * 0.06})`,
                  }}
                >
                  {tier.label}
                </div>
                {i < 5 && (
                  <div className="w-px h-3 bg-[#c9a227]/15 mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
