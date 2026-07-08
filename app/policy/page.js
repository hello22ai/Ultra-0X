import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/components/site-config";

export const metadata = {
  title: "Privacy Policy — Ultra X Player",
  description:
    "Privacy Policy for Ultra X Player. Learn how the app handles data, permissions, and third-party services, and how we comply with GDPR, CCPA/CPRA, and CalOPPA.",
};

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section policy">
          <div className="container narrow">
            <div className="section-head">
              <span className="kicker">Legal</span>
              <h2>Privacy Policy</h2>
              <p className="section-sub">
                Seamlessly Access Your Favorite Content Across Devices
              </p>
            </div>

            <article className="policy-body">
              <p className="policy-updated">Last Updated: November 20, 2024</p>

              <p>
                Ultra X Player (&ldquo;the App&rdquo;), developed by XtecGlobal
                (&ldquo;the Company&rdquo;), is committed to protecting your
                privacy and ensuring compliance with applicable data protection
                laws, including GDPR, CCPA/CPRA, and CalOPPA. This Privacy
                Policy explains how we handle information related to the use of
                our app.
              </p>

              <h3>1. About Ultra X Player</h3>
              <p>
                Ultra X Player is an audio/video multimedia player that
                provides streaming solutions for VOD (Video On Demand) and live
                streams using formats like m3u playlists and other video
                formats. The App itself does not provide or host any digital
                video content; it solely serves as a tool for users to stream
                their own content. We are not responsible for the content
                played through the App.
              </p>

              <h3>2. Data Collection</h3>
              <p>
                Ultra X Player does not collect, store, or process any personal
                data from users.
              </p>
              <h4>Third-Party Services</h4>
              <p>
                To improve functionality and user experience, Ultra X Player
                integrates the following third-party services:
              </p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> May collect anonymized
                  device data to analyze app usage and performance.
                </li>
                <li>
                  <strong>Sentry Crashlytics:</strong> May collect anonymized
                  crash data to identify and resolve technical issues.
                </li>
              </ul>
              <p>These third-party services may collect information such as:</p>
              <ul>
                <li>Device model</li>
                <li>Operating system version</li>
                <li>App usage statistics</li>
                <li>Crash reports</li>
              </ul>
              <p>
                We recommend reviewing the privacy policies of these services
                for further details:
              </p>
              <ul>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://sentry.io/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sentry Crashlytics Privacy Policy
                  </a>
                </li>
              </ul>

              <h3>3. App Permissions</h3>
              <p>
                Ultra X Player may request the following permissions to provide
                its core functionality:
              </p>
              <ul>
                <li>
                  <strong>Storage Access:</strong> To load video files or
                  playlists provided by the user.
                </li>
                <li>
                  <strong>Network Access:</strong> To stream content from
                  online sources or playlists.
                </li>
              </ul>
              <p>
                These permissions are used solely for app functionality and are
                not used to collect or share personal data.
              </p>

              <h3>4. GDPR Compliance</h3>
              <p>
                If you are located in the European Economic Area (EEA), you
                have specific rights under the General Data Protection
                Regulation (GDPR), including:
              </p>
              <ul>
                <li>
                  The right to access any data related to you (if applicable).
                </li>
                <li>The right to request data deletion (if applicable).</li>
              </ul>
              <p>
                Since Ultra X Player does not collect personal data, these
                rights are inherently protected. Third-party services
                integrated into the App comply with GDPR standards for any data
                they collect.
              </p>

              <h3>5. CCPA/CPRA Compliance</h3>
              <p>
                Under the California Consumer Privacy Act (CCPA) and the
                California Privacy Rights Act (CPRA), California residents have
                the right to:
              </p>
              <ul>
                <li>Know what data is collected.</li>
                <li>Opt-out of the sale of personal data.</li>
                <li>Request deletion of collected data.</li>
              </ul>
              <p>
                Ultra X Player does not collect or sell personal data. Any data
                collected by third-party services adheres to CCPA/CPRA
                guidelines.
              </p>

              <h3>6. CalOPPA Compliance</h3>
              <p>
                In accordance with the California Online Privacy Protection Act
                (CalOPPA):
              </p>
              <ul>
                <li>
                  Users are informed of the App&rsquo;s data practices via this
                  Privacy Policy.
                </li>
                <li>
                  No personal data is collected, stored, or shared by Ultra X
                  Player.
                </li>
              </ul>

              <h3>7. Security</h3>
              <p>
                We take all reasonable measures to ensure that any data
                collected by third-party services is handled securely. However,
                Ultra X Player itself does not collect or store any user data.
              </p>

              <h3>8. Changes to This Privacy Policy</h3>
              <p>
                We reserve the right to update this Privacy Policy as needed.
                Any changes will be communicated by updating the &ldquo;Last
                Updated&rdquo; date at the top of this page.
              </p>

              <h3>9. Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or the App, please contact us at:
              </p>
              <p>
                Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </p>

              <p>
                By using Ultra X Player, you acknowledge that you have read and
                understood this Privacy Policy.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
