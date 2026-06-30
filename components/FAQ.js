"use client";
import { useState } from "react";

const ITEMS = [
  {
    q: "Which devices does Ultra X Player work on?",
    a: "Android phones, iPhones, Smart TVs, Amazon Firestick, Android boxes and any modern web browser. One account works across all of them.",
  },
  {
    q: "Do I need a separate device to use it?",
    a: "No. Ultra X Player is a software app — just install it on a device you already own and sign in.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly and annual plans can be cancelled anytime from your account with no hidden fees.",
  },
  {
    q: "Is 4K streaming included in every plan?",
    a: "Absolutely. Every plan includes full 4K Ultra HD and all features — the only difference is profiles and support priority.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);
  return (
    <section className="section faq" id="faq">
      <div className="container narrow">
        <div className="section-head">
          <span className="kicker">Support</span>
          <h2>Frequently Asked <span className="text-gold">Questions</span></h2>
        </div>
        <div className="accordion">
          {ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div className={`acc-item${isOpen ? " open" : ""}`} key={i}>
                <button
                  className="acc-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className="acc-ico">+</span>
                </button>
                <div
                  className="acc-a"
                  style={{ maxHeight: isOpen ? "240px" : "0" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
