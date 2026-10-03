import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Home from "./page";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { dark, mobile, mobileDark, tablet } from "@/stories/variants";

function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Home />
      </main>
      <SiteFooter />
    </>
  );
}

const meta = {
  title: "Pages/Landing",
  component: LandingPage,
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("heading", { level: 1 })).toHaveTextContent("Lofi in your GNOME top bar.");
    const installLinks = canvas.getAllByRole("link", { name: /get it on gnome extensions/i });
    for (const link of installLinks) {
      await expect(link).toHaveAttribute("href", "https://extensions.gnome.org/extension/6904/quick-lofi/");
    }
  },
};
export const DesktopDark: Story = dark;
export const Tablet: Story = tablet;
export const Mobile: Story = mobile;
export const MobileDark: Story = mobileDark;
