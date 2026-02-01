import type { Preview } from "@storybook/nextjs-vite";

import "../src/app/globals.css";
import { themes } from "storybook/theming";
import { ThemeProvider } from "../src/components/theme-provider";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {Story()}
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    docs: { theme: themes.normal },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
