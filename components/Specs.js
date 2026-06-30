import { Hd, Bolt, Sparkles, Wifi, Film, Refresh, Cloud, Shield } from "@/components/icons";

const SPECS = [
  { Icon: Hd, big: "4K HDR 10+", sub: "Dolby Vision ready" },
  { Icon: Bolt, big: "0.00%", sub: "Buffering engine" },
  { Icon: Sparkles, big: "AI Search", sub: "Voice & smart picks" },
  { Icon: Wifi, big: "Dual WiFi", sub: "Fast & stable" },
  { Icon: Film, big: "Dolby Audio", sub: "Cinematic sound" },
  { Icon: Refresh, big: "Auto-Update", sub: "Always fresh content" },
  { Icon: Cloud, big: "Cloud Sync", sub: "Resume anywhere" },
  { Icon: Shield, big: "End-to-End", sub: "Secure & private" },
];

export default function Specs() {
  return (
    <section className="section specs">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Under the Hood</span>
          <h2>Powered by <span className="text-gold">AI &amp; Next-Gen Tech</span></h2>
        </div>
        <div className="grid grid-4 spec-grid">
          {SPECS.map(({ Icon, big, sub }) => (
            <div className="spec" key={big}>
              <div className="icon-badge"><Icon /></div>
              <strong>{big}</strong>
              <span>{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
