import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { pomee, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pomee Privacy Policy",
  description:
    "Privacy Policy for Pomee, the focus timer app by Twodesk. Pomee does not collect, share or sell any personal data.",
  alternates: { canonical: "/pomee/privacy-policy" },
};

export default function PomeePrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Pomee"
      title="Pomee Privacy Policy"
      updated={pomee.privacyUpdated}
      intro={
        <p>
          <strong>In short:</strong> Pomee does not collect, share or sell any
          personal or usage data. It has no accounts, no ads, no analytics and
          no internet access. The only thing it saves is your light or dark
          theme choice, and that stays on your device.
        </p>
      }
    >
      <h2>Who we are</h2>
      <p>
        Pomee (package name <code>{pomee.packageName}</code>) is a focus timer
        app for Android published on Google Play by <strong>{site.name}</strong>
        . In this policy, &quot;we&quot;, &quot;us&quot; and &quot;our&quot;
        mean {site.name}, and &quot;the app&quot; means Pomee. This policy
        applies only to the Pomee app. Our website has its own{" "}
        <Link href="/privacy-policy">Website Privacy Policy</Link>.
      </p>

      <h2>Information we collect</h2>
      <p>
        <strong>None.</strong> Pomee does not collect, receive, store on our
        servers, share, sell or transfer any personal or sensitive user data.
        This includes your name, email address, contacts, location, device
        identifiers, advertising ID, photos, files, app usage and crash data.
      </p>
      <p>
        The app does not contain any advertising, analytics, crash reporting or
        other third-party software development kits (SDKs) that collect data.
        It does not request the internet permission, so it cannot send
        information off your device.
      </p>

      <h2>Information kept on your device</h2>
      <p>
        Pomee saves one setting on your device: whether you chose the light or
        dark theme, so it is remembered the next time you open the app. This
        setting is stored in the app&apos;s private storage on your phone and
        is never sent to us or anyone else.
      </p>
      <p>
        If you have turned on Android backup for your device, Android may
        include this setting in your device backup to your Google account. That
        backup is managed by Google under your Google account settings, not by
        us, and we cannot access it.
      </p>

      <h2>Device permissions and sensors</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Why Pomee uses it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Motion sensors (accelerometer and gyroscope)</td>
            <td>
              To tell when the phone is picked up during a focus session, and
              to make the hourglass sand fall toward the ground. Readings are
              used in the moment while the app is open and are never recorded,
              stored or sent anywhere.
            </td>
          </tr>
          <tr>
            <td>Vibration</td>
            <td>
              To buzz when you pick the phone up during a focus session, and to
              chime when a session ends.
            </td>
          </tr>
          <tr>
            <td>Keep screen on</td>
            <td>
              To keep the screen awake while a timer or the hourglass is
              running. It turns off when the timer stops.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Pomee does not access your location, camera, microphone, contacts,
        storage, phone calls, messages or accounts.
      </p>

      <h2>How we use and share information</h2>
      <p>
        Because Pomee does not collect any information, we do not use it for
        any purpose and we do not share it with any third party. We do not sell
        data, use it for advertising, or use it to build profiles.
      </p>
      <p>
        You download Pomee through Google Play. Google may collect information
        about your download and use of Google Play under its own{" "}
        <a href="https://policies.google.com/privacy" rel="noopener">
          privacy policy
        </a>
        . We do not receive personal information about you from Google.
      </p>

      <h2>Security</h2>
      <p>
        Pomee is built so that your information never leaves your device: it
        has no network access, no accounts and no servers that store user data.
        The one saved setting lives in the app&apos;s private storage, which
        Android keeps separate from other apps. This policy and our website are
        served over an encrypted HTTPS connection.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        We do not hold any of your data, so there is nothing for us to retain
        or delete on our side. The theme setting on your device is kept until
        you change it, clear the app&apos;s storage, or uninstall the app.
      </p>
      <p>To delete it at any time, do either of the following:</p>
      <ul>
        <li>Uninstall Pomee. This removes the app and everything it saved.</li>
        <li>
          Open your phone&apos;s Settings, go to Apps, choose Pomee, then
          Storage, and tap Clear storage.
        </li>
      </ul>
      <p>
        More detail is on our{" "}
        <Link href="/pomee/data-deletion">Pomee data deletion</Link> page.
      </p>

      <h2>Children</h2>
      <p>
        Pomee is intended for a general audience aged 13 and over and is not
        directed at children. Pomee does not knowingly collect any information
        from anyone, including children under 13.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, laws such as the GDPR or the CCPA may give
        you rights to access, correct or delete personal data, or to object to
        how it is used. Since Pomee does not collect personal data, we hold no
        data about you to access, correct or delete. You can still contact us
        with any privacy question and we will respond.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how Pomee handles information, we will update this policy
        at this address and change the &quot;Last updated&quot; date above. If
        a change is significant, we will also mention it in the app&apos;s
        release notes on Google Play.
      </p>

      <h2>Contact us</h2>
      <p>
        For any question or request about this policy or your privacy, contact
        the developer, {site.name}, at{" "}
        <a href={`mailto:${site.email}?subject=Pomee%20privacy`}>
          {site.email}
        </a>
        . You can also reach us through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
