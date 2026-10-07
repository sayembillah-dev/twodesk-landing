import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlayButton } from "@/components/play-button";
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

const screenshots = [
  { src: "/pomee/1-focus-light.png", alt: "Focus timer mid-session, light theme" },
  { src: "/pomee/2-focus-dark.png", alt: "Focus timer mid-session, dark theme" },
  { src: "/pomee/3-hourglass-light.png", alt: "Hourglass mode, light theme" },
  { src: "/pomee/4-hourglass-dark.png", alt: "Hourglass mode, dark theme" },
];

const features = [
  {
    title: "Pick a session",
    body: "Choose 10, 20, 25 or 30 minutes of focus, each with its own break. Tap a time or drag across the slider, then press play.",
  },
  {
    title: "Watch the water rise",
    body: "Water slowly fills the screen as you work. When focus is done it turns green and drains away during your break.",
  },
  {
    title: "Put the phone down",
    body: "Pick the phone up during a focus session and Pomee buzzes and flashes until you put it back. A small nudge to stay on task.",
  },
  {
    title: "A sand hourglass that acts real",
    body: "Set a time and flip to start. The sand always falls toward the ground, turning the phone sends it back, and laying it flat pauses it.",
  },
  {
    title: "Calm by design",
    body: "Light and dark themes, smooth spring animations and large, easy-to-read digits.",
  },
  {
    title: "Private by default",
    body: "No accounts, no ads, no tracking. Pomee works fully offline and keeps nothing but your theme choice on your device.",
  },
];

export default function PomeePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-pomee/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <Image
              src="/pomee/icon.png"
              alt="Pomee app icon"
              width={88}
              height={88}
              priority
              className="rounded-3xl shadow-lg shadow-pomee/20"
            />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {pomee.name}: a focus timer you can feel.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted text-pretty">
              As you work, water slowly rises from the bottom of the screen
              until the session is done. Then it turns green and drains away
              while you take your break.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayButton />
              <span className="text-sm text-muted">
                Free. No ads. No account.
              </span>
            </div>
          </div>
          <div className="mx-auto flex max-w-sm gap-4">
            <Image
              src={screenshots[0].src}
              alt={screenshots[0].alt}
              width={1080}
              height={1920}
              priority
              sizes="200px"
              className="w-1/2 rounded-[1.75rem] border-4 border-foreground/90 shadow-2xl"
            />
            <Image
              src={screenshots[3].src}
              alt={screenshots[3].alt}
              width={1080}
              height={1920}
              priority
              sizes="200px"
              className="mt-12 w-1/2 rounded-[1.75rem] border-4 border-foreground/90 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="mb-4 h-1.5 w-8 rounded-full bg-pomee" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Screenshots</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {screenshots.map((s) => (
            <figure key={s.src}>
              <Image
                src={s.src}
                alt={s.alt}
                width={1080}
                height={1920}
                sizes="(min-width: 640px) 240px, 50vw"
                className="rounded-2xl border border-line"
              />
              <figcaption className="mt-2 text-xs text-muted">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-6">
        <div className="grid gap-6 rounded-3xl border border-line bg-surface p-8 sm:p-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Your data stays on your phone
            </h2>
            <p className="mt-3 text-muted text-pretty">
              Pomee does not collect or share any personal data. It has no
              accounts and no internet access. The only thing it saves is your
              light or dark theme choice, on your device.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/pomee/privacy-policy" className="font-medium text-brand hover:underline">
                Pomee Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/pomee/data-deletion" className="font-medium text-brand hover:underline">
                How to delete your Pomee data
              </Link>
            </li>
            <li>
              <span className="text-muted">Support: </span>
              <a href={`mailto:${site.email}?subject=Pomee`} className="font-medium text-brand hover:underline">
                {site.email}
              </a>
            </li>
            <li className="text-muted">
              Developer: {site.name}. Package: <code className="text-xs">{pomee.packageName}</code>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
