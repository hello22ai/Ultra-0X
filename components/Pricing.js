import { Check } from "@/components/icons";

const PLANS = [
  {
    name: "App Only", sub: "Stream on your own device",
    cur: "$", price: "180", per: "/yr",
    features: ["App for 1 year", "1 device login", "All channels & VOD", "4K Ultra HD"],
    cta: "Get App Plan", featured: false,
  },
  {
    name: "Box + App", sub: "The complete setup",
    cur: "$", price: "220", per: "/yr",
    features: ["1 Ultra X Box included", "App for 1 year", "2 device logins", "All channels & VOD"],
    cta: "Get Box + App", featured: false,
  },
  {
    name: "2-Year Combo", sub: "Best value — save more",
    cur: "$", price: "400", per: "/2yr",
    features: ["2-year subscription", "FREE App included", "1 Ultra X Box included", "2 device logins"],
    cta: "Get 2-Year Combo", featured: true,
  },
  {
    name: "Family Multi", sub: "For the whole household",
    cur: "$", price: "500", per: "/2yr",
    features: ["2 Ultra X Boxes + 1 App", "Same-house multi device", "3 device logins", "2-year subscription"],
    cta: "Get Family Plan", featured: false,
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
        <div className="grid grid-4 plans">
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
