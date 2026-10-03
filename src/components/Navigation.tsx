"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "Company" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); button.current?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  function navigate(href: string) {
    setOpen(false);
    document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true });
  }
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav aria-label="Main navigation" className="section-shell nav-inner">
        <a href="#home" className="brand" aria-label="Golden Mind Enterprize home" onClick={() => navigate("#home")}>
          <Image src="/logos/GMECOINNOBG.png" alt="" width={54} height={36} sizes="54px" />
          <span>Golden Mind<small>Enterprize</small></span>
        </a>
        <div className="desktop-links">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        <button ref={button} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span><span>Menu</span>
        </button>
      </nav>
      <div id="mobile-navigation" className="mobile-navigation" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => navigate(link.href)}>{link.label}</a>)}
      </div>
    </header>
  );
}
