"use client";
import { useRef, useState } from "react";
import { Play } from "@/components/icons";

// Self-hosted royalty-free sample (Big Buck Bunny, Blender Foundation, CC-BY).
// Swap these two files in /public/media for your own clip + still later.
const VIDEO_SRC = "/media/hero-preview.mp4";
const POSTER = "/media/live.jpg";

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
      <span className="feat-score">2&nbsp;–&nbsp;1</span>
      <button type="button" className="feat-play" onClick={play} aria-label="Play preview">
        <Play />
      </button>
      <div className="feat-info">
        <div className="feat-title">Champions Final 2026</div>
        <div className="feat-meta">
          <span className="dot">●</span> Sports HD · 2nd Half · 8.4M watching
        </div>
      </div>
    </div>
  );
}
