"use client";

import { useState } from "react";
import { PomeeDeviceScreen, type PomeeScreenId, pomeeScreens } from "./pomee-device";

const focusSessions = [
  { focus: "10 min", breakTime: "+2 min break", waterRate: "10% fill / min", useCase: "Quick correspondence or warm-up sprint" },
  { focus: "20 min", breakTime: "+4 min break", waterRate: "5% fill / min", useCase: "Focused reading, code review, or sketching" },
  { focus: "25 min", breakTime: "+5 min break", waterRate: "4% fill / min", useCase: "Classic Pomodoro cadence for deep work" },
  { focus: "30 min", breakTime: "+7 min break", waterRate: "3.3% fill / min", useCase: "Extended writing or engineering sessions" },
];

const hourglassPresets = [
  { duration: "30s", grains: "Rapid flow", useCase: "Breathing pause, posture check, or tea steep" },
  { duration: "1m", grains: "Steady trickle", useCase: "Stand-up turn timer or quick stretch" },
  { duration: "3m", grains: "Balanced cadence", useCase: "Short reflection or espresso extraction" },
  { duration: "5m", grains: "Deep settle", useCase: "Screen-free break between focus blocks" },
  { duration: "10m", grains: "Slow drift", useCase: "Journaling or time-boxed ideation" },
];

export function InteractivePomeeShowcase() {
  const [instrument, setInstrument] = useState<"focus" | "hourglass">("focus");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedFocusIdx, setSelectedFocusIdx] = useState(2); // 25 min default
  const [selectedHourglassIdx, setSelectedHourglassIdx] = useState(3); // 5m default

  const activeScreenId: PomeeScreenId = `${instrument}-${theme}`;
  const currentScreen = pomeeScreens[activeScreenId];

  return (
    <div className="grid grid-cols-1 gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12">
      {/* Left 7 columns: Controls & Instrument Specification */}
      <div className="space-y-8 lg:col-span-7">
        {/* Top Instrument & Theme Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <div
            role="tablist"
            aria-label="Select timing instrument"
            className="inline-flex rounded-full border border-line bg-background p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={instrument === "focus"}
              onClick={() => setInstrument("focus")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                instrument === "focus"
                  ? "bg-ink text-white shadow-sm"
                  : "text-body hover:text-ink"
              }`}
            >
              01. Rising Water Focus
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={instrument === "hourglass"}
              onClick={() => setInstrument("hourglass")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                instrument === "hourglass"
                  ? "bg-ink text-white shadow-sm"
                  : "text-body hover:text-ink"
              }`}
            >
              02. Physics Hourglass
            </button>
          </div>

          <div
            role="group"
            aria-label="Select interface theme"
            className="inline-flex items-center gap-1 rounded-full border border-line bg-background p-1"
          >
            <button
              type="button"
              aria-pressed={theme === "light"}
              onClick={() => setTheme("light")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                theme === "light"
                  ? "bg-surface text-ink shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              Daylight
            </button>
            <button
              type="button"
              aria-pressed={theme === "dark"}
              onClick={() => setTheme("dark")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                theme === "dark"
                  ? "bg-ink text-white shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              OLED Night
            </button>
          </div>
        </div>

        {/* Dynamic Instrument Details */}
        {instrument === "focus" ? (
          <div className="space-y-6">
            <div>
              <span className="inline-block rounded-full bg-pastel-pink px-3 py-1 font-mono text-xs font-semibold text-ink">
                WATER FILL + PICKUP ALARM
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                See time pass across the room without staring at ticking seconds.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-body">
                While you work, warm coral water rises smoothly up the screen.
                When the focus block completes, the water turns leaf-green and
                drains away during your break. Pick up the phone mid-session
                and Pomee buzzes and flashes until you set it back down.
              </p>
            </div>

            {/* Interactive Session Presets */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                  Built-in Focus / Break Cadences
                </span>
                <span className="font-mono text-xs text-accent">
                  Tap a preset to inspect
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {focusSessions.map((preset, idx) => {
                  const active = selectedFocusIdx === idx;
                  return (
                    <button
                      key={preset.focus}
                      type="button"
                      onClick={() => setSelectedFocusIdx(idx)}
                      aria-pressed={active}
                      className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                        active
                          ? "border-pomee bg-pomee-soft/70 text-ink ring-1 ring-pomee"
                          : "border-line bg-background text-ink hover:border-ink/30"
                      }`}
                    >
                      <span className="font-mono text-2xl font-semibold tracking-tight">
                        {preset.focus}
                      </span>
                      <span className="mt-1 text-xs font-medium text-pomee">
                        {preset.breakTime}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-hero px-4 py-3 text-sm">
                <span className="font-medium text-ink">
                  {focusSessions[selectedFocusIdx].useCase}
                </span>
                <span className="font-mono text-xs text-muted">
                  Rise rate: {focusSessions[selectedFocusIdx].waterRate}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="inline-block rounded-full bg-pastel-cream px-3 py-1 font-mono text-xs font-semibold text-ink">
                REAL-TIME GRAVITY VECTOR SIMULATION
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                An hourglass that obeys the physical orientation of your phone.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-body">
                Choose a duration or tap the plus/minus controls, then physically
                flip your phone—or tap Flip—to start. Sand falls toward the
                earth using live accelerometer readings. Turn the phone upside
                down to send the sand back, or lay the phone flat on your desk
                to pause the stream.
              </p>
            </div>

            {/* Interactive Hourglass Presets */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                  Quick Hourglass Presets
                </span>
                <span className="font-mono text-xs text-accent">
                  Tap a duration to inspect
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2.5">
                {hourglassPresets.map((item, idx) => {
                  const active = selectedHourglassIdx === idx;
                  return (
                    <button
                      key={item.duration}
                      type="button"
                      onClick={() => setSelectedHourglassIdx(idx)}
                      aria-pressed={active}
                      className={`flex flex-col items-center justify-center rounded-2xl border py-3.5 text-center transition-all ${
                        active
                          ? "border-ink bg-pastel-cream text-ink shadow-sm"
                          : "border-line bg-background text-ink hover:border-ink/30"
                      }`}
                    >
                      <span className="font-mono text-lg font-semibold">
                        {item.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-hero px-4 py-3 text-sm">
                <span className="font-medium text-ink">
                  {hourglassPresets[selectedHourglassIdx].useCase}
                </span>
                <span className="font-mono text-xs text-muted">
                  Flow: {hourglassPresets[selectedHourglassIdx].grains}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right 5 columns: Device Stage with Pastel Backdrop */}
      <div className="lg:col-span-5">
        <div
          className={`relative flex flex-col items-center justify-center rounded-[24px] p-8 transition-colors duration-200 ${
            theme === "dark"
              ? "bg-[#0D0B24] text-white"
              : instrument === "focus"
                ? "bg-pastel-pink/55 text-ink"
                : "bg-pastel-cream/75 text-ink"
          }`}
        >
          <div className="mb-5 flex w-full items-center justify-between font-mono text-xs">
            <span className="uppercase tracking-wider opacity-75">
              {currentScreen.label}
            </span>
            <span className="rounded-full bg-black/10 px-2.5 py-0.5 text-[11px]">
              {theme === "dark" ? "Dark Surface" : "Light Surface"}
            </span>
          </div>

          <div className="w-full max-w-[235px]">
            <PomeeDeviceScreen
              screen={activeScreenId}
              sizes="(min-width: 1024px) 235px, 220px"
            />
          </div>

          <p
            className={`mt-5 text-center text-xs leading-relaxed ${
              theme === "dark" ? "text-white/75" : "text-ink/75"
            }`}
          >
            {currentScreen.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
