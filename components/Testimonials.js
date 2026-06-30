"use client";
import { useEffect, useState } from "react";
import { Star, Check } from "@/components/icons";

const REVIEWS = [
  {
    text: "Switched from my old box and never looked back. Zero buffering even on 4K — the support team replied in under two minutes.",
    name: "Rayyan S.",
    meta: "Manchester, UK · Firestick",
  },
  {
    text: "Setup took five minutes and the EPG guide is gorgeous. Whole family has their own profile now and the kids' PIN lock just works.",
    name: "Tanu N.",
    meta: "Toronto, CA · Smart TV",
  },
  {
    text: "Catch-up saved me when I missed the final. Best streaming app I've used in years — and I've tried most of them.",
    name: "Shonin N.",
    meta: "Sydney, AU · Android",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width:640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const t = setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, [isMobile]);

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Loved by Viewers</span>
          <h2>Real Stories from <span className="text-gold">Ultra X</span> Users</h2>
        </div>
        <div className="reviews">
          {REVIEWS.map((r, i) => (
            <figure className={`review${isMobile && i === active ? " active" : ""}`} key={i}>
              <div className="review-head">
                <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
                <span className="verified"><Check /> Verified</span>
              </div>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="avatar">{r.name.charAt(0)}</span>
                <span className="who">
                  <span className="nm">{r.name}</span>
                  <span className="meta">{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="reviews-dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={i === active ? "active" : ""}
              aria-label={`Review ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
