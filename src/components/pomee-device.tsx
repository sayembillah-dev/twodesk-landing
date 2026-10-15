import Image from "next/image";

export type PomeeScreenId =
  | "focus-light"
  | "focus-dark"
  | "hourglass-light"
  | "hourglass-dark";

export const pomeeScreens: Record<
  PomeeScreenId,
  {
    src: string;
    alt: string;
    label: string;
    mode: "Focus Timer" | "Sand Hourglass";
    theme: "Light" | "Dark";
    caption: string;
  }
> = {
  "focus-light": {
    src: "/pomee/screen-focus-light.png",
    alt: "Pomee Focus Timer interface in light theme showing 10:24 remaining with rising coral water",
    label: "Focus · Daylight",
    mode: "Focus Timer",
    theme: "Light",
    caption: "Water rises steadily as your 25-minute focus block progresses.",
  },
  "focus-dark": {
    src: "/pomee/screen-focus-dark.png",
    alt: "Pomee Focus Timer interface in dark theme for low-glare evening sessions",
    label: "Focus · Night",
    mode: "Focus Timer",
    theme: "Dark",
    caption: "Low-glare OLED dark surface for late-night deep work.",
  },
  "hourglass-light": {
    src: "/pomee/screen-hourglass-light.png",
    alt: "Pomee Physics Sand Hourglass in light theme set to 05:00",
    label: "Hourglass · Daylight",
    mode: "Sand Hourglass",
    theme: "Light",
    caption: "Flip your phone to start; sand responds to real device gravity.",
  },
  "hourglass-dark": {
    src: "/pomee/screen-hourglass-dark.png",
    alt: "Pomee Physics Sand Hourglass in dark theme set to 05:00",
    label: "Hourglass · Night",
    mode: "Sand Hourglass",
    theme: "Dark",
    caption: "Lay the phone flat to pause sand flow; turn it over to reverse.",
  },
};

/**
 * Renders the Pomee Android screen (652x1414) inside a minimal hardware bezel.
 */
export function PomeeDeviceScreen({
  screen,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 260px, (min-width: 640px) 220px, 65vw",
}: {
  screen: PomeeScreenId;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const info = pomeeScreens[screen];
  const isDark = info.theme === "Dark";

  return (
    <div
      className={`relative rounded-[2.1rem] border-[6px] border-[#0D0B24] bg-[#0D0B24] p-0.5 shadow-xl shadow-[#0D0B24]/15 ${className}`}
    >
      {/* Subtle Android earpiece speaker notch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/20"
      />
      <div
        className={`relative overflow-hidden rounded-[1.75rem] ${
          isDark ? "bg-[#141414]" : "bg-[#FAF8F6]"
        }`}
      >
        <Image
          src={info.src}
          alt={info.alt}
          width={652}
          height={1414}
          priority={priority}
          sizes={sizes}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
