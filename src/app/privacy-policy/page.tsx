import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { legalUpdated, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Privacy Policy",
  description: "How the Twodesk website handles information about visitors.",
  alternates: { canonical: "/privacy-policy" },
};

export default function WebsitePrivacyPolicy() {
  return (
    <LegalPage
      eyebrow={site.name}
      title="Website Privacy Policy"
      updated={legalUpdated}
      intro={
        <p>
          This policy covers this website. Each of our apps has its own
          privacy policy: see the{" "}
          <Link href="/pomee/privacy-policy" className="text-brand underline">
            Pomee Privacy Policy
          </Link>
          .
        </p>
      }
    >
      <h2>Who we are</h2>
      <p>
        This website is run by {site.name}, an independent app developer. You
        can reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        This website has no accounts, forms, cookies, analytics, advertising or
        tracking scripts. Fonts and images are served from this site, so your
        browser does not contact third-party services when you visit.
      </p>
      <p>
        Like any website, the company that hosts it automatically keeps short
        technical server logs, such as IP address, browser type and the page
        requested. These logs are used only to deliver the site and protect it
        from abuse, and are deleted by the host on its normal schedule. We do
        not use them to identify you.
      </p>

      <h2>Email</h2>
      <p>
        If you email us, we receive your email address and whatever you choose
        to write. We use it only to reply to you. We do not add you to a
        mailing list or share your message with anyone. You can ask us to
        delete our email conversation with you at any time.
      </p>

      <h2>Sharing and selling</h2>
      <p>We do not sell, rent or share information about visitors.</p>

      <h2>Security</h2>
      <p>
        The site is served over an encrypted HTTPS connection. Because we do
        not collect personal data through the site, none is stored by us.
      </p>

      <h2>Children</h2>
      <p>
        This website is not directed at children under 13 and does not
        knowingly collect information from them.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we will post the new version here and update
        the date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
