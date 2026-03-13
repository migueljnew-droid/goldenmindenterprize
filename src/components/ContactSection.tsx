"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-12 text-center contact-content">
        {/* Large shield logo */}
        <Image
          src="/logos/GME-hero.png"
          alt="Golden Mind Enterprize"
          width={260}
          height={260}
          className="mx-auto mb-12 drop-shadow-[0_0_40px_rgba(201,162,39,0.2)] w-[180px] h-[180px] md:w-[260px] md:h-[260px]"
        />

        <div className="divider-gold mb-12" />

        <p
          className="text-[0.65rem] tracking-[0.6em] uppercase text-[#c9a227]/70 mb-5"
          style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
        >
          Connect
        </p>
        <h2
          className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8"
          style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
        >
          <span className="gold-text">Let&apos;s Build</span>{" "}
          <span className="text-[#f0ead6]">the Future</span>
        </h2>
        <p className="text-[#8a99b8] max-w-xl mx-auto text-base md:text-lg leading-[1.8] mb-12">
          Golden Mind Enterprize is always open to visionary partnerships,
          investment inquiries, and technology collaborations that push
          boundaries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a href="mailto:contact@goldenmindenterprize.com" className="btn-gold">
            Get in Touch
          </a>
        </div>

        {/* Footer */}
        <div className="divider-gold mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logos/GMECOINNOBG.png"
              alt="GME"
              width={32}
              height={32}
              className="opacity-40"
            />
            <span
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#5a6a88]"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif" }}
            >
              Golden Mind Enterprize LLC
            </span>
          </div>
          <p className="text-[0.7rem] text-[#5a6a88]/60">
            &copy; {new Date().getFullYear()} Golden Mind Enterprize LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
