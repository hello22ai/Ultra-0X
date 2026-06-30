"use client";

export default function NewsletterForm() {
  return (
    <form className="news-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="you@email.com" aria-label="Email" required />
      <button className="btn btn-gold" type="submit">Submit</button>
    </form>
  );
}
