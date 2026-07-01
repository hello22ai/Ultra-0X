import { Check } from "@/components/icons";

const POINTS = [
  "Personalised recommendations",
  "Voice search & smart discovery",
  "Continue watching across devices",
  "One account, up to 5 profiles",
];

export default function AppShowcase() {
  return (
    <section className="section showcase" id="app">
      <div className="container split">
        <div className="split-art">
          <div className="glass-panel">
            <div className="row-head" style={{ padding: "0 2px 14px" }}>
              <span className="rh-t">TV Guide · Today</span>
              <span className="rh-l">7-day catch-up</span>
            </div>
            <div className="epg">
              <div className="epg-row">
                <span className="epg-ch"><span className="epg-logo">SS</span>Star Sports</span>
                <div className="epg-progs">
                  <span className="epg-prog now">India vs Australia<small>now · live</small></span>
                  <span className="epg-prog">Post-Match<small>22:30</small></span>
                  <span className="epg-prog">Highlights<small>23:15</small></span>
                </div>
              </div>
              <div className="epg-row">
                <span className="epg-ch c2"><span className="epg-logo">CN</span>Cinema HD</span>
                <div className="epg-progs">
                  <span className="epg-prog now">Jawan<small>now</small></span>
                  <span className="epg-prog">Pathaan<small>22:45</small></span>
                  <span className="epg-prog">Pushpa 2<small>00:30</small></span>
                </div>
              </div>
              <div className="epg-row">
                <span className="epg-ch c3"><span className="epg-logo">AT</span>Aaj Tak</span>
                <div className="epg-progs">
                  <span className="epg-prog now">Prime Time<small>now</small></span>
                  <span className="epg-prog">Business Aaj Tak<small>22:00</small></span>
                  <span className="epg-prog">Mausam<small>22:30</small></span>
                </div>
              </div>
              <div className="epg-row">
                <span className="epg-ch c4"><span className="epg-logo">KZ</span>Kids Zone</span>
                <div className="epg-progs">
                  <span className="epg-prog now">Chhota Bheem<small>now</small></span>
                  <span className="epg-prog">Motu Patlu<small>21:45</small></span>
                  <span className="epg-prog">Good Night<small>22:15</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="split-copy">
          <span className="kicker">The Player</span>
          <h2>Ultra X Player — <span className="text-gold">Best Streaming App of 2026</span></h2>
          <p>
            Stream, relax and enjoy with your whole family. A clean, modern
            interface with voice-activated search puts everything you love a tap
            away.
          </p>
          <ul className="check-list">
            {POINTS.map((p) => (
              <li key={p}><Check />{p}</li>
            ))}
          </ul>
          <a href="#download" className="btn btn-gold">Get Ultra X Player</a>
        </div>
      </div>
    </section>
  );
}
