"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Cinematic logo entrance — scale from large + fade
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
      )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );

      // Parallax: logo moves slower than scroll
      gsap.to(logoRef.current, {
        y: -80,
        scale: 0.95,
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
      className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative shield echoes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-[#c9a227]/[0.03] rounded-full pointer-events-none" />

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* THE LOGO — MASSIVE */}
        <div ref={logoRef} className="mb-6 md:mb-8">
          <Image
            src="/logos/GME-hero.png"
            alt="Golden Mind Enterprize"
            width={560}
            height={560}
            priority
            className="mx-auto float-gentle drop-shadow-[0_0_100px_rgba(201,162,39,0.2)] w-[320px] h-[320px] md:w-[460px] md:h-[460px] lg:w-[560px] lg:h-[560px]"
          />
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="mb-5">
          <span
            className="text-[0.6rem] md:text-[0.7rem] tracking-[0.7em] uppercase text-[#e8c547]"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
          >
            Technology &bull; Innovation &bull; Intelligence
          </span>
        </div>

        <h1 className="sr-only">Golden Mind Enterprize LLC</h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base md:text-lg lg:text-xl text-[#d0d8e8] max-w-2xl mx-auto leading-[1.8]"
          style={{ fontFamily: "var(--font-jost), Jost, sans-serif" }}
        >
          The holding company powering next-generation applications,
          autonomous AI systems, and creative technology platforms.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#portfolio" className="btn-gold">
            Explore Portfolio
          </a>
          <a href="#about" className="btn-outline">
            Our Mission
          </a>
        </div>
      </div>

      {/* No bottom fade — seamless flow into next section */}
    </section>
  );
}
