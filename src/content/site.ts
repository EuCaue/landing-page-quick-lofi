import type { IconName } from "@/components/icons/paths";

/*
 * Every fact on the page lives here. Sources: the extension repository
 * (README, schemas, release notes) and its extensions.gnome.org listing.
 * Update this file when a new release ships.
 */

export const LINKS = {
  ego: "https://extensions.gnome.org/extension/6904/quick-lofi/",
  repo: "https://github.com/EuCaue/gnome-shell-extension-quick-lofi",
  issues: "https://github.com/EuCaue/gnome-shell-extension-quick-lofi/issues",
  releases: "https://github.com/EuCaue/gnome-shell-extension-quick-lofi/releases",
  license:
    "https://github.com/EuCaue/gnome-shell-extension-quick-lofi/blob/master/LICENSE",
  development:
    "https://github.com/EuCaue/gnome-shell-extension-quick-lofi#development",
  troubleshooting:
    "https://github.com/EuCaue/gnome-shell-extension-quick-lofi#troubleshooting",
  manualInstall:
    "https://github.com/EuCaue/gnome-shell-extension-quick-lofi#manual-installation-stable",
  extensionManager: "https://flathub.org/apps/com.mattjakeman.ExtensionManager",
  browserIntegration:
    "https://gnome.pages.gitlab.gnome.org/gnome-browser-integration/pages/installation-guide.html",
  kofi: "https://ko-fi.com/eucaue",
  author: "https://github.com/EuCaue",
  egoReviews: "https://extensions.gnome.org/extension/6904/quick-lofi/#comments",
} as const;

export const RELEASE = {
  version: "1.8.0",
  shellVersions: ["46", "47", "48", "49", "50"],
  /** extensions.gnome.org download count, October 2026. */
  downloads: "10,000+",
  license: "GPL-3.0",
  author: "Cauê Souza",
} as const;

export const SHELL_RANGE = `${RELEASE.shellVersions[0]} to ${RELEASE.shellVersions.at(-1)}`;

export type Station = {
  name: string;
  source: string;
  /** Playlists and files show progress and the current item in the mini player. */
  playlist?: { item: string; durationSeconds: number };
};

/*
 * The first three are the extension defaults. The last two match the
 * mini player capture in public/screenshots/panel-menu-dark.png.
 */
export const STATIONS: Station[] = [
  { name: "Lofi Radio", source: "https://play.streamafrica.net/lofiradio" },
  { name: "Lofi Hunter", source: "https://live.hunter.fm/lofi_high" },
  { name: "Lofi Hip-hop", source: "http://hyades.shoutca.st:8043/stream" },
  { name: "brown noise", source: "~/Music/brown-noise.ogg" },
  {
    name: "rain, books and coffee",
    source: "~/Music/rain-books-and-coffee/",
    playlist: { item: "rain, books and coffee (playlist)", durationSeconds: 3750 },
  },
];

export type FeatureSuffix =
  | { kind: "play" }
  | { kind: "keys"; keys: string[] }
  | { kind: "dropdown"; label: string }
  | { kind: "switch" }
  | { kind: "slider"; value: number };

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
  suffix?: FeatureSuffix;
};

export type FeatureGroup = {
  id: string;
  title: string;
  description: string;
  features: Feature[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "playback",
    title: "Playback",
    description: "Everything happens in the top bar menu.",
    features: [
      {
        icon: "media-playback-start",
        title: "Play from the panel",
        description:
          "Pick a station in the menu to play it. Click it again to pause, right-click to stop.",
        suffix: { kind: "play" },
      },
      {
        icon: "folder-music",
        title: "Streams and local files",
        description:
          "A station is a name plus a source: a stream URL or a path to a file. If mpv can play it, it works.",
      },
      {
        icon: "applications-multimedia",
        title: "Mini player",
        description:
          "Previous, play or pause, and next, with playback progress and the track title for playlists.",
      },
      {
        icon: "audio-volume-high",
        title: "Volume in the menu",
        description:
          "A slider sits under the station list. Set a default level in preferences.",
        suffix: { kind: "slider", value: 68 },
      },
    ],
  },
  {
    id: "control",
    title: "Control",
    description: "Use it without opening the menu at all.",
    features: [
      {
        icon: "input-keyboard",
        title: "Global shortcuts",
        description:
          "Assign keys to play or pause, stop, change volume, and skip between stations or playlist items.",
        suffix: { kind: "keys", keys: ["Ctrl", "\\"] },
      },
      {
        icon: "quick-lofi-indicator",
        title: "Click actions",
        description:
          "Choose what left, middle, and right clicks on the indicator do: show the menu, toggle play, stop, or open preferences.",
        suffix: { kind: "dropdown", label: "Toggle play" },
      },
      {
        icon: "media-skip-forward",
        title: "Media keys and MPRIS",
        description:
          "Quick Lofi registers as an MPRIS player, so media keys and the GNOME media controls work with it.",
        suffix: { kind: "switch" },
      },
    ],
  },
  {
    id: "organize",
    title: "Stations and advanced",
    description: "For long lists and unusual streams.",
    features: [
      {
        icon: "list-drag-handle",
        title: "Drag to reorder",
        description: "Rearrange stations in preferences by dragging their rows.",
      },
      {
        icon: "go-up",
        title: "Popup height limit",
        description: "Cap the menu height when the station list gets long.",
      },
      {
        icon: "network-server",
        title: "mpv arguments and browser cookies",
        description:
          "Pass your own mpv flags, or load cookies from a browser for streams that need a signed-in session.",
      },
    ],
  },
];

