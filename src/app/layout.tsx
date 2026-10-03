import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ACCENT_INIT_SCRIPT, DEFAULT_ACCENT } from "@/lib/accent";
import { SITE_URL } from "@/lib/site-url";
import { LINKS, RELEASE } from "@/content/site";

const description =
  "A GNOME Shell extension that plays lofi radio and local audio from the top bar. Works with GNOME 46 to 50.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Quick Lofi: lofi in your GNOME top bar",
  description,
  applicationName: "Quick Lofi",
  authors: [{ name: RELEASE.author, url: LINKS.author }],
  creator: RELEASE.author,
  category: "software",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Quick Lofi: lofi in your GNOME top bar",
    description,
    url: "/",
    siteName: "Quick Lofi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Lofi: lofi in your GNOME top bar",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2e2e32" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-accent={DEFAULT_ACCENT}
      className={fontVariables}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: ACCENT_INIT_SCRIPT }} />
      </head>
      <body id="top" className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-[6px] focus:left-[6px] focus:z-30 focus:rounded-button focus:bg-accent-bg focus:px-2 focus:py-1 focus:font-bold focus:text-accent-fg"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
