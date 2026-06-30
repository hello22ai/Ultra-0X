const LANGS = [
  "Hindi", "English", "Punjabi", "Telugu", "Tamil", "Malayalam",
  "Bengali", "Kannada", "Gujarati", "Marathi", "Urdu", "Arabic",
];

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Your Language</span>
          <h2>Now Watch in Your <span className="text-gold">Preferred Language</span></h2>
        </div>
        <div className="lang-grid">
          {LANGS.map((l) => (<span key={l}>{l}</span>))}
        </div>
        <div className="center">
          <a href="#download" className="btn btn-outline">Start Watching Today</a>
        </div>
      </div>
    </section>
  );
}
