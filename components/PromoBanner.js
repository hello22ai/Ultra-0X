"use client";

const MESSAGES = [
  "⚡ FLASH SALE — FREE App + Box on the Ultra X 2-Year Plan",
  "📺 20,000+ live channels — cricket, Bollywood, news, kids & devotional",
  "💬 Real insaan, real madad — 24×7 support",
  "🏠 Ghar jaisa entertainment, duniya mein kahin bhi",
];

export default function PromoBanner() {
  const loop = [...MESSAGES, ...MESSAGES];
  return (
    <div className="promo-banner">
      <div className="promo-inner">
        <div className="promo-marquee" aria-label={MESSAGES.join(" · ")}>
          <div className="promo-track" aria-hidden="true">
            {loop.map((m, i) => (
              <span className="promo-msg" key={i}>{m}</span>
            ))}
          </div>
        </div>
        <a href="#pricing" className="promo-cta">Claim Offer</a>
      </div>
    </div>
  );
}
