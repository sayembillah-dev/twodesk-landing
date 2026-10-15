import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { EyebrowLabel, PrimaryButton } from "@/components/ui";
import { pomee, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Support",
  description: `Get help with Twodesk apps or contact ${site.name}.`,
  alternates: { canonical: "/contact" },
};

const topics = [
  {
    number: "01",
    title: "Pomee app support",
    body: "Something not behaving as expected in Pomee? Include your phone model, Android version, and what happened so we can reproduce it.",
    subject: "Pomee support",
    tone: "bg-pastel-blue",
    cta: "Draft support email",
  },
  {
    number: "02",
    title: "Privacy & data questions",
    body: "Ask how our apps handle device sensors and storage, or request deletion of an earlier support email conversation.",
    subject: "Privacy question",
    tone: "bg-pastel-mint",
    cta: "Ask a privacy question",
  },
  {
    number: "03",
    title: "Feedback & utility ideas",
    body: "Have a suggestion for Pomee or an idea for a calm, single-purpose Android app you wish existed? We read every note.",
    subject: "Feedback",
    tone: "bg-pastel-cream",
    cta: "Share feedback",
  },
];

export default function Contact() {
  return (
    <main className="flex-1">
      {/* Header Banner */}
      <section className="border-b border-line bg-hero">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <EyebrowLabel dotColor="bg-accent">
              Developer Support &amp; Inquiries
            </EyebrowLabel>
            <h1 className="text-display-hero mt-5 text-ink">
              Contact and support.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {site.name} is the independent studio behind {pomee.name}. When
              you write to us, your message goes straight to the developer—no
              support bots, no ticket queues, and no mailing lists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left 7 Columns: Direct Email Card + Topic Cards */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-[24px] border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                  Direct Support Inbox
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pastel-mint px-3 py-1 font-mono text-[11px] font-semibold text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
                  Personal Reply
                </span>
              </div>

              <div className="mt-4 break-all font-mono text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-accent hover:underline"
                >
                  {site.email}
                </a>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-body">
                We use your email address only to reply to your message. You can
                ask us to delete our email conversation at any time.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <PrimaryButton
                  href={`mailto:${site.email}`}
                  variant="ink"
                  external
                >
                  <span>Open in Email App</span>
                  <span aria-hidden="true">&rarr;</span>
                </PrimaryButton>
                <CopyEmailButton email={site.email} />
              </div>
            </div>

            {/* Topic Selection Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {topics.map((t) => (
                <a
                  key={t.title}
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    t.subject
                  )}`}
                  className={`group flex flex-col justify-between rounded-[22px] p-6 transition-transform duration-150 hover:-translate-y-0.5 ${t.tone}`}
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-ink/70">
                      {t.number}
                    </span>
                    <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                      {t.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-ink/80 sm:text-sm">
                      {t.body}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-3.5 text-xs font-semibold text-ink">
                    <span>{t.cta}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Developer & Documentation Directory */}
          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-line bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-ink">
                Studio &amp; Policy Directory
              </h2>
              <p className="mt-1.5 text-sm text-body">
                Official developer information for Google Play verification and
                open-source contributors.
              </p>

              <dl className="mt-6 divide-y divide-line text-sm">
                <div className="grid grid-cols-3 gap-2 py-3.5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                    Developer
                  </dt>
                  <dd className="col-span-2 font-semibold text-ink">
                    {site.name}
                  </dd>
                </div>

                {site.location && (
                  <div className="grid grid-cols-3 gap-2 py-3.5">
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                      Location
                    </dt>
                    <dd className="col-span-2 text-ink">{site.location}</dd>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2 py-3.5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                    Support Email
                  </dt>
                  <dd className="col-span-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-mono text-xs font-medium text-accent hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3.5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                    Published Apps
                  </dt>
                  <dd className="col-span-2">
                    <Link
                      href="/pomee"
                      className="font-semibold text-accent hover:underline"
                    >
                      {pomee.storeTitle}
                    </Link>
                    <div className="mt-0.5 font-mono text-xs text-muted">
                      {pomee.packageName}
                    </div>
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3.5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                    Source Code
                  </dt>
                  <dd className="col-span-2">
                    <a
                      href="https://github.com/sayembillah-dev/pomee"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      github.com/sayembillah-dev/pomee ↗
                    </a>
                    <div className="mt-0.5 text-xs text-muted">
                      MIT License · Issue tracker &amp; releases
                    </div>
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3.5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                    Legal &amp; Privacy
                  </dt>
                  <dd className="col-span-2 flex flex-col gap-1.5">
                    <Link
                      href="/pomee/privacy-policy"
                      className="font-medium text-accent hover:underline"
                    >
                      Pomee App Privacy Policy
                    </Link>
                    <Link
                      href="/pomee/data-deletion"
                      className="font-medium text-accent hover:underline"
                    >
                      Pomee Data Deletion Instructions
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-accent hover:underline"
                    >
                      Website Privacy Policy
                    </Link>
                    <Link
                      href="/terms"
                      className="font-medium text-accent hover:underline"
                    >
                      Terms of Use
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
