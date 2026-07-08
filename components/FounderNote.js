import { Headset, Check } from "@/components/icons";
import { SUPPORT_EMAIL } from "@/components/site-config";

const PROMISES = [
  "Aapki baat ek insaan sunta hai — bot ya recording nahi",
  "Hindi ya English — jis mein aap comfortable hain",
  "Install se setup tak, step-by-step saath — TV expert hona zaroori nahi",
];

export default function FounderNote() {
  return (
    <section className="section founder" id="story">
      <div className="container split founder-split">
        <div className="founder-card">
          <span className="kicker">Humari Kahani</span>
          <h2>Ultra X <span className="text-gold">Kyun</span> Banaya?</h2>
          <blockquote className="founder-quote">
            Videsh mein rehte hue humein sabse zyada apne ghar ke channels ki
            kami mehsoos hoti thi — cricket ki commentary, shaam ki news, Ma ke
            serials. Woh sirf TV nahi, ghar ki yaad hai. Isliye humne Ultra X
            banaya: taaki aapka ghar ka entertainment hamesha aapke saath rahe,
            aur zaroorat padne par ek real insaan aapki madad kare.
          </blockquote>
          <p className="founder-sign">— Team Ultra X</p>
        </div>

        <div className="support-card">
          <div className="support-head">
            <span className="icon-badge"><Headset /></span>
            <div>
              <h3>Madad Chahiye? Seedha Humse Poochiye</h3>
              <p>Koi ticket number nahi, koi hold music nahi.</p>
            </div>
          </div>
          <ul className="check-list">
            {PROMISES.map((p) => (
              <li key={p}><Check />{p}</li>
            ))}
          </ul>
          <div className="wa-preview" aria-hidden="true">
            <span className="wa-dot" /> Namaste! Boliye, kaise madad karein?
          </div>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="btn btn-gold btn-block">
            <Headset /> Contact Support
          </a>
          <p className="support-note">
            {SUPPORT_EMAIL} · aam taur par 24 ghante ke andar jawab
          </p>
        </div>
      </div>
    </section>
  );
}
