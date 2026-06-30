import { Users, Lock, Infinity, Calendar, Rewind, Globe } from "@/components/icons";

const ITEMS = [
  { Icon: Users, title: "Multi-Profile", text: "Separate watchlists for everyone in the family." },
  { Icon: Lock, title: "Parental Controls", text: "PIN-protected profiles and content filters." },
  { Icon: Infinity, title: "Unlimited VOD", text: "Binge movies and series with no limits." },
  { Icon: Calendar, title: "EPG TV Guide", text: "Full electronic programme guide at a glance." },
  { Icon: Rewind, title: "7-Day Catch-Up", text: "Missed it live? Rewind up to a week back." },
  { Icon: Globe, title: "Multi-Language", text: "Switch audio & UI language instantly." },
];

export default function PowerFeatures() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Power Features</span>
          <h2>Everything that <span className="text-gold">Doubles</span> Your Entertainment</h2>
        </div>
        <div className="grid grid-3">
          {ITEMS.map(({ Icon, title, text }) => (
            <div className="mini" key={title}>
              <div className="icon-badge"><Icon /></div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
