import NewsletterForm from "@/components/NewsletterForm";
import { Facebook, Instagram, Youtube, XLogo } from "@/components/icons";

const COLS = [
  { title: "Product", links: ["Features", "Devices", "Pricing", "Download"] },
  { title: "Support", links: ["FAQs", "Setup Guide", "Live Chat", "Contact Us"] },
  { title: "Company", links: ["About Us", "Become a Reseller", "Privacy Policy", "Terms & Conditions"] },
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
          <img src="/logo.svg" alt="Ultra X Player" className="foot-logo" />
          <p>
            Premium streaming, every screen. Ultra X Player provides streaming
            software only — users are responsible for accessing content lawfully.
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
            {c.links.map((l) => (<a href="#" key={l}>{l}</a>))}
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
          <p className="foot-links">
            <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
            <a href="#">Disclaimer</a> · <a href="#">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
