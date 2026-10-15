import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractivePomeeShowcase } from "@/components/interactive-pomee-showcase";
import { PlayButton } from "@/components/play-button";
import {
  PomeeDeviceScreen,
  type PomeeScreenId,
  pomeeScreens,
} from "@/components/pomee-device";
import {
  EyebrowLabel,
  ProcessCard,
  SecondaryButton,
  SectionHeading,
} from "@/components/ui";
import { pomee, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pomee.storeTitle,
  description: pomee.shortDescription,
  alternates: { canonical: "/pomee" },
  openGraph: {
    title: pomee.storeTitle,
    description: pomee.shortDescription,
    images: [{ url: "/pomee/feature-graphic.png", width: 1024, height: 500 }],
  },
};

const screenList: PomeeScreenId[] = [
  "focus-light",
  "focus-dark",
  "hourglass-light",
  "hourglass-dark",
];

const architecturePillars = [
  {
    number: "01",
    tone: "pink" as const,
    title: "Ambient water level",
    description:
      "Water rises steadily from the bottom of the display as you work. When focus finishes, the water turns leaf-green and drains away during your break.",
    footnote: "CADENCE: 10 / 20 / 25 / 30 MIN",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M10 3c-3.5 4.5-5.5 7.2-5.5 10a5.5 5.5 0 0 0 11 0c0-2.8-2-5.5-5.5-10Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    tone: "cream" as const,
    title: "Pickup alarm nudge",
    description:
      "Pick up your phone during an active focus block and Pomee buzzes and flashes until you set it back on the desk—breaking unconscious scrolling habits.",
    footnote: "DETECTION: ACCELEROMETER LIFT",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="6" y="2.5" width="8" height="15" rx="2" />
        <path d="M3 7l-1.5 3L3 13M17 7l1.5 3L17 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    tone: "blue" as const,
    title: "Real gravity hourglass",
    description:
      "Switch to the sand hourglass, set a time, and flip your phone. Sand falls toward gravity, turning the phone sends it back, and laying it flat pauses flow.",
    footnote: "PRESETS: 30S / 1M / 3M / 5M / 10M",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 3h8M6 17h8M7 3c0 4 3 5 3 7s-3 3-3 7M13 3c0 4-3 5-3 7s3 3 3 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    tone: "mint" as const,
    title: "Air-gapped privacy",
    description:
      "No accounts, no ads, no analytics SDKs, and no internet permission. Only your light or dark theme preference is saved in local device storage.",
    footnote: "NETWORK: 0 BYTES TRANSMITTED",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M10 2.5L4 5.2v4.6c0 4.1 2.6 7.8 6 9.2 3.4-1.4 6-5.1 6-9.2V5.2L10 2.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 10l1.8 1.8 3.5-3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function PomeePage() {
  return (
    <main className="flex-1">
      {/* 1. Product Hero Section */}
      <section className="border-b border-line bg-hero">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 md:py-22 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <Image
                src="/pomee/icon.png"
                alt="Pomee app icon"
                width={64}
                height={64}
                priority
                className="rounded-2xl border border-line shadow-md shadow-pomee/15"
              />
              <div>
                <EyebrowLabel dotColor="bg-pomee">
                  Android Focus Utility · {pomee.packageName}
                </EyebrowLabel>
              </div>
            </div>

            <h1 className="text-display-hero mt-6 text-ink">
              {pomee.name}: a focus timer you can feel.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              As you work, warm coral water rises steadily from the bottom of
              your screen until the session completes—then turns green and
              drains away while you rest. Need a quick countdown? Flip to a
              physics sand hourglass that responds to real gravity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <PlayButton />
              <SecondaryButton
                href="https://github.com/sayembillah-dev/pomee"
                external
              >
                <span>View MIT Source on GitHub</span>
                <span aria-hidden="true">↗</span>
              </SecondaryButton>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:max-w-lg">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Price
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">
                  Free, no ads
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Account
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">
                  None required
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Telemetry
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">
                  Zero (Offline)
                </dd>
              </div>
            </dl>
          </div>

          {/* Right 5 Cols: Composed Dual-Device Hardware Stage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] border border-line bg-surface p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-pastel-pink px-3 py-1 font-mono text-[11px] font-semibold text-ink">
                  TWO INSTRUMENTS IN ONE
                </span>
                <span className="font-mono text-xs text-muted">
                  LIGHT &amp; DARK THEMES
                </span>
              </div>
              <div className="grid grid-cols-2 items-start gap-4 sm:gap-5">
                <div>
                  <PomeeDeviceScreen
                    screen="focus-light"
                    priority
                    sizes="(min-width: 1024px) 210px, 42vw"
                  />
                  <div className="mt-2.5 text-center font-mono text-[11px] font-medium text-muted">
                    Focus Timer (Light)
                  </div>
                </div>
                <div className="mt-8">
                  <PomeeDeviceScreen
                    screen="hourglass-dark"
                    priority
                    sizes="(min-width: 1024px) 210px, 42vw"
                  />
                  <div className="mt-2.5 text-center font-mono text-[11px] font-medium text-muted">
                    Sand Hourglass (Dark)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Instrument & Cadence Explorer */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Interactive Specification"
            dotColor="bg-pomee"
            title="Explore both timing instruments and theme surfaces."
            description="Switch between the rising-water Pomodoro timer and the physics sand hourglass below to inspect session presets, break cadences, and sensor behavior."
          />
        </div>

        <InteractivePomeeShowcase />
      </section>

      {/* 3. Dark Navy Architecture & Sensor Methodology */}
      <section className="bg-[#0D0B24] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                inverted
                eyebrow="How Pomee Works"
                dotColor="bg-pastel-pink"
                title="Physical feedback without digital distraction."
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                Designed to sit beside your keyboard like a physical desk clock.
                Large numerals, smooth spring animations, and hardware sensors
                keep your focus on your work—not on configuring an app.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {architecturePillars.map((pillar) => (
              <ProcessCard
                key={pillar.number}
                number={pillar.number}
                symbol={pillar.symbol}
                title={pillar.title}
                description={pillar.description}
                footnote={pillar.footnote}
                tone={pillar.tone}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete 4-Screen Interface Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Interface Gallery"
          dotColor="bg-accent"
          title="Every screen in the app—nothing hidden behind menus."
          description="Pomee has no settings labyrinth, onboarding carousel, or account tab. Everything happens across two clean instruments in daylight or night mode."
        />

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {screenList.map((id, index) => {
            const item = pomeeScreens[id];
            return (
              <figure
                key={id}
                className="flex flex-col justify-between rounded-[24px] border border-line bg-surface p-5 sm:p-6"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-ink">
                      0{index + 1} · {item.mode}
                    </span>
                    <span className="rounded-full bg-hero px-2.5 py-0.5 text-[11px] text-muted">
                      {item.theme}
                    </span>
                  </div>
                  <div className="mx-auto max-w-[200px]">
                    <PomeeDeviceScreen
                      screen={id}
                      sizes="(min-width: 1024px) 200px, 42vw"
                    />
                  </div>
                </div>
                <figcaption className="mt-5 border-t border-line pt-3.5 text-xs leading-relaxed text-body">
                  {item.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* 5. Data Safety, Permissions & Play Console Compliance Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 rounded-[28px] border border-line bg-surface p-7 sm:p-12 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <EyebrowLabel dotColor="bg-leaf">
                Data Safety &amp; Permissions
              </EyebrowLabel>
              <h2 className="text-heading-card mt-4 text-2xl sm:text-3xl">
                Your data stays on your phone—guaranteed by the Android manifest.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                Pomee does not collect, store on servers, share, or sell any
                personal data. It has no user accounts and does not request the
                Android internet permission. The only setting saved locally is
                whether you prefer the light or dark theme.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/pomee/privacy-policy"
                className="group flex flex-col justify-between rounded-2xl bg-pastel-mint/60 p-5 transition-colors hover:bg-pastel-mint"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/70">
                  Play Console Policy
                </span>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink">
                    Pomee Privacy Policy
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/pomee/data-deletion"
                className="group flex flex-col justify-between rounded-2xl bg-pastel-blue/60 p-5 transition-colors hover:bg-pastel-blue"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/70">
                  Storage Guide
                </span>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink">
                    How to Delete Pomee Data
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Hardware Sensor & Metadata Table */}
          <div className="rounded-2xl border border-line bg-background p-6 sm:p-7 lg:col-span-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              Hardware Permissions &amp; Developer Metadata
            </h3>
            <dl className="mt-5 divide-y divide-line text-sm">
              <div className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-3">
                <dt className="font-medium text-ink">Motion Sensors</dt>
                <dd className="text-body sm:col-span-2">
                  Accelerometer &amp; gyroscope detect phone pickup during focus
                  and orient hourglass sand. Evaluated in RAM; never recorded.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-3">
                <dt className="font-medium text-ink">Vibration &amp; Wake</dt>
                <dd className="text-body sm:col-span-2">
                  Haptic buzz on phone pickup or session completion; keeps
                  screen awake while a timer is actively running.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-3">
                <dt className="font-medium text-ink">Package ID</dt>
                <dd className="font-mono text-xs text-ink sm:col-span-2">
                  {pomee.packageName}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-3">
                <dt className="font-medium text-ink">Developer Support</dt>
                <dd className="sm:col-span-2">
                  <a
                    href={`mailto:${site.email}?subject=Pomee`}
                    className="font-medium text-accent hover:underline"
                  >
                    {site.email}
                  </a>{" "}
                  <span className="text-muted">({site.name})</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
