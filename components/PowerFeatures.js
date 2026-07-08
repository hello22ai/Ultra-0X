import { Users, Lock, Infinity, Calendar, Rewind, Globe } from "@/components/icons";

const ITEMS = [
  { Icon: Users, title: "Multi-Profile", text: "Papa ki news, bachchon ke cartoons — sabki apni-apni watchlist." },
  { Icon: Lock, title: "Parental Controls", text: "PIN lock lagaiye aur befikar rahiye — bachche wahi dekhenge jo aap chahein." },
  { Icon: Infinity, title: "Unlimited VOD", text: "Binge kijiye bina kisi limit ke — jitna dil kare, utna dekhiye." },
  { Icon: Calendar, title: "EPG TV Guide", text: "Kab, kis channel par kya aa raha hai — ek nazar mein sab saaf." },
  { Icon: Rewind, title: "7-Day Catch-Up", text: "Live miss ho gaya? Koi baat nahi — poora hafta peeche jaake dekhiye." },
  { Icon: Globe, title: "Multi-Language", text: "Audio aur app ki bhasha, ek tap mein badal jaati hai." },
];

export default function PowerFeatures() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-ghost="Sukoon">
          <span className="kicker">Power Features</span>
          <h2>Everything that <span className="text-gold">Doubles</span> Your Entertainment</h2>
          <p className="section-sub">
            Dadi ke bhajan se lekar bachchon ke cartoons tak — ghar ke har
            member ke liye kuch khaas.
          </p>
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
