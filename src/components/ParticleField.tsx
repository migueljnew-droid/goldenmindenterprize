"use client";

import { useEffect, useRef } from "react";

/**
 * Cosmic star field matching the constellation brain in the GME logo.
 * Gold + white stars with subtle drift — creates the cosmic interior
 * of the shield seen in the logo at full viewport scale.
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: {
      x: number; y: number;
      vx: number; vy: number;
      size: number;
      opacity: number; opDir: number;
      color: string;
    }[] = [];

    const GOLD_COLORS = [
      "201, 162, 39",   // gold
      "232, 197, 71",   // gold-light
      "245, 230, 163",  // gold-lightest
      "166, 124, 0",    // gold-deep
      "240, 234, 214",  // star-white
    ];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      stars = [];
      const count = Math.floor((canvas!.width * canvas!.height) / 12000);
      for (let i = 0; i < Math.min(count, 150); i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.8 + 0.3,
          opacity: Math.random() * 0.5 + 0.05,
          opDir: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.003 + 0.001),
          color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
        });
      }
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        s.opacity += s.opDir;
        if (s.opacity > 0.6) { s.opacity = 0.6; s.opDir *= -1; }
        if (s.opacity < 0.03) { s.opacity = 0.03; s.opDir *= -1; }

        // Star glow
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3);
        gradient.addColorStop(0, `rgba(${s.color}, ${s.opacity})`);
        gradient.addColorStop(1, `rgba(${s.color}, 0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity * 1.5})`;
        ctx.fill();
      }

      // Sparse constellation lines (only close bright stars)
      for (let i = 0; i < stars.length; i++) {
        if (stars[i].opacity < 0.25) continue;
        for (let j = i + 1; j < stars.length; j++) {
          if (stars[j].opacity < 0.25) continue;
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const lineAlpha = 0.04 * (1 - dist / 100);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201, 162, 39, ${lineAlpha})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
