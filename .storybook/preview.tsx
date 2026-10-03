import type { Decorator, Preview } from "@storybook/nextjs-vite";

import "../src/app/globals.css";
import { fontVariables } from "../src/app/fonts";
import { ThemeProvider } from "../src/components/theme-provider";
import { ACCENTS, DEFAULT_ACCENT } from "../src/lib/accent";

/* Same viewports the landing page is checked against. */
export const VIEWPORTS = {
  mobile: { name: "Mobile (390)", styles: { width: "390px", height: "844px" }, type: "mobile" },
  tablet: { name: "Tablet (820)", styles: { width: "820px", height: "1180px" }, type: "tablet" },
  desktop: { name: "Desktop (1440)", styles: { width: "1440px", height: "900px" }, type: "desktop" },
} as const;

/*
 * Theme and accent are toolbar globals. Stories can pin them, for example
 * `globals: { theme: "dark" }`. The html element gets the same class and
 * data-accent attribute the site uses.
 */
const withGnomeStyle: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) ?? "light";
  const accent = (context.globals.accent as string) ?? DEFAULT_ACCENT;

  const root = document.documentElement;
  root.dataset.accent = accent;
  root.classList.add(...fontVariables.split(" "));

  return (
    <ThemeProvider attribute="class" forcedTheme={theme} enableSystem={false} disableTransitionOnChange>
      <div className="bg-window text-fg font-sans">
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withGnomeStyle],
  globalTypes: {
    theme: {
      description: "Light or dark style",
      toolbar: {
        title: "Style",
        icon: "mirror",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
    accent: {
      description: "GNOME accent color",
      toolbar: {
        title: "Accent",
        icon: "paintbrush",
        items: ACCENTS.map((a) => ({ value: a.id, title: a.label })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
    accent: DEFAULT_ACCENT,
  },
  parameters: {
    layout: "fullscreen",
    viewport: { options: VIEWPORTS },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Violations fail the Vitest run.
      test: "error",
    },
  },
};

export default preview;
