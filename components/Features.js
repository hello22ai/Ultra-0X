import { Headset, Signal, Film, Bolt } from "@/components/icons";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Why Ultra X</span>
          <h2>Built for the <span className="text-gold">Ultimate</span> Viewing Experience</h2>
        </div>
        <div className="bento">
          <article className="card feature">
            <div className="icon-badge"><Signal /></div>
            <h3>20,000+ Live Channels</h3>
            <p>
              Sports, news, kids, movies and regional content from around the
              world — all in crystal-clear quality, streamed live with an
              adaptive engine that never drops a frame.
            </p>
            <div className="feature-big-art" aria-hidden="true">
              <div className="top10">
                <div className="top10-h">
                  <span className="t">🔥 Trending Today</span>
                  <span className="b">Live</span>
                </div>
                <div className="t10-item">
                  <span className="t10-rank">1</span>
                  <span className="t10-mid"><span className="t10-title">Champions Final 2026</span><span className="t10-bar"><i style={{ width: "94%" }} /></span></span>
                  <span className="t10-views">8.4M</span>
                </div>
                <div className="t10-item">
                  <span className="t10-rank">2</span>
                  <span className="t10-mid"><span className="t10-title">Crown of Ash · S2</span><span className="t10-bar"><i style={{ width: "76%" }} /></span></span>
                  <span className="t10-views">3.1M</span>
                </div>
                <div className="t10-item">
                  <span className="t10-rank">3</span>
                  <span className="t10-mid"><span className="t10-title">World Tonight</span><span className="t10-bar"><i style={{ width: "58%" }} /></span></span>
                  <span className="t10-views">1.9M</span>
                </div>
              </div>
            </div>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Headset /></div>
            <h3>24×7 Support</h3>
            <p>Real human experts on live chat, WhatsApp and email — any time, any day.</p>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Film /></div>
            <h3>On-Demand Library</h3>
            <p>A massive VOD catalogue with new movies and series added every week.</p>
          </article>
          <article className="card feature">
            <div className="icon-badge"><Bolt /></div>
            <h3>Zero Buffering</h3>
            <p>Smart streaming keeps playback smooth even on slower networks.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
