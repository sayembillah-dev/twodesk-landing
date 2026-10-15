"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-hero"
      aria-live="polite"
    >
      {copied ? (
        <>
          <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
          <span>Copied to clipboard</span>
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" />
            <path
              d="M3 10.5V3.5A1.5 1.5 0 0 1 4.5 2h7"
              strokeLinecap="round"
            />
          </svg>
          <span>Copy address</span>
        </>
      )}
    </button>
  );
}
