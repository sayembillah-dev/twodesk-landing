import Image from "next/image";
import Link from "next/link";
import { TwodeskMark } from "@/components/logo";
import { pomee, site } from "@/lib/site";

const principles = [
  {
    title: "No accounts",
    body: "Open the app and use it. Nothing to sign up for, nothing to log in to.",
  },
  {
    title: "No tracking",
    body: "Our apps do not include ads, analytics or trackers, and they do not send your data anywhere.",
  },
  {
    title: "Works offline",
    body: "Everything runs on your phone, so the apps work the same on a plane as at your desk.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
          <TwodeskMark className="mx-auto h-16 w-auto sm:h-20" />
          <h1 className="mx-auto mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Small apps that help you{" "}
            <span className="text-brand">get things done</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted text-pretty">
            Twodesk is an independent studio making simple, calm apps for
            Android. Each one does one job well and keeps your data on your
            device.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="#apps"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              See our apps
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-brand"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Our apps
        </h2>
        <Link
          href="/pomee"
          className="group mt-6 grid overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-brand/5 md:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <Image
                src="/pomee/icon.png"
                alt=""
                width={64}
                height={64}
                className="rounded-2xl"
              />
              <div>
                <h3 className="text-2xl font-semibold">{pomee.name}</h3>
                <p className="text-sm text-muted">Focus timer for Android</p>
              </div>
            </div>
            <p className="text-muted text-pretty">
              {pomee.shortDescription} Pick up your phone mid-session and it
              buzzes until you put it back down.
            </p>
            <span className="text-sm font-medium text-pomee">
              Learn more{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </div>
          <div className="relative aspect-[1024/500] bg-pomee-soft md:aspect-auto md:min-h-64">
            <Image
              src="/pomee/feature-graphic.png"
              alt="Pomee feature graphic showing the water-filled focus timer"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          How we build
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-6">
        <div className="rounded-3xl bg-[#01224a] px-8 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Questions or feedback?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/75">
            We read every message and aim to reply quickly.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-[#01224a] transition-transform hover:-translate-y-0.5"
          >
            {site.email}
          </a>
        </div>
      </section>
    </main>
  );
}
