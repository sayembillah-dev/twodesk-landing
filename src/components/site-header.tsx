import Link from "next/link";
import { TwodeskLogo } from "./logo";

const links = [
  { href: "/#apps", label: "Apps" },
  { href: "/pomee", label: "Pomee", wide: true },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Twodesk home">
          <TwodeskLogo />
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-muted transition-colors hover:bg-brand-soft hover:text-foreground ${link.wide ? "hidden sm:inline-block" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
