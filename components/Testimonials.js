"use client";
import { useEffect, useState } from "react";
import { Star, Check } from "@/components/icons";

const REVIEWS = [
  {
    text: "Switched from my old cable and never looked back. Zero buffering even during the IPL final in 4K — support replied on WhatsApp in under two minutes.",
    name: "Rahul S.",
    meta: "Mumbai · Firestick",
  },
  {
    text: "Setup took five minutes and the TV guide is gorgeous. Every regional channel my parents watch is here, and the kids' PIN lock just works.",
    name: "Priya N.",
    meta: "Bengaluru · Smart TV",
  },
  {
    text: "Catch-up saved me when I missed the India match. All my Telugu and Hindi content in one app — best I've used in years.",
    name: "Arjun R.",
    meta: "Hyderabad · Android",
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
