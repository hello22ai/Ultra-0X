import { Headset, Signal, Film, Bolt, Tv, Home, Trophy, Sparkles, MusicNote } from "@/components/icons";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head" data-ghost="Parivaar">
          <span className="kicker">Why Ultra X</span>
          <h2>Ek App, <span className="text-gold">Poore Parivaar</span> Ki Pasand</h2>
          <p className="section-sub">
            Hum features nahi ginate, ghar ka sukoon banate hain — jo cheez
            aapke parivaar ke kaam aaye, bas wahi.
          </p>
        </div>
        <div className="bento">
          <article className="card feature">
            <div className="icon-badge"><Signal /></div>
            <h3>20,000+ Live Channels</h3>
            <p>
              Subah ke bhajan se raat ki news debate tak — Hindi, Tamil,
              Telugu, Punjabi, Bangla, Marathi... jo channel ghar ke TV par
              chalta tha, woh sab yahan. Sabki pasand, ek hi jagah.
            </p>
            <div className="chan-cloud" aria-hidden="true">
              {["Star Plus", "Aaj Tak", "Colors", "Star Sports", "Zee TV", "Sony SAB", "Sun TV", "ETV Telugu", "PTC Punjabi", "Zee Bangla"].map((c) => (
                <span key={c}>{c}</span>
              ))}
              <span className="more">+ hazaaron aur</span>
            </div>
            <div className="feature-big-art" aria-hidden="true">
              <div className="top10">
                <div className="top10-h">
                  <span className="t"><Home /> Aaj Ghar Mein</span>
                  <span className="b">Ek hi subscription</span>
                </div>
                <div className="t10-item">
                  <span className="t10-ico"><Trophy /></span>
                  <span className="t10-mid"><span className="t10-title">Papa — India vs Australia</span><span className="t10-bar"><i style={{ width: "94%" }} /></span></span>
                  <span className="t10-views">LIVE</span>
                </div>
                <div className="t10-item">
                  <span className="t10-ico"><Tv /></span>
                  <span className="t10-mid"><span className="t10-title">Ma — shaam ke serials</span><span className="t10-bar"><i style={{ width: "72%" }} /></span></span>
                  <span className="t10-views">7:30 PM</span>
                </div>
                <div className="t10-item">
                  <span className="t10-ico"><Sparkles /></span>
                  <span className="t10-mid"><span className="t10-title">Bachhe — cartoons, homework ke baad</span><span className="t10-bar"><i style={{ width: "48%" }} /></span></span>
                  <span className="t10-views">5:00 PM</span>
                </div>
                <div className="t10-item">
                  <span className="t10-ico"><MusicNote /></span>
                  <span className="t10-mid"><span className="t10-title">Dadi — subah ke bhajan</span><span className="t10-bar"><i style={{ width: "62%" }} /></span></span>
                  <span className="t10-views">6:00 AM</span>
                </div>
              </div>
            </div>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Headset /></div>
            <h3>24×7 Support</h3>
            <p>Raat ko setup atka ho ya Sunday ko remote — message kariye, jawab ek real insaan dega. Bot nahi, bahane nahi.</p>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Film /></div>
            <h3>On-Demand Library</h3>
            <p>Shukravaar ki nayi release ho ya purani classic — 80,000+ movies aur series, sab plan mein shaamil. Alag se kuch nahi lagta.</p>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Bolt /></div>
            <h3>Zero Buffering</h3>
            <p>Match ka aakhri over ho ya serial ka climax — stream aapke internet ke hisaab se khud adjust hoti hai, taaki picture chalti rahe.</p>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Tv /></div>
            <h3>5-Minute Setup</h3>
            <p>App kholiye, login kijiye, TV chalu. Kahin atkein to WhatsApp par step-by-step saath — pehli baar wale bhi aaram se kar lete hain.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
