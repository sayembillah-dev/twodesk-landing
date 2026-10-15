import Link from "next/link";
import type { ReactNode } from "react";

export type PastelTone = "blue" | "mint" | "lavender" | "pink" | "cream" | "white";

const pastelSurfaceClasses: Record<PastelTone, string> = {
  blue: "bg-pastel-blue text-[#0D0B24]",
  mint: "bg-pastel-mint text-[#0D0B24]",
  lavender: "bg-pastel-lavender text-[#0D0B24]",
  pink: "bg-pastel-pink text-[#0D0B24]",
  cream: "bg-pastel-cream text-[#0D0B24]",
  white: "bg-surface text-[#0D0B24] border border-line",
};

export function EyebrowLabel({
  children,
  dotColor = "bg-accent",
  inverted = false,
}: {
  children: ReactNode;
  dotColor?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase ${
        inverted
          ? "border-white/15 bg-white/10 text-white/90"
          : "border-line bg-surface text-ink"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  align = "left",
  dotColor,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  inverted?: boolean;
  align?: "left" | "center";
  dotColor?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="mb-4">
          <EyebrowLabel inverted={inverted} dotColor={dotColor}>
            {eyebrow}
          </EyebrowLabel>
        </div>
      )}
      <h2
        className={`text-heading-section text-balance ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
            inverted ? "text-white/75" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  external = false,
  variant = "accent",
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "accent" | "ink" | "white" | "pomee";
  className?: string;
}) {
  const variantStyles = {
    accent:
      "bg-accent text-white hover:bg-accent-hover shadow-sm",
    ink: "bg-ink text-white hover:bg-ink-secondary shadow-sm",
    white: "bg-white text-ink hover:bg-pastel-blue",
    pomee: "bg-pomee text-white hover:bg-[#c83840] shadow-sm",
  }[variant];

  const base = `inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-150 ${variantStyles} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={base}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  external = false,
  inverted = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  inverted?: boolean;
  className?: string;
}) {
  const base = `inline-flex items-center justify-center gap-2.5 rounded-full border px-6 py-3.5 text-sm font-medium transition-all duration-150 ${
    inverted
      ? "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
      : "border-line bg-surface text-ink hover:border-ink/30 hover:bg-hero"
  } ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={base}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}

export function StatCard({
  numeral,
  label,
  detail,
  tone = "blue",
  className = "",
}: {
  numeral: string;
  label: string;
  detail: string;
  tone?: PastelTone;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-[20px] p-6 sm:p-7 ${pastelSurfaceClasses[tone]} ${className}`}
    >
      <div>
        <div className="text-stat-numeral font-mono tracking-tight">{numeral}</div>
        <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
          {label}
        </h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink/75">{detail}</p>
    </div>
  );
}

export function ProcessCard({
  number,
  symbol,
  title,
  description,
  footnote,
  tone,
}: {
  number: string;
  symbol: ReactNode;
  title: string;
  description: string;
  footnote?: string;
  tone: PastelTone;
}) {
  return (
    <article
      className={`flex flex-col justify-between rounded-[22px] p-7 sm:p-8 ${pastelSurfaceClasses[tone]}`}
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink/10 text-ink"
            aria-hidden="true"
          >
            {symbol}
          </span>
          <span className="font-mono text-4xl font-semibold tracking-tighter text-ink/85 sm:text-5xl">
            {number}
          </span>
        </div>
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-[15px]">
          {description}
        </p>
      </div>
      {footnote && (
        <div className="mt-6 border-t border-ink/10 pt-4 font-mono text-xs font-medium text-ink/70">
          {footnote}
        </div>
      )}
    </article>
  );
}
