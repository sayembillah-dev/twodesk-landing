import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "",
  "/pomee",
  "/pomee/privacy-policy",
  "/pomee/data-deletion",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
