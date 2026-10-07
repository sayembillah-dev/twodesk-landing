import type { ReactNode } from "react";

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
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-medium text-brand">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      {intro && (
        <div className="mt-8 rounded-2xl border border-line bg-surface p-5 text-[15px] leading-relaxed">
          {intro}
        </div>
      )}
      <article className="prose-legal mt-6">{children}</article>
    </main>
  );
}
