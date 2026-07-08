"use client";
import { useEffect } from "react";

const SELECTOR =
  ".card, .mini, .device-chip, .spec, .plan, .section-head, .glass-panel, .hero-copy, .qf-tile, .tech-pill, .founder-card, .support-card, .reviews-viewport";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(SELECTOR));

    // Once the reveal transition finishes, strip every reveal style so the
    // element is guaranteed to land on the stylesheet defaults (opacity:1,
    // filter:none) and its own hover transitions take over again.
    const settle = (el) => {
      el.classList.remove("reveal", "show");
      el.style.removeProperty("transition-delay");
    };
    const show = (el, delay = 0) => {
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add("show");
      const tid = setTimeout(() => settle(el), 900 + delay); // safety net if transitionend never fires
      el.addEventListener(
        "transitionend",
        () => {
          clearTimeout(tid);
          settle(el);
        },
        { once: true }
      );
    };

    if (!("IntersectionObserver" in window)) return;

    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          // Stagger siblings that share a parent for a cascading reveal.
          const parent = e.target.parentElement;
          const peers = parent
            ? Array.from(parent.children).filter((c) => c.classList.contains("reveal"))
            : [e.target];
          const idx = Math.max(0, peers.indexOf(e.target));
          show(e.target, Math.min(idx, 6) * 80);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      els.forEach(settle);
    };
  }, []);

  return null;
}
