import { Play, Apple, Flame } from "@/components/icons";

const STORES = [
  { Icon: Play, small: "GET IT ON", strong: "Google Play" },
  { Icon: Apple, small: "Download on the", strong: "App Store" },
  { Icon: Flame, small: "Available on", strong: "Fire TV" },
];

export default function DownloadCTA() {
  return (
    <section className="section download-cta" id="download">
      <div className="container">
        <div className="cta-box">
          <h2>Get <span className="text-gold">Ultra X Player</span> Today</h2>
          <p>Download now and start your free trial. No box, no cables — just press play.</p>
          <div className="store-buttons">
            {STORES.map(({ Icon, small, strong }) => (
              <a href="#" className="store-btn" key={strong}>
                <Icon />
                <div>
                  <small>{small}</small>
                  <strong>{strong}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
