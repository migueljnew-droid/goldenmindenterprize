"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleField from "./ParticleField";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 1.6 }
      )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );

      // Parallax on scroll
      gsap.to(logoRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background: navy gradient + cosmic radial */}
      <div className="absolute inset-0 bg-navy-radial" />

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050a18_100%)]" />

      {/* Star field */}
      <ParticleField />

      {/* Decorative rings (shield echo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-[#c9a227]/[0.04] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] border border-[#c9a227]/[0.025] rounded-full pointer-events-none" />

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* THE LOGO — MASSIVE, CENTRAL, DOMINANT. This IS the hero. */}
        <div ref={logoRef} className="mb-6 md:mb-8">
          <Image
            src="/logos/GME-hero.png"
            alt="Golden Mind Enterprize"
            width={520}
            height={520}
            priority
            className="mx-auto float-gentle drop-shadow-[0_0_80px_rgba(201,162,39,0.3)] w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
          />
        </div>

        {/* Tagline below logo */}
        <div ref={taglineRef} className="mb-5">
          <span
            className="text-[0.6rem] md:text-[0.7rem] tracking-[0.6em] uppercase text-[#c9a227]/60"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            Technology &bull; Innovation &bull; Intelligence
          </span>
        </div>

        {/* Hidden h1 for SEO — the logo has the visual title */}
        <h1 ref={titleRef} className="sr-only">Golden Mind Enterprize LLC</h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base md:text-lg text-[#8a99b8] max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-jost), Jost, sans-serif" }}
        >
          The holding company powering next-generation applications,
          autonomous AI systems, and creative technology platforms.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" className="btn-gold rounded-none">
            Explore Portfolio
          </a>
          <a href="#about" className="btn-outline rounded-none">
            Our Mission
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a18] to-transparent pointer-events-none" />
    </section>
  );
}
