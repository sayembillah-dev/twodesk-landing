import Link from "next/link";
import { pomee, site } from "@/lib/site";
import { TwodeskLogo } from "./logo";

const groups = [
  {
    title: "Pomee for Android",
    links: [
      { href: "/pomee", label: "Product Overview" },
      { href: "/pomee/privacy-policy", label: "App Privacy Policy" },
      { href: "/pomee/data-deletion", label: "Data Deletion Guide" },
      {
        href: "https://github.com/sayembillah-dev/pomee",
        label: "Source Code (MIT)",
        external: true,
      },
    ],
  },
  {
    title: "Twodesk Studio",
    links: [
      { href: "/#apps", label: "Published Apps" },
      { href: "/#methodology", label: "Engineering Standards" },
      { href: "/contact", label: "Support & Contact" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { href: "/privacy-policy", label: "Website Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/pomee/privacy-policy", label: "Google Play Data Safety" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Studio Brand & Contact */}
          <div className="space-y-4 lg:col-span-5">
            <TwodeskLogo />
            <p className="max-w-sm text-sm leading-relaxed text-body">
              {site.tagline} Independent Android software engineered to work
              offline, without accounts or telemetry.
            </p>
            <div className="pt-1">
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Support &amp; Developer Contact
              </div>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block font-mono text-sm font-semibold text-accent hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Link Groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          rel="noopener noreferrer"
                          className="text-body transition-colors hover:text-ink"
                        >
                          {link.label} ↗
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-body transition-colors hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Trademarks */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            &copy; 2026 {site.name}. Package{" "}
            <code className="font-mono text-ink">{pomee.packageName}</code>.
          </p>
          <p>
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
