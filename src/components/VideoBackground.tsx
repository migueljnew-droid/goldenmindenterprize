"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopOnPreference = () => { if (reduced.matches) video.current?.pause(); };
    const stopWhenHidden = () => { if (document.hidden) video.current?.pause(); };
    reduced.addEventListener("change", stopOnPreference);
    document.addEventListener("visibilitychange", stopWhenHidden);
    return () => {
      reduced.removeEventListener("change", stopOnPreference);
      document.removeEventListener("visibilitychange", stopWhenHidden);
    };
  }, []);
  async function toggle() {
    const element = video.current;
    if (!element) return;
    if (!element.paused) { element.pause(); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMessage("Background motion is off because your device prefers reduced motion.");
      return;
    }
    setMessage("");
    // No video request until the visitor explicitly chooses playback.
    if (!element.getAttribute("src")) element.src = "/video/cosmic-ambient.mp4";
    try { await element.play(); }
    catch { setMessage("Background video is unavailable. The still background remains visible."); }
  }
  return (
    <>
      <div className="cosmic-background" aria-hidden="true">
        <video ref={video} muted loop playsInline preload="none" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setMessage("Background video is unavailable."); }} className={playing ? "is-playing" : ""} />
      </div>
      <div className="motion-control">
        <p role="status">{message}</p>
        <button type="button" aria-label={playing ? "Pause background" : "Play background"} onClick={toggle}><span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span><span className="motion-label">{playing ? "Pause background" : "Play background"}</span></button>
      </div>
    </>
  );
}
