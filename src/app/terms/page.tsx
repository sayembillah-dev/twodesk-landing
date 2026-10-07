import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { legalUpdated, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using Twodesk apps and this website.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage eyebrow={site.name} title="Terms of Use" updated={legalUpdated}>
      <h2>Agreement</h2>
      <p>
        These terms apply to apps published by {site.name}, including Pomee,
        and to this website. By downloading or using our apps, or by using this
        site, you agree to these terms. If you get our apps from Google Play,
        the Google Play Terms of Service also apply.
      </p>

      <h2>Using our apps</h2>
      <p>
        You may install and use our apps on devices you own or control. Do not
        use them in a way that breaks the law or harms others.
      </p>
      <p>
        Pomee is open source. Its source code is available on{" "}
        <a href="https://github.com/sayembillah-dev/pomee" rel="noopener">
          GitHub
        </a>{" "}
        under the MIT License, and that license governs your use of the code.
        Builds are published on Google Play and on the project&apos;s GitHub
        Releases page.
      </p>

      <h2>Privacy</h2>
      <p>
        How each app handles information is explained in its privacy policy,
        for example the <Link href="/pomee/privacy-policy">Pomee Privacy Policy</Link>.
      </p>

      <h2>Your safety</h2>
      <p>
        Pomee uses vibration and screen flashes for its pickup alarm. Do not
        use it while driving or in any situation where a sudden alert could be
        unsafe. If you are sensitive to flashing light, keep the phone still
        during focus sessions to avoid triggering the alarm.
      </p>

      <h2>No warranty</h2>
      <p>
        Our apps and this website are provided &quot;as is&quot; and &quot;as
        available&quot;. To the fullest extent the law allows, we make no
        warranties of any kind, including that the apps will be error-free or
        always available. Timers depend on your device and its settings, such
        as battery saving, and may not be exact.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, {site.name} is not liable for any
        indirect, incidental or consequential loss arising from your use of
        our apps or this website. Nothing in these terms limits any rights you
        have under consumer protection laws that cannot be excluded.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The {site.name} name and logo, the names and icons of our apps, and
        the content of this website belong to {site.name}. App source code is
        covered by its own license, as described above. Google Play and the Google Play logo are trademarks of
        Google LLC.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The current version is
        always on this page, with the date it was last updated.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
