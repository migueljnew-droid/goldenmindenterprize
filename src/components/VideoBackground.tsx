"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const onCanPlay = () => setLoaded(true);
    video.addEventListener("canplaythrough", onCanPlay);

    // Try to play immediately (covers mobile autoplay)
    video.play().catch(() => {});

    // Mobile: just let autoplay handle it, no scroll scrubbing
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    if (isMobile) {
      return () => video.removeEventListener("canplaythrough", onCanPlay);
    }

    // === DESKTOP ONLY: scroll-driven playback + camera ===
    video.pause();

    let lastScrollY = 0;
    let scrollVelocity = 0;
    let currentTime = 0;
    let targetScale = 1;
    let currentScale = 1;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const keyframes = [
      { scroll: 0,    scale: 1,    x: 0,   y: 0   },
      { scroll: 0.15, scale: 1.1,  x: -2,  y: -1  },
      { scroll: 0.35, scale: 1.25, x: 3,   y: -3  },
      { scroll: 0.55, scale: 1.35, x: -3,  y: -2  },
      { scroll: 0.75, scale: 1.45, x: 2,   y: -4  },
      { scroll: 1,    scale: 1.55, x: 0,   y: -5  },
    ];

    function getInterpolated(progress: number) {
      let i = 0;
      for (; i < keyframes.length - 1; i++) {
        if (progress <= keyframes[i + 1].scroll) break;
      }
      const a = keyframes[i];
      const b = keyframes[Math.min(i + 1, keyframes.length - 1)];
      const range = b.scroll - a.scroll;
      const t = range > 0 ? (progress - a.scroll) / range : 0;
      const ease = t * t * (3 - 2 * t);
      return {
        scale: a.scale + (b.scale - a.scale) * ease,
        x: a.x + (b.x - a.x) * ease,
        y: a.y + (b.y - a.y) * ease,
      };
    }

    function onScroll() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      scrollVelocity = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;
      const kf = getInterpolated(progress);
      targetScale = kf.scale;
      targetX = kf.x;
      targetY = kf.y;
    }

    function animate() {
      if (!video || !container) return;

      const speedBoost = Math.min(scrollVelocity * 0.15, 5);
      const playSpeed = 0.5 + speedBoost;
      currentTime += playSpeed / 60;

      if (video.duration && currentTime >= video.duration) {
        currentTime = currentTime - video.duration;
      }

      if (video.readyState >= 2 && video.duration) {
        video.currentTime = currentTime % video.duration;
      }

      currentScale += (targetScale - currentScale) * 0.04;
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      container.style.transform = `scale(${currentScale}) translate(${currentX}%, ${currentY}%)`;

      scrollVelocity *= 0.9;
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <div
        ref={containerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        {/* Fallback gradient */}
        <div
          className={`absolute inset-0 bg-navy-radial transition-opacity duration-[2000ms] ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video — always has autoplay/muted/playsInline for mobile compat */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/video/cosmic-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(5,10,24,0.45)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(5,10,24,0.85)_100%)]" />
    </div>
  );
}
