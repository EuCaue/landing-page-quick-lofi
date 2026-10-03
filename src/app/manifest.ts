import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quick Lofi",
    short_name: "Quick Lofi",
    description: "A GNOME Shell extension that plays lofi radio and local audio from the top bar.",
    start_url: "/",
    display: "browser",
    background_color: "#fafafb",
    theme_color: "#2190a4",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