export type ScreenshotImage = { src: string; width: number; height: number };

export type Screenshot = {
  id: string;
  label: string;
  caption: string;
  dark: ScreenshotImage;
  /** Optional. Without it the dark capture is shown in both styles. */
  light?: ScreenshotImage;
};

/*
 * Add new captures here (for example the Radios page). The viewer builds
 * its tabs from this list.
 */
export const SCREENSHOTS: Screenshot[] = [
  {
    id: "panel-menu",
    label: "Panel menu",
    caption: "The panel menu with the mini player: playlist progress, controls, and volume.",
    dark: { src: "/screenshots/panel-menu-dark.png", width: 295, height: 318 },
  },
  {
    id: "player-settings",
    label: "Player settings",
    caption: "Preferences, Player page: default volume and global shortcuts.",
    light: { src: "/screenshots/shortcuts-light.png", width: 1380, height: 1252 },
    dark: { src: "/screenshots/shortcuts-dark.png", width: 1380, height: 1252 },
  },
  {
    id: "interface-settings",
    label: "Interface settings",
    caption: "Preferences, Interface page: indicator click actions and popup height.",
    light: { src: "/screenshots/actions-light.png", width: 1380, height: 1252 },
    dark: { src: "/screenshots/actions-dark.png", width: 1380, height: 1252 },
  },
];

export type Distro = { id: string; label: string; command: string };

export const DISTROS: Distro[] = [
  { id: "fedora", label: "Fedora", command: "sudo dnf install mpv" },
  { id: "debian", label: "Debian / Ubuntu", command: "sudo apt install mpv" },
  { id: "arch", label: "Arch", command: "sudo pacman -S mpv" },
  { id: "opensuse", label: "openSUSE", command: "sudo zypper install mpv" },
];

export type Review = {
  author: string;
  /** Quoted as written. `excerpt` marks a shortened review. */
  text: string;
  excerpt?: boolean;
  date: string;
  profile: string;
};

const profile = (user: string) => `https://extensions.gnome.org/accounts/profile/${user}`;

/* Reviews posted on extensions.gnome.org. The first one is featured. */
export const REVIEWS: Review[] = [
  {
    author: "CaptainSensible",
    text: "This works great on 46. This can also be used to add ANY stream so I have also added Radio Paradise channels thanks to the add radio feature. Great work!",
    date: "August 2025",
    profile: profile("CaptainSensible"),
  },
  {
    author: "batistella",
    text: "This extension is amazing! Of course is very cool... I don't need more a chrome tab only todo this... Of course uses low memory that a chrome instance... I really loved this!",
    date: "September 2026",
    profile: profile("batistella"),
  },
  {
    author: "Moty",
    text: "Dude, if you love hearing radios in your freetime, its a MUST HAVE. works perfectly, you can add your stations. THAT THING Is amazing.",
    excerpt: true,
    date: "May 2026",
    profile: profile("Moty"),
  },
  {
    author: "lampsbr",
    text: "very nice, working on gnome 49.5 (endeavour)",
    date: "April 2026",
    profile: profile("lampsbr"),
  },
  {
    author: "himozzza",
    text: "This is an amazing extension!",
    date: "September 2024",
    profile: profile("himozzza"),
  },
  {
    author: "sean123",
    text: "Those are dem real dope beats bruh...",
    date: "June 2024",
    profile: profile("sean123"),
  },
];

export const NAV = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#install", label: "Install" },
] as const;
