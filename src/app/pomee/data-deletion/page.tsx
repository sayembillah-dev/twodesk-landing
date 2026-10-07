import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { pomee, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pomee Data Deletion",
  description:
    "How to delete data used by Pomee, the focus timer app by Twodesk. Pomee has no accounts and stores no data on our servers.",
  alternates: { canonical: "/pomee/data-deletion" },
};

export default function PomeeDataDeletion() {
  return (
    <LegalPage
      eyebrow="Pomee"
      title="Pomee Data Deletion"
      updated={pomee.privacyUpdated}
      intro={
        <p>
          <strong>Pomee has no accounts</strong> and {site.name} keeps no data
          about you on any server. The only thing the app stores is your theme
          choice, on your own device, and you can remove it yourself at any
          time.
        </p>
      }
    >
      <h2>Delete Pomee data from your device</h2>
      <p>Choose either option:</p>
      <ul>
        <li>
          <strong>Uninstall the app.</strong> Long-press the Pomee icon and
          tap Uninstall, or remove it from the Google Play app. Uninstalling
          removes the app and everything it saved.
        </li>
        <li>
          <strong>Keep the app and clear its data.</strong> Open your
          phone&apos;s Settings, go to Apps, choose Pomee, then Storage, and
          tap Clear storage. Pomee will start fresh with the default theme.
        </li>
      </ul>

      <h2>What gets deleted</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Where it is kept</th>
            <th>When it is deleted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Light or dark theme choice</td>
            <td>Your device only</td>
            <td>When you uninstall the app or clear its storage</td>
          </tr>
          <tr>
            <td>Any other personal or usage data</td>
            <td>Not collected</td>
            <td>Nothing to delete</td>
          </tr>
        </tbody>
      </table>

      <h2>Data held by Twodesk</h2>
      <p>
        None. Pomee does not send any information to us, so there is no
        account or server data to request deletion of. If you have emailed us,
        you can ask us to delete that email conversation by writing to{" "}
        <a href={`mailto:${site.email}?subject=Pomee%20data%20deletion`}>
          {site.email}
        </a>
        . We will delete it and confirm by reply.
      </p>

      <p>
        See the full <Link href="/pomee/privacy-policy">Pomee Privacy Policy</Link>{" "}
        for more detail.
      </p>
    </LegalPage>
  );
}
