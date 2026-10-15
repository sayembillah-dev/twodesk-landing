"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PomeeDeviceScreen, type PomeeScreenId, pomeeScreens } from "./pomee-device";

const screenOrder: PomeeScreenId[] = [
  "focus-light",
  "hourglass-light",
  "focus-dark",
  "hourglass-dark",
];

const manifestChecks = [
  { perm: "android.permission.INTERNET", status: "Omitted" },
  { perm: "com.google.android.gms.permission.AD_ID", status: "Omitted" },
  { perm: "android.permission.VIBRATE", status: "Local only" },
];

export function EditorialCollage() {
  const [activeScreen, setActiveScreen] = useState<PomeeScreenId>("focus-light");
  const current = pomeeScreens[activeScreen];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
      {/* Left column: Pastel geometric architecture cards */}
      <div className="flex min-w-0 flex-col justify-between gap-4 lg:col-span-5">
        {/* Top Pastel Blue Card: Zero-telemetry metric + Manifest Audit */}
        <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-pastel-blue p-6 sm:p-7">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-ink/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                Network Footprint
              </span>
              <span className="font-mono text-xs font-medium text-ink/70">
                ANDROID MANIFEST
              </span>
            </div>

            <div className="mt-5">
              <div className="font-mono text-5xl font-semibold tracking-tighter text-ink sm:text-6xl">
                0 KB
              </div>
              <p className="mt-2 text-base font-semibold text-ink">
                Zero outbound network requests
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                Our apps do not request the{" "}
                <code className="rounded bg-white/60 px-1.5 py-0.5 font-mono text-xs">
                  INTERNET
                </code>{" "}
                permission from Android.
              </p>
            </div>

            {/* Concrete Manifest Verification List */}
            <div className="mt-5 space-y-1.5 rounded-xl bg-white/55 p-3.5 font-mono text-[11px]">
              {manifestChecks.map((row) => (
                <div
                  key={row.perm}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="truncate text-ink/80">{row.perm}</span>
                  <span className="shrink-0 rounded bg-ink/10 px-1.5 py-0.5 font-semibold text-ink">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-3.5 text-xs font-medium text-ink/80">
            <span className="h-2 w-2 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
            <span>Verified in public MIT source tree</span>
          </div>
        </div>

        {/* Bottom split: Pastel Mint + Pastel Cream cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between rounded-[22px] bg-pastel-mint p-5 sm:p-6">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink/70">
              Storage
            </span>
            <div className="mt-4">
              <div className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                1 pref
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/80">
                Only your light or dark theme choice is saved locally.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[22px] bg-pastel-cream p-5 sm:p-6">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink/70">
              License
            </span>
            <div className="mt-4">
              <div className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                MIT
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/80">
                Inspect every line of code and build from source.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: Interactive Product Stage */}
      <div className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[24px] border border-line bg-surface p-6 sm:p-8 lg:col-span-7">
        {/* Header bar inside stage */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/pomee/icon.png"
              alt="Pomee app icon"
              width={40}
              height={40}
              className="shrink-0 rounded-xl border border-line"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-ink">
                  Pomee for Android
                </span>
                <span className="rounded-full bg-pastel-pink px-2 py-0.5 font-mono text-[10px] font-semibold text-ink">
                  RELEASE 01
                </span>
              </div>
              <p className="truncate text-xs text-muted">{current.caption}</p>
            </div>
          </div>
          <Link
            href="/pomee"
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-hero px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-pastel-blue"
          >
            <span>Full specs</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Center interactive device showcase */}
        <div className="my-6 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_210px] lg:grid-cols-[1fr_230px]">
          <div className="order-2 flex min-w-0 flex-col justify-between space-y-5 sm:order-1">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
                Interactive Screen Inspector
              </span>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink">
                Two physical timing instruments in one calm app.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Switch between the rising-water Pomodoro timer and the
                accelerometer-driven sand hourglass in daylight or OLED night
                mode.
              </p>
            </div>

            {/* Interactive Mode & Theme Selector */}
            <div
              role="group"
              aria-label="Select Pomee screen preview"
              className="grid grid-cols-2 gap-2"
            >
              {screenOrder.map((id) => {
                const item = pomeeScreens[id];
                const isSelected = activeScreen === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveScreen(id)}
                    aria-pressed={isSelected}
                    className={`flex flex-col items-start rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                      isSelected
                        ? "border-ink bg-ink text-white shadow-sm"
                        : "border-line bg-background text-ink hover:border-ink/30"
                    }`}
                  >
                    <span className="text-xs font-semibold">{item.mode}</span>
                    <span
                      className={`mt-0.5 font-mono text-[11px] ${
                        isSelected ? "text-pastel-blue" : "text-muted"
                      }`}
                    >
                      {item.theme} theme
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sensor badge */}
            <div className="rounded-xl bg-hero p-3.5 text-xs leading-relaxed text-body">
              <strong className="font-semibold text-ink">
                Tactile sensor feedback:
              </strong>{" "}
              {current.mode === "Focus Timer"
                ? "Pick up your phone mid-session and the accelerometer triggers a gentle buzz and screen flash until you set it back on the desk."
                : "Flip your phone 180° to start the hourglass. Real-time gravity vectors pull the sand downward or pause flow when laid flat."}
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[200px] sm:order-2 sm:max-w-[210px] lg:max-w-[225px]">
            <PomeeDeviceScreen
              screen={activeScreen}
              priority
              sizes="(min-width: 640px) 225px, 200px"
            />
          </div>
        </div>

        {/* Footer metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3.5 font-mono text-[11px] text-muted">
          <span>PACKAGE: com.twodesk.pomee</span>
          <span>SENSORS: ACCELEROMETER + GYROSCOPE (RAM ONLY)</span>
        </div>
      </div>
    </div>
  );
}
