"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const HEADER_OFFSET = -104; // keep in sync with scroll-padding-top in globals.css

// Site-wide Lenis smooth scrolling. Also intercepts same-page hash links
// ("#faq" and "/#faq" alike) so header/footer section links glide instead
// of jumping; cross-page links fall through to normal navigation.
export default function SmoothScroll() {
  useEffect(() => {
    // Respect reduced-motion: native jumps + scroll-padding-top handle anchors.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1 });

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const link = e.target.closest?.("a[href*='#']");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(url.hash.slice(1));
      if (!target) return;
      e.preventDefault();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
    };
    document.addEventListener("click", onClick);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
