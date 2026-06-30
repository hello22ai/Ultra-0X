import { Phone, Apple, Tv, Flame, Monitor, Box } from "@/components/icons";

const DEVICES = [
  { Icon: Phone, name: "Android" },
  { Icon: Apple, name: "iOS / iPhone" },
  { Icon: Tv, name: "Smart TV" },
  { Icon: Flame, name: "Firestick" },
  { Icon: Monitor, name: "Web / PC" },
  { Icon: Box, name: "Android Box" },
];

export default function Devices() {
  return (
    <section className="section devices" id="devices">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Works Everywhere</span>
          <h2>One Subscription, <span className="text-gold">Every Screen</span></h2>
          <p className="section-sub">Download Ultra X Player on the devices you already own.</p>
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
