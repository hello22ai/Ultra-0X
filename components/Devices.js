import { Android, Apple, Tv, Amazon, Monitor, Box } from "@/components/icons";

const DEVICES = [
  { Icon: Android, name: "Android" },
  { Icon: Apple, name: "iOS / iPhone" },
  { Icon: Tv, name: "Smart TV" },
  { Icon: Amazon, name: "Firestick" },
  { Icon: Monitor, name: "Web / PC" },
  { Icon: Box, name: "Android Box" },
];

export default function Devices() {
  return (
    <section className="section devices" id="devices">
      <div className="container">
        <div className="section-head" data-ghost="Ghar">
          <span className="kicker">Works Everywhere</span>
          <h2>Ek Subscription, <span className="text-gold">Ghar Ki Har Screen</span></h2>
          <p className="section-sub">
            Jo devices ghar mein pehle se hain, unhi par chalega — naya kuch
            khareedne ki zaroorat nahi.
          </p>
        </div>
        <div className="grid grid-6 device-grid">
          {DEVICES.map(({ Icon, name }) => (
            <div className="device-chip" key={name}>
              <Icon />{name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
