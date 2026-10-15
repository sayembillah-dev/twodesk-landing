import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { EyebrowLabel } from "./ui";

const legalDocs = [
  { href: "/pomee/privacy-policy", label: "Pomee Privacy Policy", tag: "App" },
  { href: "/pomee/data-deletion", label: "Pomee Data Deletion", tag: "App" },
  { href: "/privacy-policy", label: "Website Privacy Policy", tag: "Web" },
  { href: "/terms", label: "Terms of Use", tag: "Legal" },
];

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="flex-1">
      {/* Editorial Document Header */}
      <section className="border-b border-line bg-hero">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <EyebrowLabel dotColor="bg-accent">{eyebrow}</EyebrowLabel>
            <h1 className="text-heading-section mt-4 text-ink">{title}</h1>
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
              Last updated: {updated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Editorial Document Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-18 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left Sidebar: Policy Switcher & Quick Facts */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <nav
              aria-label="Legal and privacy documents"
              className="rounded-[22px] border border-line bg-surface p-5"
            >
              <div className="px-2 pb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                Documentation Directory
              </div>
              <ul className="space-y-1">
                {legalDocs.map((doc) => {
                  const isCurrent = doc.label === title;
                  return (
                    <li key={doc.href}>
                      <Link
                        href={doc.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                          isCurrent
                            ? "bg-ink text-white"
                            : "text-body hover:bg-hero hover:text-ink"
                        }`}
                      >
                        <span>{doc.label}</span>
                        <span
                          className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase ${
                            isCurrent
                              ? "bg-white/15 text-white"
                              : "bg-background text-muted"
                          }`}
                        >
                          {doc.tag}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="rounded-[22px] bg-pastel-blue/65 p-5 text-ink">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/75">
                Questions about this document?
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink/80">
                Write directly to {site.name} at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold underline"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </aside>

        {/* Right Article Column */}
        <div className="lg:col-span-8">
          <div className="rounded-[24px] border border-line bg-surface p-6 sm:p-10">
            {intro && (
              <div className="mb-8 rounded-2xl border border-line bg-pastel-mint/45 p-5 text-[15px] leading-relaxed text-ink">
                {intro}
              </div>
            )}
            <article className="prose-legal">{children}</article>
          </div>
        </div>
      </div>
    </main>
  );
}
