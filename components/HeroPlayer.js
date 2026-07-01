"use client";
import { useRef, useState } from "react";
import { Play } from "@/components/icons";

// Self-hosted royalty-free sample (Big Buck Bunny, Blender Foundation, CC-BY).
// Swap these two files in /public/media for your own clip + still later.
const VIDEO_SRC = "/media/hero-preview.mp4";
const POSTER = "/media/live-cricket.svg";

export default function HeroPlayer() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    videoRef.current?.play();
  };

  return (
    <div className={`app-featured${started ? " playing" : ""}`}>
      <video
        ref={videoRef}
        className="feat-video"
        src={VIDEO_SRC}
        poster={POSTER}
        preload="none"
        playsInline
        controls={started}
        onPlay={() => setStarted(true)}
      />
      <div className="feat-badges">
        <span className="feat-badge live"><span className="pulse"></span>LIVE</span>
        <span className="feat-badge q">4K</span>
      </div>
      <span className="feat-score">IND&nbsp;186/4</span>
      <button type="button" className="feat-play" onClick={play} aria-label="Play preview">
        <Play />
      </button>
      <div className="feat-info">
        <div className="feat-title">India vs Australia · Final</div>
        <div className="feat-meta">
          <span className="dot">●</span> Star Sports · 2nd Innings · 8.4M watching
        </div>
      </div>
    </div>
  );
}
