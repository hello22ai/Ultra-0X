import { GooglePlay, Apple } from "@/components/icons";
import { SUPPORT_EMAIL } from "@/components/site-config";

const STORES = [
  {
    Icon: GooglePlay,
    small: "GET IT ON",
    strong: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.ultrax",
  },
  { Icon: Apple, small: "Download on the", strong: "App Store", href: "#" },
];

export default function DownloadCTA() {
  return (
    <section className="section download-cta" id="download">
      <div className="container">
        <div className="cta-box">
          <h2>Aaj Hi <span className="text-gold">Ultra X</span> Ghar Le Aaiye</h2>
          <p>
            App download karein ya Ultra X Box order karein — hazaaron Indian
            channels, bas ek tap door. Setup mein dikkat ho? Humari support
            team haazir hai.
          </p>
          <div className="store-buttons">
            {STORES.map(({ Icon, small, strong, href }) => (
              <a
                href={href}
                className="store-btn"
                key={strong}
                {...(href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <Icon />
                <div>
                  <small>{small}</small>
                  <strong>{strong}</strong>
                </div>
              </a>
            ))}
          </div>
          <p className="human-help">
            <span className="online-dot" /> Humari team online hai —{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>likhiye</a>, ek real insaan
            aapka setup karwa dega.
          </p>
        </div>
      </div>
    </section>
  );
}
