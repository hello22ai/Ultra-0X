"use client";
import { useEffect, useRef, useState } from "react";
import { Star, Check, ArrowRight } from "@/components/icons";
import { REVIEWS_URL } from "@/components/site-config";

// Real customer reviews only — never add entries that didn't come from an
// actual customer. To show a real face, drop the photo in /public/media/avatars
// and set `img: "/media/avatars/<file>"` (falls back to a gold initial).
const REVIEWS = [
  {
    text: "Switched from my old cable and never looked back. Zero buffering even during the IPL final in 4K — support replied on WhatsApp in under two minutes.",
    name: "Rahul S.",
    city: "Mumbai",
    device: "Firestick",
    img: null,
  },
  {
    text: "Setup took five minutes and the TV guide is gorgeous. Every regional channel my parents watch is here, and the kids' PIN lock just works.",
    name: "Priya N.",
    city: "Bengaluru",
    device: "Smart TV",
    img: null,
  },
  {
    text: "Catch-up saved me when I missed the India match. All my Telugu and Hindi content in one app — best I've used in years.",
    name: "Arjun R.",
    city: "Hyderabad",
    device: "Android",
    img: null,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const maxIndex = Math.max(0, REVIEWS.length - perPage);

  useEffect(() => {
    const update = () =>
      setPerPage(window.innerWidth < 700 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Clamp during render so a perPage change never leaves us past the end.
  const current = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    timer.current = setInterval(
      () => setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i, maxIndex) + 1)),
      5000
    );
    return () => clearInterval(timer.current);
  }, [paused, maxIndex]);

  // Arrows clamp at the ends — no wrap-around, so "next" never jumps back
  // to the first page. Only the autoplay timer loops.
  const go = (dir) =>
    setIndex(() => Math.max(0, Math.min(maxIndex, current + dir)));

  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <div className="section-head" data-ghost="Pyaar">
          <span className="kicker">Loved by Families</span>
          <h2>Asli Log, <span className="text-gold">Asli Kahaniyaan</span></h2>
          <p className="section-sub">
            Har review ek real customer ka hai — hum fake reviews nahi chhaapte.
          </p>
        </div>

        <div
          className="reviews-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="rev-arrow prev"
            aria-label="Previous reviews"
            onClick={() => go(-1)}
            disabled={current === 0}
          >
            <ArrowRight style={{ transform: "rotate(180deg)" }} />
          </button>

          <div className="reviews-viewport">
            <div
              className="reviews-track"
              style={{ transform: `translateX(-${current * (100 / perPage)}%)` }}
            >
              {REVIEWS.map((r, i) => (
                <div
                  className="review-slide"
                  style={{ flex: `0 0 ${100 / perPage}%` }}
                  key={i}
                >
                  <figure className="review">
                    <div className="review-head">
                      <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
                      <span className="verified"><Check /> Verified Customer</span>
                    </div>
                    <blockquote>{r.text}</blockquote>
                    <figcaption>
                      {r.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="avatar avatar-img" src={r.img} alt={r.name} />
                      ) : (
                        <span className="avatar">{r.name.charAt(0)}</span>
                      )}
                      <span className="who">
                        <span className="nm">{r.name}</span>
                        <span className="meta">{r.city} · {r.device}</span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            className="rev-arrow next"
            aria-label="Next reviews"
            onClick={() => go(1)}
            disabled={current === maxIndex}
          >
            <ArrowRight />
          </button>
        </div>

        <div className="reviews-dots">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={i === current ? "active" : ""}
              aria-label={`Reviews page ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="center">
          <a href={REVIEWS_URL} className="btn btn-outline">
            View All Reviews <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
