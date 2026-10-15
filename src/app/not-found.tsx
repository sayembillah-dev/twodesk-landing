import { PrimaryButton, SecondaryButton } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <span className="rounded-full bg-pastel-lavender px-3.5 py-1 font-mono text-xs font-semibold text-ink">
        HTTP 404
      </span>
      <h1 className="text-heading-section mt-5 text-ink">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-body">
        The page you are looking for does not exist or has moved to a new
        address.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <PrimaryButton href="/" variant="ink">
          Back to Twodesk Home
        </PrimaryButton>
        <SecondaryButton href="/pomee">Explore Pomee</SecondaryButton>
      </div>
    </main>
  );
}
