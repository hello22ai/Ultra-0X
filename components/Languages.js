const LANGS = [
  "Hindi", "English", "Punjabi", "Telugu", "Tamil", "Malayalam",
  "Bengali", "Kannada", "Gujarati", "Marathi", "Urdu", "Arabic",
];

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <div className="section-head" data-ghost="Apnapan">
          <span className="kicker">Your Language</span>
          <h2>Now Watch in Your <span className="text-gold">Preferred Language</span></h2>
          <p className="section-sub">
            Jo bhasha ghar mein boli jaati hai, entertainment bhi usi mein —
            kyunki apni bhasha mein baat hi kuch aur hai.
          </p>
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
