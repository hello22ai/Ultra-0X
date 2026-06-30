import AnimatedStat from "@/components/AnimatedStat";
import { Sparkles, Play, Star, Hd, Bolt } from "@/components/icons";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles /> #1 Premium Streaming Player</span>
          <h1>
            Stream Everything in <span className="text-gold">Ultra 4K</span> —
            One Player, Every Device.
          </h1>
          <p className="lead">
            Ultra X Player brings live TV, movies and series together in a
            blazing-fast, buffer-free experience. Switch languages, manage
            profiles and pick up right where you left off.
          </p>
          <div className="hero-cta">
            <a href="#download" className="btn btn-gold btn-lg">
              <Play /> Download Today
            </a>
            <a href="#features" className="btn btn-outline btn-lg">Explore Features</a>
          </div>
          <div className="hero-rating">
            <span className="stars"><Star /><Star /><Star /><Star /><Star /></span>
            <span>Rated <strong>4.9/5</strong> by 50,000+ viewers</span>
          </div>
          <div className="hero-stats">
            <AnimatedStat value={20} suffix="K+" label="Live Channels" />
            <AnimatedStat value={80} suffix="K+" label="Movies & Series" />
            <AnimatedStat value={4} suffix="K" label="Ultra HD" />
            <AnimatedStat value={24} suffix="/7" label="Support" />
          </div>
        </div>

        <div className="hero-art">
          <div className="app-frame">
            <div className="app-screen">
              <div className="app-top">
                <span className="ux-wordmark">ULTRA<b>X</b></span>
                <div className="app-tabs">
                  <span className="app-tab active">Live</span>
                  <span className="app-tab">Movies</span>
                  <span className="app-tab">Sports</span>
                  <span className="app-tab">Kids</span>
                </div>
                <div className="app-profile">
                  <span className="app-pill"></span>
                  <span className="app-av">A</span>
                </div>
              </div>

              <div className="app-featured">
                <div className="feat-badges">
                  <span className="feat-badge live"><span className="pulse"></span>LIVE</span>
                  <span className="feat-badge q">4K</span>
                </div>
                <span className="feat-score">2&nbsp;–&nbsp;1</span>
                <div className="feat-play"><Play /></div>
                <div className="feat-info">
                  <div className="feat-title">Champions Final 2026</div>
                  <div className="feat-meta">
                    <span className="dot">●</span> Sports HD · 2nd Half · 8.4M watching
                  </div>
                </div>
              </div>

              <div className="row-head">
                <span className="rh-t">Continue Watching</span>
                <span className="rh-l">See all</span>
              </div>
              <div className="poster-row">
                <div className="poster">
                  <span className="poster-tag">Drama</span>
                  <span className="poster-title">Crown of Ash</span>
                  <span className="poster-prog"><i style={{ width: "72%" }} /></span>
                </div>
                <div className="poster">
                  <span className="poster-tag">Action</span>
                  <span className="poster-title">Midnight Run</span>
                  <span className="poster-prog"><i style={{ width: "40%" }} /></span>
                </div>
                <div className="poster">
                  <span className="poster-tag">Sci-Fi</span>
                  <span className="poster-title">Last Frontier</span>
                  <span className="poster-prog"><i style={{ width: "18%" }} /></span>
                </div>
                <div className="poster">
                  <span className="poster-tag">Thriller</span>
                  <span className="poster-title">Neon City</span>
                  <span className="poster-prog"><i style={{ width: "55%" }} /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="float-chip tl"><Hd /> 4K HDR 10+</div>
          <div className="float-chip br"><Bolt /> 0% Buffering</div>
        </div>
      </div>
    </section>
  );
}
