import { LINKS, RELEASE } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";

/* schema.org SoftwareApplication. Only facts from site.ts; no ratings. */
const data = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Quick Lofi",
  description:
    "A GNOME Shell extension that plays lofi radio streams and local audio files from the top bar, using mpv.",
  url: SITE_URL,
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "GNOME Shell extension",
  operatingSystem: `Linux, GNOME Shell ${RELEASE.shellVersions.join(", ")}`,
  softwareVersion: RELEASE.version,
  softwareRequirements: "mpv",
  license: "https://www.gnu.org/licenses/gpl-3.0.html",
  downloadUrl: LINKS.ego,
  installUrl: LINKS.ego,
  codeRepository: LINKS.repo,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Person", name: RELEASE.author, url: LINKS.author },
  image: `${SITE_URL}/opengraph-image`,
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
