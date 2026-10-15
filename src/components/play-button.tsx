import { pomee } from "@/lib/site";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 4.2v15.6c0 .8.9 1.3 1.6.8l12-7.8c.6-.4.6-1.2 0-1.6l-12-7.8C6.9 2.9 6 3.4 6 4.2Z"
      />
    </svg>
  );
}

export function PlayButton() {
  const label = (
    <>
      <PlayGlyph />
      <span className="flex flex-col text-left leading-tight">
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/75">
          {pomee.live ? "Get it on" : "Coming soon to"}
        </span>
        <span className="text-sm font-semibold tracking-tight text-white">
          Google Play
        </span>
      </span>
    </>
  );

  const base =
    "inline-flex items-center gap-3 rounded-full bg-[#0D0B24] px-6 py-3 text-white ring-1 ring-white/15";

  if (!pomee.live) {
    return (
      <span
        className={`${base} cursor-default select-none opacity-95`}
        aria-disabled="true"
        title="Google Play listing is currently in review"
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={pomee.playUrl}
      className={`${base} transition-colors hover:bg-accent`}
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
