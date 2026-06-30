import { Check } from "@/components/icons";

const PLANS = [
  {
    name: "Monthly", sub: "Flexible, no commitment",
    cur: "$", price: "12", per: "/mo",
    features: ["All channels & VOD", "4K Ultra HD", "2 profiles", "Email support"],
    cta: "Choose Monthly", featured: false,
  },
  {
    name: "Annual", sub: "Best value — save 38%",
    cur: "$", price: "89", per: "/yr",
    features: ["Everything in Monthly", "5 profiles", "7-day catch-up", "Priority 24×7 support", "+3 months free"],
    cta: "Get Annual", featured: true,
  },
  {
    name: "Lifetime", sub: "Pay once, watch forever",
    cur: "$", price: "249", per: "once",
    features: ["Everything, forever", "Unlimited profiles", "Early access features", "VIP support line"],
    cta: "Go Lifetime", featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Plans</span>
          <h2>Simple, <span className="text-gold">Honest</span> Pricing</h2>
          <p className="section-sub">Cancel anytime. All plans include every feature.</p>
        </div>
        <div className="grid grid-3 plans">
          {PLANS.map((p) => (
            <article className={`plan${p.featured ? " featured" : ""}`} key={p.name}>
              {p.featured && <div className="badge">★ Most Popular</div>}
              <h3>{p.name}</h3>
              <div className="plan-sub">{p.sub}</div>
              <div className="price">
                <span className="cur">{p.cur}</span>{p.price}
                <span className="per">{p.per}</span>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><Check />{f}</li>
                ))}
              </ul>
              <a
                href="#download"
                className={`btn btn-block ${p.featured ? "btn-gold" : "btn-outline"}`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
