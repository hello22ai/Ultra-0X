import AnimatedStat from "@/components/AnimatedStat";
import HeroPlayer from "@/components/HeroPlayer";
import { Sparkles, Play, Star, Hd, Bolt, ArrowRight } from "@/components/icons";

// Self-hosted imagery for the "Continue Watching" cards (in /public/media — swap later).
const posterBg = (file) => ({
  backgroundImage: `linear-gradient(to top, rgba(8,8,10,.92), rgba(8,8,10,.1) 58%), url(/media/${file})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles /> Namaste 👋 India ka apna streaming player</span>
          <h1>
            Ghar Jaisa <span className="text-gold">Entertainment</span>, Chahe
            Aap Duniya Mein Kahin Bhi Ho.
          </h1>
          <p className="lead">
            Cricket ka match, Ma ke serials, bachchon ke cartoons — aapke poore
            parivaar ka entertainment, ek app mein. Bas plug lagao, Wi-Fi
            connect karo — ho gaya.
          </p>
          <div className="hero-cta">
            <a href="#download" className="btn btn-gold btn-lg">
              <Play /> Download Karein <ArrowRight />
            </a>
            <a href="#features" className="btn btn-outline btn-lg">Explore Features</a>
          </div>
          <p className="cta-note">
            5 minute ka setup · Koi technical jhanjhat nahi · Atak jayein toh
            real insaan madad karega
          </p>
          <div className="hero-rating">
            <span className="stars"><Star /><Star /><Star /><Star /><Star /></span>
            <span>Rated <strong>4.9/5</strong> — 10,000+ happy families ka bharosa</span>
          </div>
          <div className="hero-stats">
            <AnimatedStat value={20} suffix="K+" label="Live Channels" />
            <AnimatedStat value={80} suffix="K+" label="Movies & Series" />
            <AnimatedStat value={4} suffix="K" label="Ultra HD" />
            <AnimatedStat value={24} suffix="/7" label="Real-Human Support" />
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

              <HeroPlayer />

              <div className="row-head">
                <span className="rh-t">Continue Watching</span>
                <span className="rh-l">See all</span>
              </div>
              <div className="poster-row">
                <div className="poster" style={posterBg("mirzapur.svg")}>
                  <span className="poster-tag">Web Series</span>
                  <span className="poster-title">Mirzapur</span>
                  <span className="poster-prog"><i style={{ width: "72%" }} /></span>
                </div>
                <div className="poster" style={posterBg("jawan.svg")}>
                  <span className="poster-tag">Bollywood</span>
                  <span className="poster-title">Jawan</span>
                  <span className="poster-prog"><i style={{ width: "40%" }} /></span>
                </div>
                <div className="poster" style={posterBg("ipl-final.svg")}>
                  <span className="poster-tag">Cricket</span>
                  <span className="poster-title">IPL Final</span>
                  <span className="poster-prog"><i style={{ width: "18%" }} /></span>
                </div>
                <div className="poster" style={posterBg("pushpa.svg")}>
                  <span className="poster-tag">South</span>
                  <span className="poster-title">Pushpa 2</span>
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
