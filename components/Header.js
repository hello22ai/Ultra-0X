"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "@/components/icons";

const LINKS = [
  { label: "Home", href: "/#home" },
  {
    label: "Features",
    href: "/#features",
    children: [
      ["Why Ultra X", "/#features"],
      ["The Player", "/#app"],
      ["Tech Specs", "/#specs"],
    ],
  },
  { label: "Devices", href: "/#devices" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reviews", href: "/#reviews" },
  {
    label: "Support",
    href: "/#faq",
    children: [
      ["FAQs", "/#faq"],
      ["Our Story", "/#story"],
      ["Contact Us", "/#download"],
    ],
  },
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

  // When already on the home page, scroll manually on every click — the
  // router skips scrolling when the URL (incl. hash) doesn't change.
  // From other pages (/policy etc.) fall through to normal Link navigation.
  const goTo = (href) => (e) => {
    setOpen(false);
    const hash = href.split("#")[1];
    if (!hash || window.location.pathname !== "/") return;
    const el = document.getElementById(hash);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", `/#${hash}`);
  };

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}
    >
      <div className="container header-inner">
        <Link
          href="/#home"
          className="brand"
          aria-label="Ultra X Player home"
          onClick={goTo("/#home")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/logo-dark.png" alt="Ultra X Player" className="brand-logo" width={772} height={544} />
        </Link>

        <nav className="nav">
          {LINKS.map(({ label, href, children }) => (
            <div className={`nav-item${children ? " has-dd" : ""}`} key={label}>
              <Link href={href} onClick={goTo(href)}>
                {label}
                {children && <ChevronDown className="dd-arrow" />}
              </Link>
              {children && (
                <div className="dropdown">
                  {children.map(([l, h]) =>
                    h.startsWith("http") ? (
                      <a
                        href={h}
                        key={l}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                      >
                        {l}
                      </a>
                    ) : (
                      <Link href={h} key={l} onClick={goTo(h)}>
                        {l}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/#faq" className="btn btn-ghost" onClick={goTo("/#faq")}>
            Contact Us
          </Link>
          <Link href="/#download" className="btn btn-gold" onClick={goTo("/#download")}>
            Download App
          </Link>
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
