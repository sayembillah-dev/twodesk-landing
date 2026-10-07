import Link from "next/link";
import { site } from "@/lib/site";
import { TwodeskLogo } from "./logo";

const groups = [
  {
    title: "Pomee",
    links: [
      { href: "/pomee", label: "Overview" },
      { href: "/pomee/privacy-policy", label: "Privacy Policy" },
      { href: "/pomee/data-deletion", label: "Data deletion" },
    ],
  },
  {
    title: "Twodesk",
    links: [
      { href: "/contact", label: "Contact and support" },
      { href: "/privacy-policy", label: "Website Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:grid-cols-[1.5fr_1fr_1fr] sm:px-6">
        <div className="space-y-3">
          <TwodeskLogo />
          <p className="max-w-xs text-sm text-muted">{site.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block text-sm text-brand hover:underline"
          >
            {site.email}
          </a>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-3 text-sm font-semibold">{group.title}</h2>
            <ul className="space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-5xl px-4 py-5 text-xs text-muted sm:px-6">
          &copy; 2026 {site.name}. Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
}
