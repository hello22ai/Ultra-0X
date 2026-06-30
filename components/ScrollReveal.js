"use client";
import { useEffect } from "react";

const SELECTOR =
  ".card, .mini, .device-chip, .spec, .plan, .review, .section-head, .glass-panel, .hero-copy";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(SELECTOR));
    els.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("show"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Stagger siblings that share a parent for a cascading reveal.
            const parent = e.target.parentElement;
            const peers = parent
              ? Array.from(parent.children).filter((c) => c.classList.contains("reveal"))
              : [e.target];
            const idx = Math.max(0, peers.indexOf(e.target));
            e.target.style.transitionDelay = `${Math.min(idx, 6) * 80}ms`;
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
