"use client";
import { useState } from "react";

const ITEMS = [
  {
    q: "Do you have Indian channels and regional languages?",
    a: "Yes — thousands of Indian channels including Hindi, Punjabi, Tamil, Telugu, Malayalam, Bengali and more, plus live cricket, Bollywood, news and devotional content.",
  },
  {
    q: "Which devices does Ultra X Player work on?",
    a: "Android phones, iPhones, Smart TVs, Amazon Firestick, Android boxes and any modern web browser. One account works across all of them.",
  },
  {
    q: "What's the difference between the App and Box plans?",
    a: "The App plan installs on a device you already own. The Box plans include an Ultra X Box ready to plug into your TV — pick the plan that matches your devices and number of logins.",
  },
  {
    q: "Is 4K streaming included in every plan?",
    a: "Absolutely. Every plan includes full 4K Ultra HD and all channels — plans differ only by duration, device logins and whether a Box is included.",
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
