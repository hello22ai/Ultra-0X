"use client";
import { useState } from "react";
import { SUPPORT_EMAIL } from "@/components/site-config";

const ITEMS = [
  {
    q: "Setup kitna mushkil hai?",
    a: "Bilkul nahi — bas plug lagao, Wi-Fi connect karo, ho gaya. Aur agar kahin atak jayein, live chat pe ek real insaan aapke saath step-by-step setup karwa dega.",
  },
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
        <div className="section-head" data-ghost="Madad">
          <span className="kicker">Support</span>
          <h2>Aapke <span className="text-gold">Sawaal</span>, Humare Jawab</h2>
          <p className="section-sub">
            Jo cheezein log humse sabse zyada poochhte hain — seedhe shabdon
            mein, bina gol-mol ke.
          </p>
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
        <p className="faq-help">
          <span className="online-dot" /> Jawab nahi mila? Real insaan se
          poochhiye — <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
          pe likhiye, aam taur par 24 ghante ke andar jawab milta hai.
        </p>
      </div>
    </section>
  );
}
