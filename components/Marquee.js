import { Trophy, Film, Newspaper, Star, MusicNote, Globe, Tv } from "@/components/icons";

const GENRES = [
  { name: "Cricket", Icon: Trophy },
  { name: "IPL", Icon: Trophy },
  { name: "Bollywood", Icon: Film },
  { name: "News", Icon: Newspaper },
  { name: "Kids", Icon: Star },
  { name: "Devotional", Icon: MusicNote },
  { name: "Live TV", Icon: Tv },
  { name: "Web Series", Icon: Film },
  { name: "Kabaddi", Icon: Trophy },
  { name: "Regional Cinema", Icon: Film },
  { name: "Music", Icon: MusicNote },
  { name: "Tamil & Telugu", Icon: Globe },
];

export default function Marquee() {
  const loop = [...GENRES, ...GENRES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map(({ name, Icon }, i) => (
          <span className="marquee-item" key={i}>
            <Icon />
            {name}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
