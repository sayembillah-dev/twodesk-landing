"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TwodeskLogo } from "./logo";

const primaryLinks = [
  { href: "/#apps", label: "Apps" },
  { href: "/pomee", label: "Pomee" },
  { href: "/#methodology", label: "Standards" },
  { href: "/contact", label: "Support" },
];

const policyLinks = [
  {
    href: "/pomee/privacy-policy",
    label: "Pomee Privacy Policy",
    desc: "Zero data collection, sensor usage & local storage details",
  },
  {
    href: "/pomee/data-deletion",
    label: "Pomee Data Deletion",
    desc: "How to clear local theme state or uninstall completely",
  },
  {
    href: "/privacy-policy",
    label: "Website Privacy Policy",
    desc: "Cookie-free, tracker-free static site policy",
  },
  {
    href: "/terms",
    label: "Terms of Use",
    desc: "MIT open-source licensing and usage terms",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isPolicyActive =
    pathname.includes("privacy-policy") ||
    pathname.includes("data-deletion") ||
    pathname === "/terms";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Twodesk home"
            className="rounded-lg py-1"
            onClick={() => {
              setMobileOpen(false);
              setDropdownOpen(false);
            }}
          >
            <TwodeskLogo />
          </Link>
          <span className="hidden rounded-full border border-line bg-background px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted lg:inline-block">
            Android Utility Studio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {primaryLinks.map((link) => {
            const active =
              link.href === "/pomee"
                ? pathname === "/pomee"
                : link.href === "/contact"
                  ? pathname === "/contact"
                  : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                  active
                    ? "bg-hero text-ink"
                    : "text-body hover:bg-background hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Accessible Dropdown for Policies & Trust Docs */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                isPolicyActive || dropdownOpen
                  ? "bg-hero text-ink"
                  : "text-body hover:bg-background hover:text-ink"
              }`}
            >
              <span>Policies</span>
              <svg
                viewBox="0 0 16 16"
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path
                  d="M4 6l4 4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                role="menu"
                aria-label="Legal and privacy policies"
                className="absolute right-0 mt-2 w-80 rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-ink/5"
              >
                {policyLinks.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      className={`block rounded-xl p-3 transition-colors ${
                        active
                          ? "bg-hero text-ink"
                          : "hover:bg-background text-ink"
                      }`}
                    >
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-muted">
                        {item.desc}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/sayembillah-dev/pomee"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-line bg-background px-3.5 py-2 text-xs font-medium text-body transition-colors hover:border-ink/25 hover:text-ink lg:inline-flex"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 fill-current"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            <span>Source</span>
          </a>
          <Link
            href={pathname === "/pomee" ? "/contact" : "/pomee"}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            <span>{pathname === "/pomee" ? "Get Support" : "Explore Pomee"}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-background text-ink md:hidden"
        >
          {mobileOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M6 18L18 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-surface px-4 pb-6 pt-4 shadow-lg md:hidden"
        >
          <nav aria-label="Mobile navigation" className="space-y-4">
            <div className="space-y-1">
              <div className="px-3 pb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                Navigation
              </div>
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-hero"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-line pt-4">
              <div className="px-3 pb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                Privacy &amp; Policies
              </div>
              <div className="mt-1 grid gap-1">
                {policyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-body hover:bg-hero hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 border-t border-line pt-4">
              <Link
                href="/pomee"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
              >
                <span>Explore Pomee</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href="https://github.com/sayembillah-dev/pomee"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-background px-5 py-2.5 text-sm font-medium text-ink"
              >
                <span>View Source on GitHub (MIT)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
