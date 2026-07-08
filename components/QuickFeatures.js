import { Headset, Signal, Film, Phone } from "@/components/icons";

const ITEMS = [
  { Icon: Headset, title: "24×7 Human Support", sub: "Live chat pe real insaan" },
  { Icon: Signal, title: "20,000+ Channels", sub: "Har Indian language mein" },
  { Icon: Film, title: "80K+ On-Demand", sub: "Movies & series, har mood ke liye" },
  { Icon: Phone, title: "Free App", sub: "Android, iOS & Smart TV" },
];

export default function QuickFeatures() {
  return (
    <section className="qf-strip" aria-label="Highlights">
      <div className="container">
        <div className="qf-grid">
          {ITEMS.map(({ Icon, title, sub }) => (
            <div className="qf-tile" key={title}>
              <span className="qf-icon"><Icon /></span>
              <span className="qf-text">
                <strong>{title}</strong>
                <small>{sub}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
