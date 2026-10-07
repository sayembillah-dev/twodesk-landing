import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Support",
  description: `Get help with Twodesk apps or contact ${site.name}.`,
  alternates: { canonical: "/contact" },
};

const topics = [
  {
    title: "App support",
    body: "Something not working in Pomee? Tell us your phone model, Android version and what happened.",
    subject: "Pomee support",
  },
  {
    title: "Privacy questions",
    body: "Ask about how our apps handle information, or request deletion of an email conversation.",
    subject: "Privacy",
  },
  {
    title: "Feedback and ideas",
    body: "Ideas for new features or new apps are always welcome.",
    subject: "Feedback",
  },
];

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-medium text-brand">{site.name}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact and support
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        {site.name} is the developer of Pomee. The fastest way to reach us is
        by email, and we aim to reply quickly.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="mt-8 flex flex-col gap-1 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="text-sm text-muted">Email</span>
        <span className="text-lg font-semibold text-brand break-all">
          {site.email}
        </span>
      </a>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {topics.map((t) => (
          <a
            key={t.title}
            href={`mailto:${site.email}?subject=${encodeURIComponent(t.subject)}`}
            className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand"
          >
            <h2 className="font-semibold">{t.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
          </a>
        ))}
      </div>

      <dl className="mt-10 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[max-content_1fr]">
        <dt className="text-muted">Developer</dt>
        <dd>{site.name}</dd>
        {site.location && (
          <>
            <dt className="text-muted">Location</dt>
            <dd>{site.location}</dd>
          </>
        )}
        <dt className="text-muted">Apps</dt>
        <dd>
          <Link href="/pomee" className="text-brand hover:underline">
            Pomee
          </Link>
        </dd>
        <dt className="text-muted">Policies</dt>
        <dd className="space-x-3">
          <Link href="/pomee/privacy-policy" className="text-brand hover:underline">
            Pomee Privacy Policy
          </Link>
          <Link href="/terms" className="text-brand hover:underline">
            Terms of Use
          </Link>
        </dd>
      </dl>
    </main>
  );
}
