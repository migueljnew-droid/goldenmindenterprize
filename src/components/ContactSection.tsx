"use client";

import { useState } from "react";
const email = "contact@goldenmindenterprize.com";
export default function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopyStatus("Email address copied."); }
    catch { setCopyStatus("Select the email address above to copy it manually."); }
  }
  return (
    <section id="contact" tabIndex={-1} className="contact-section section-shell">
      <div className="contact-panel">
        <p className="eyebrow">Start a conversation</p><h2>Have something<br /><span className="gold-text">in mind?</span></h2>
        <p>For partnerships, product questions, and technology collaborations, get in touch with Golden Mind Enterprize.</p>
        <a className="contact-email" href={`mailto:${email}`}>{email}</a>
        <div className="contact-actions">
          <a className="btn-gold" href={`mailto:${email}?subject=Golden%20Mind%20Enterprize%20inquiry`}>Write an email <span aria-hidden="true">↗</span></a>
          <button className="btn-outline" type="button" onClick={copyEmail}>Copy email address</button>
          <a className="text-link" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Golden%20Mind%20Enterprize%20inquiry`} target="_blank" rel="noopener noreferrer">Open Gmail <span className="sr-only">in a new tab</span><span aria-hidden="true">↗</span></a>
        </div>
        <p role="status" className="copy-status">{copyStatus}</p>
      </div>
      <footer className="site-footer"><p>© {new Date().getFullYear()} Golden Mind Enterprize LLC</p><a href="#home" className="text-link">Back to top <span aria-hidden="true">↑</span></a></footer>
    </section>
  );
}
