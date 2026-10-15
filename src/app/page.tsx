import Image from "next/image";
import Link from "next/link";
import { EditorialCollage } from "@/components/editorial-collage";
import { PomeeDeviceScreen } from "@/components/pomee-device";
import {
  EyebrowLabel,
  PrimaryButton,
  ProcessCard,
  SecondaryButton,
  SectionHeading,
} from "@/components/ui";
import { pomee, site } from "@/lib/site";

const methodologySteps = [
  {
    number: "01",
    tone: "blue" as const,
    title: "Single-purpose scope",
    description:
      "Each app is designed around one clear job. We never bundle social feeds, streak gamification, or nagging upgrade modals into a daily tool.",
    footnote: "SCOPE: ONE UTILITY PER PACKAGE",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="14" height="14" rx="3" />
        <circle cx="10" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "02",
    tone: "mint" as const,
    title: "Offline at the OS level",
    description:
      "Pomee does not request the Android INTERNET permission. Even if you wanted it to phone home, the operating system blocks network sockets.",
    footnote: "MANIFEST: NO INTERNET PERMISSION",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M10 2.5L4 5.2v4.6c0 4.1 2.6 7.8 6 9.2 3.4-1.4 6-5.1 6-9.2V5.2L10 2.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 10l1.8 1.8 3.5-3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    tone: "lavender" as const,
    title: "Ephemeral sensor physics",
    description:
      "Motion sensors detect phone pickups and orient the hourglass sand toward gravity in real time. Readings live in memory for milliseconds and are never stored.",
    footnote: "SENSORS: REAL-TIME MEMORY ONLY",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 3h8M6 17h8M7 3c0 4 3 5 3 7s-3 3-3 7M13 3c0 4-3 5-3 7s3 3 3 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    tone: "cream" as const,
    title: "Auditable open source",
    description:
      "Trust should not require blind faith. Pomee is licensed under MIT on GitHub so engineers and users can inspect every permission and build from source.",
    footnote: "LICENSE: MIT PUBLIC REPOSITORY",
    symbol: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const architectureSpecs = [
  {
    category: "Account & Identity",
    twodesk: "No registration, no sign-in, no user profile",
    detail: "Launch straight into the timer on first install.",
  },
  {
    category: "Analytics & Telemetry",
    twodesk: "Zero third-party SDKs, zero crash or usage trackers",
    detail: "No Firebase, no ad networks, no behavioral profiling.",
  },
  {
    category: "On-Device Persistence",
    twodesk: "1 boolean preference (Light or Dark theme)",
    detail: "Stored in Android private app storage; cleared on uninstall.",
  },
  {
    category: "Source Availability",
    twodesk: "Full source code on GitHub under the MIT License",
    detail: "Reproducible builds published on Google Play and GitHub Releases.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. Editorial Hero Section */}
      <section className="border-b border-line bg-hero">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8">
          {/* Asymmetric Top Header (7 / 5 split so buttons sit side-by-side cleanly) */}
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <EyebrowLabel dotColor="bg-accent">
                Independent Android Software Studio
              </EyebrowLabel>
              <h1 className="text-display-hero mt-6 text-ink">
                Calm, tactile apps built to respect your attention.
              </h1>
            </div>
            <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
              <p className="text-base leading-relaxed text-body sm:text-lg">
                Twodesk builds focused utility software for Android. Every app
                does one job well, runs 100% offline on your device, and leaves
                your personal data untouched.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PrimaryButton href="/pomee" variant="ink">
                  <span>Explore Pomee</span>
                  <span aria-hidden="true">→</span>
                </PrimaryButton>
                <SecondaryButton href="#methodology">
                  Engineering Standards
                </SecondaryButton>
              </div>
            </div>
          </div>

          {/* Editorial Visual Collage */}
          <div className="mt-12 sm:mt-16">
            <EditorialCollage />
          </div>
        </div>
      </section>

      {/* 2. Verified Technical Ledger Strip */}
      <section aria-label="Verified technical specifications" className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-line px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          <div className="py-8 pr-4 sm:py-10 sm:pr-8">
            <div className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              0 SDKs
            </div>
            <p className="mt-1.5 text-sm font-medium text-ink">
              No ad or analytics libraries
            </p>
            <p className="mt-1 text-xs text-muted">
              Verified clean dependency tree
            </p>
          </div>
          <div className="py-8 pl-4 sm:px-8 sm:py-10">
            <div className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              100%
            </div>
            <p className="mt-1.5 text-sm font-medium text-ink">
              Offline on-device execution
            </p>
            <p className="mt-1 text-xs text-muted">
              Works identically on a plane or at your desk
            </p>
          </div>
          <div className="py-8 pr-4 sm:px-8 sm:py-10">
            <div className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              2 Modes
            </div>
            <p className="mt-1.5 text-sm font-medium text-ink">
              Water timer &amp; sand hourglass
            </p>
            <p className="mt-1 text-xs text-muted">
              Driven by real-time device motion sensors
            </p>
          </div>
          <div className="py-8 pl-4 sm:py-10 sm:pl-8">
            <div className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              MIT
            </div>
            <p className="mt-1.5 text-sm font-medium text-ink">
              Open-source codebase
            </p>
            <p className="mt-1 text-xs text-muted">
              Publicly auditable on GitHub
            </p>
          </div>
        </div>
      </section>

      {/* 3. Flagship Product Case Study: Pomee */}
      <section
        id="apps"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Flagship Release · com.twodesk.pomee"
            dotColor="bg-pomee"
            title="Pomee: A focus timer you can feel from across the desk."
            description="Most timer apps ask you to create an account, manage cloud task lists, or read tiny digits. Pomee turns your phone into a calm physical object."
          />
          <div className="shrink-0">
            <PrimaryButton href="/pomee" variant="pomee">
              <span>Inspect Pomee in detail</span>
              <span aria-hidden="true">→</span>
            </PrimaryButton>
          </div>
        </div>

        {/* Asymmetric Case Study Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 7 Cols: Narrative & Engineering Breakdown */}
          <div className="flex min-w-0 flex-col justify-between rounded-[24px] border border-line bg-surface p-7 sm:p-10 lg:col-span-7">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/pomee/icon.png"
                    alt="Pomee icon"
                    width={60}
                    height={60}
                    className="rounded-2xl border border-line shadow-sm"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">
                      {pomee.storeTitle}
                    </h3>
                    <p className="font-mono text-xs text-muted">
                      Android Utility · Free · No Ads · Open Source
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-pastel-mint px-3.5 py-1.5 font-mono text-xs font-semibold text-ink">
                  ZERO DATA COLLECTED
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-background p-5">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-pomee">
                    01 / Rising Water Focus
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-ink">
                    Ambient visual progress
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Choose 10, 20, 25, or 30 minutes. Coral water slowly fills
                    the screen while you work, then turns leaf-green and drains
                    away during your break.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-5">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    02 / Pickup Deterrent
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-ink">
                    Immediate tactile nudge
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Reach for your phone mid-session and the accelerometer
                    detects the lift—buzzing and flashing the screen until you
                    set it back down.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-5">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                    03 / Physics Sand Hourglass
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-ink">
                    Gravity-driven sand flow
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Flip the phone to start a 30s to 10m sand timer. Turning the
                    device reverses the sand; laying it flat on the table pauses
                    the timer.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-5">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-leaf">
                    04 / Daylight &amp; Night Themes
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-ink">
                    High-contrast legibility
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Switch effortlessly between warm paper-white daylight mode
                    and deep OLED dark mode with smooth spring physics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <Link
                  href="/pomee"
                  className="text-accent hover:underline"
                >
                  Product overview &amp; interactive demo →
                </Link>
                <Link
                  href="/pomee/privacy-policy"
                  className="text-body hover:text-ink hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/pomee/data-deletion"
                  className="text-body hover:text-ink hover:underline"
                >
                  Data Deletion
                </Link>
              </div>
              <a
                href="https://github.com/sayembillah-dev/pomee"
                rel="noopener noreferrer"
                className="font-mono text-xs font-medium text-muted hover:text-ink"
              >
                github.com/sayembillah-dev/pomee ↗
              </a>
            </div>
          </div>

          {/* Right 5 Cols: Composed Dual-Device Visual Card */}
          <div className="flex min-w-0 flex-col justify-between overflow-hidden rounded-[24px] bg-pastel-pink/50 p-7 sm:p-10 lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                Daylight &amp; Night Surfaces
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1 font-mono text-[11px] font-medium text-ink">
                60 FPS Canvas
              </span>
            </div>

            <div className="my-8 grid grid-cols-2 items-center gap-4 sm:gap-6">
              <div>
                <PomeeDeviceScreen
                  screen="focus-light"
                  sizes="(min-width: 1024px) 200px, 40vw"
                />
                <p className="mt-3 text-center font-mono text-[11px] font-medium text-ink/75">
                  Focus · Light
                </p>
              </div>
              <div className="mt-8">
                <PomeeDeviceScreen
                  screen="hourglass-dark"
                  sizes="(min-width: 1024px) 200px, 40vw"
                />
                <p className="mt-3 text-center font-mono text-[11px] font-medium text-ink/75">
                  Hourglass · Dark
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/85 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-ink">
                <span>Desk-Stand Legibility</span>
                <span className="font-mono text-pomee">Always-On Display</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-body">
                Oversized numerals and rising water stay readable at a glance
                when propped on a desk stand or laid flat beside your keyboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dark Navy Methodology Section with Four Pastel Cards */}
      <section
        id="methodology"
        className="scroll-mt-18 bg-[#0D0B24] py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                inverted
                eyebrow="Engineering Methodology"
                dotColor="bg-pastel-mint"
                title="How we design software that stays out of your way."
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                Every utility we ship follows four strict architectural
                constraints. If a feature requires network calls, user
                tracking, or visual clutter, we leave it out.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {methodologySteps.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                symbol={step.symbol}
                title={step.title}
                description={step.description}
                footnote={step.footnote}
                tone={step.tone}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transparency & Privacy Verification Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Privacy by Architecture"
              dotColor="bg-leaf"
              title="Plain-English policies backed by system constraints."
              description="Privacy policies shouldn't be 10,000-word legal loopholes. Because our apps collect zero personal data, our documentation is short, specific, and verifiable."
            />

            <div className="mt-8 space-y-3">
              <Link
                href="/pomee/privacy-policy"
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink/30"
              >
                <div>
                  <div className="text-sm font-semibold text-ink">
                    Pomee App Privacy Policy
                  </div>
                  <div className="text-xs text-muted">
                    Sensor permissions, local theme storage &amp; Google Play disclosure
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </Link>

              <Link
                href="/pomee/data-deletion"
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink/30"
              >
                <div>
                  <div className="text-sm font-semibold text-ink">
                    Pomee Data Deletion Guide
                  </div>
                  <div className="text-xs text-muted">
                    Step-by-step instructions to clear local app storage
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </Link>

              <Link
                href="/privacy-policy"
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink/30"
              >
                <div>
                  <div className="text-sm font-semibold text-ink">
                    Website Privacy Policy &amp; Terms
                  </div>
                  <div className="text-xs text-muted">
                    Cookie-free static site hosting &amp; MIT open-source terms
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right 7 columns: Architectural Audit Table */}
          <div className="overflow-hidden rounded-[24px] border border-line bg-surface lg:col-span-7">
            <div className="border-b border-line bg-hero px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-ink">
                  Twodesk Data &amp; Permission Ledger
                </h3>
                <span className="rounded-full bg-pastel-mint px-3 py-1 font-mono text-[11px] font-semibold text-ink">
                  AUDITED OCT 2026
                </span>
              </div>
              <p className="mt-1 text-xs text-body">
                Summary of how Twodesk software handles user data across our apps and web properties.
              </p>
            </div>

            <div className="divide-y divide-line">
              {architectureSpecs.map((item) => (
                <div
                  key={item.category}
                  className="grid grid-cols-1 gap-2 px-6 py-5 sm:grid-cols-12 sm:gap-4 sm:px-8"
                >
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted sm:col-span-4 sm:pt-0.5">
                    {item.category}
                  </div>
                  <div className="sm:col-span-8">
                    <div className="text-sm font-semibold text-ink">
                      {item.twodesk}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-body">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0D0B24] px-6 py-14 text-white sm:px-14 sm:py-18">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <EyebrowLabel inverted dotColor="bg-pastel-blue">
                Direct Developer Support
              </EyebrowLabel>
              <h2 className="text-heading-section mt-5 text-white">
                Questions, bug reports, or ideas for a calm utility?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                When you email Twodesk, you reach the developer who built the
                app—not an automated ticket bot. We read every message and reply
                personally.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <PrimaryButton
                href={`mailto:${site.email}`}
                variant="white"
                external
              >
                <span>{site.email}</span>
                <span aria-hidden="true">→</span>
              </PrimaryButton>
              <SecondaryButton href="/contact" inverted>
                Visit Support Center
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
