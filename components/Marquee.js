import { Signal } from "@/components/icons";

const GENRES = [
  "Sports", "Movies", "News", "Kids", "Music", "Documentary",
  "Live TV", "Series", "Cricket", "Premier League", "Cinema", "Regional",
];

export default function Marquee() {
  const loop = [...GENRES, ...GENRES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((g, i) => (
          <span className="marquee-pill" key={i}>
            <Signal style={{ width: 16, height: 16, color: "var(--gold-3)" }} />
            {g}
          </span>
        ))}
      </div>
    </div>
  );
}
