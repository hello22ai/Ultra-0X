import NewsletterForm from "@/components/NewsletterForm";
import { Facebook, Instagram, Youtube, XLogo, Heart } from "@/components/icons";
import { SUPPORT_EMAIL } from "@/components/site-config";

const COLS = [
  {
    title: "Product",
    links: [
      ["Features", "/#features"],
      ["Devices", "/#devices"],
      ["Pricing", "/#pricing"],
      ["Download", "/#download"],
    ],
  },
  {
    title: "Support",
    links: [
      ["FAQs", "/#faq"],
      ["Our Story", "/#story"],
      ["Setup Guide", "/#faq"],
      ["Email Us", `mailto:${SUPPORT_EMAIL}`],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/#story"],
      ["Become a Reseller", "#"],
      ["Privacy Policy", "/policy"],
      ["Terms & Conditions", "#"],
    ],
  },
];

const SOCIAL = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: XLogo, label: "X" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/logo-onlight.png" alt="Ultra X Player" className="foot-logo" />
          <p>
            Ghar jaisa entertainment, har screen par — ek chhoti si team, jo
            aapke ghar ke liye kaam karti hai. Ultra X Player provides
            streaming software only — users are responsible for accessing
            content lawfully.
          </p>
          <div className="social">
            {SOCIAL.map(({ Icon, label }) => (
              <a href="#" aria-label={label} key={label}><Icon /></a>
            ))}
          </div>
        </div>

        {COLS.map((c) => (
          <div className="foot-col" key={c.title}>
            <h4>{c.title}</h4>
            {c.links.map(([label, href]) => (
              <a
                href={href}
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        ))}

        <div className="foot-col newsletter">
          <h4>Newsletter</h4>
          <p>Offers &amp; new content, straight to your inbox.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Ultra X Player. All rights reserved.</p>
          <p className="made-with">
            Made with <Heart style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "-2px" }} /> for
            the Indian community.
          </p>
          <p className="foot-links">
            <a href="/policy">Privacy</a> · <a href="#">Terms</a> ·{" "}
            <a href="#">Disclaimer</a> · <a href="#">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
