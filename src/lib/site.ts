// Values that appear on the public pages and in the Play Console.
// Fill in every value marked TODO before publishing the site.

export const site = {
  name: "Twodesk",
  tagline: "Small, calm apps that respect your attention.",
  // The domain this site is deployed to (no trailing slash).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://twodesktech.com",
  // Must match the contact email in Play Console.
  email: "support@twodesktech.com",
  // TODO: leave empty unless you want a city or country shown on the contact page.
  location: "",
  // Google Search Console token, used to verify the site for Play Console.
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
} as const;

export const pomee = {
  name: "Pomee",
  storeTitle: "Pomee: Focus Timer",
  packageName: "com.twodesk.pomee",
  // Set to true once the app is live on Google Play, so the button links to the listing.
  live: false,
  playUrl: "https://play.google.com/store/apps/details?id=com.twodesk.pomee",
  shortDescription:
    "A focus timer that fills your screen with water, plus a real sand hourglass.",
  privacyUpdated: "October 7, 2026",
} as const;

export const legalUpdated = "October 7, 2026";
