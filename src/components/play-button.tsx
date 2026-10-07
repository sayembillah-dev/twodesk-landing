import { pomee } from "@/lib/site";

// A neutral icon. Swap in Google's official badge artwork if you prefer it:
// https://play.google.com/intl/en_us/badges/
function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M6 4.2v15.6c0 .8.9 1.3 1.6.8l12-7.8c.6-.4.6-1.2 0-1.6l-12-7.8C6.9 2.9 6 3.4 6 4.2Z" />
    </svg>
  );
}

export function PlayButton() {
  const label = (
    <>
      <PlayGlyph />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-80">
          {pomee.live ? "Get it on" : "Coming soon to"}
        </span>
        <span className="text-base font-semibold">Google Play</span>
      </span>
    </>
  );
  const base =
    "inline-flex items-center gap-3 rounded-xl bg-[#0b0f17] px-5 py-2.5 text-white ring-1 ring-white/10";

  if (!pomee.live) {
    return (
      <span className={`${base} cursor-default opacity-90`} aria-disabled="true">
        {label}
      </span>
    );
  }
  return (
    <a
      href={pomee.playUrl}
      className={`${base} transition-transform hover:-translate-y-0.5`}
      rel="noopener"
    >
      {label}
    </a>
  );
}
