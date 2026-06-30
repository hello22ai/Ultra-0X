import { Trophy, Film, Newspaper, Star, MusicNote, Globe, Tv } from "@/components/icons";

const GENRES = [
  { name: "Sports", Icon: Trophy },
  { name: "Movies", Icon: Film },
  { name: "News", Icon: Newspaper },
  { name: "Kids", Icon: Star },
  { name: "Music", Icon: MusicNote },
  { name: "Documentary", Icon: Globe },
  { name: "Live TV", Icon: Tv },
  { name: "Series", Icon: Film },
  { name: "Cricket", Icon: Trophy },
  { name: "Premier League", Icon: Trophy },
  { name: "Cinema", Icon: Film },
  { name: "Regional", Icon: Globe },
];

export default function Marquee() {
  const loop = [...GENRES, ...GENRES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map(({ name, Icon }, i) => (
          <span className="marquee-pill" key={i}>
            <Icon style={{ width: 16, height: 16, color: "var(--gold-3)" }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
