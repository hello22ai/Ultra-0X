import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/components/site-config";

export const metadata = {
  title: "Terms & Conditions — Ultra X Player",
  description:
    "Terms & Conditions for Ultra X Player. Read the rules for using the app, subscriptions, devices, refunds, and user responsibilities.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section policy">
          <div className="container narrow">
            <div className="section-head">
              <span className="kicker">Legal</span>
              <h2>Terms &amp; Conditions</h2>
              <p className="section-sub">
                Please read these terms carefully before using Ultra X Player.
              </p>
            </div>

            <article className="policy-body">
              <p className="policy-updated">Last Updated: July 8, 2026</p>

              <p>
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
                use of the Ultra X Player application and related services
                (&ldquo;the App&rdquo;), developed by XtecGlobal (&ldquo;the
                Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
                downloading, installing, or using the App, or by purchasing any
                plan or device from us, you agree to these Terms. If you do not
                agree, please do not use the App.
              </p>

              <h3>1. What Ultra X Player Is</h3>
              <p>
                Ultra X Player is an audio/video multimedia player that
                provides streaming solutions for VOD (Video On Demand) and live
                streams using formats like m3u playlists and other video
                formats. The App itself does not provide, host, or distribute
                any digital video content; it solely serves as a tool for users
                to stream their own content.
              </p>

              <h3>2. User Responsibility for Content</h3>
              <p>
                You are solely responsible for the content you access, load, or
                stream through the App, and for ensuring that you have the
                legal right to do so in your country. We do not endorse,
                verify, or take responsibility for any third-party content
                played through the App. Any use of the App to access content
                unlawfully is strictly your own responsibility.
              </p>

              <h3>3. Accounts &amp; Device Logins</h3>
              <ul>
                <li>
                  Each plan allows a fixed number of device logins, as
                  described on the pricing page at the time of purchase.
                </li>
                <li>
                  Your login credentials are for your household&rsquo;s
                  personal use only. Sharing, reselling, or distributing
                  credentials outside your household may result in suspension
                  of service.
                </li>
                <li>
                  You are responsible for keeping your credentials secure.
                </li>
              </ul>

              <h3>4. Plans, Payments &amp; Renewals</h3>
              <ul>
                <li>
                  Plan features, prices, and durations are as displayed at the
                  time of purchase. Prices may change for future purchases, but
                  an active plan&rsquo;s price will not change mid-term.
                </li>
                <li>
                  Plans do not renew automatically unless explicitly stated at
                  purchase. We will contact you before your plan expires.
                </li>
                <li>
                  Promotional offers (e.g. free app with a box plan) apply only
                  for the period and conditions stated in the offer.
                </li>
              </ul>

              <h3>5. Hardware (Ultra X Box)</h3>
              <ul>
                <li>
                  Boxes are covered against manufacturing defects. If your box
                  arrives damaged or stops working due to a manufacturing
                  fault, contact support and we will repair or replace it.
                </li>
                <li>
                  Physical damage, water damage, or damage caused by tampering
                  or unauthorized repair is not covered.
                </li>
              </ul>

              <h3>6. Refunds &amp; Cancellations</h3>
              <p>
                If the service does not work on your device and our support
                team is unable to resolve the issue, contact us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> — we
                will review refund requests on a case-by-case basis. Refund
                eligibility and timelines communicated at the time of purchase
                take precedence.
              </p>

              <h3>7. Acceptable Use</h3>
              <p>You agree not to:</p>
              <ul>
                <li>
                  Reverse-engineer, modify, or redistribute the App or its
                  components.
                </li>
                <li>
                  Use the App or our services to infringe any third party&rsquo;s
                  rights or violate any applicable law.
                </li>
                <li>
                  Resell or commercially exploit the App or your subscription
                  without a written reseller agreement with us.
                </li>
              </ul>

              <h3>8. Availability &amp; Changes to the Service</h3>
              <p>
                We work to keep the App available and reliable, but we do not
                guarantee uninterrupted service. Streaming quality depends on
                your internet connection and device. We may update, improve, or
                discontinue features of the App with reasonable notice where
                possible.
              </p>

              <h3>9. Intellectual Property</h3>
              <p>
                The App, its design, branding, and all related materials are
                the property of the Company. These Terms give you a personal,
                non-transferable, non-exclusive licence to use the App; they do
                not transfer any ownership rights to you.
              </p>

              <h3>10. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, the Company is not
                liable for indirect, incidental, or consequential damages
                arising from your use of the App, including loss of data or
                interruption of service. Our total liability for any claim is
                limited to the amount you paid us in the twelve months before
                the claim arose.
              </p>

              <h3>11. Termination</h3>
              <p>
                We may suspend or terminate access to the App if you breach
                these Terms, including misuse of credentials or unlawful use of
                the service. You may stop using the App at any time.
              </p>

              <h3>12. Changes to These Terms</h3>
              <p>
                We may update these Terms from time to time. Changes will be
                communicated by updating the &ldquo;Last Updated&rdquo; date at
                the top of this page. Continued use of the App after changes
                means you accept the updated Terms.
              </p>

              <h3>13. Governing Law</h3>
              <p>
                These Terms are governed by the laws of India. Any disputes
                will be subject to the exclusive jurisdiction of the courts of
                India.
              </p>

              <h3>14. Contact Us</h3>
              <p>
                For any questions about these Terms, contact us at:{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </p>

              <p>
                By using Ultra X Player, you acknowledge that you have read and
                understood these Terms &amp; Conditions. Also see our{" "}
                <a href="/policy">Privacy Policy</a>.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
