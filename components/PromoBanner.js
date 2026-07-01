"use client";
import { useState } from "react";

export default function PromoBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="promo-banner">
      <div className="container promo-inner">
        <p>
          <span className="flash">⚡ FLASH SALE</span> Get a{" "}
          <strong>FREE App + Box</strong> on the Ultra X 2-Year Plan —
          limited time only.
        </p>
        <a href="#pricing" className="promo-cta">Claim Offer</a>
        <button
          className="promo-close"
          aria-label="Close banner"
          onClick={() => setHidden(true)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
