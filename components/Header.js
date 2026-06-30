"use client";
import { useEffect, useState } from "react";

const LINKS = [
  ["Home", "#home"],
  ["Features", "#features"],
  ["Devices", "#devices"],
  ["Languages", "#languages"],
  ["Pricing", "#pricing"],
  ["Support", "#faq"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}
    >
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Ultra X Player home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/logo-clean.png" alt="Ultra X Player" className="brand-logo" />
        </a>

        <nav className="nav">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#download" className="btn btn-ghost">Sign In</a>
          <a href="#download" className="btn btn-gold">Download App</a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
