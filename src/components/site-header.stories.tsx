import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, waitFor, within } from "storybook/test";
import { SiteHeader } from "./site-header";
import { dark, mobile, mobileDark } from "@/stories/variants";

const meta = {
  title: "Site/Header",
  component: SiteHeader,
  decorators: [
    (Story) => (
      <div className="min-h-[420px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const DesktopDark: Story = dark;
export const Mobile: Story = mobile;
export const MobileDark: Story = mobileDark;

export const ChangeAccent: Story = {
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Main menu" }));
    const purple = await canvas.findByRole("radio", { name: "Purple" });
    await waitFor(() => expect(purple).toBeVisible());
    await userEvent.click(purple);
    await expect(document.documentElement.dataset.accent).toBe("purple");
    await expect(purple).toBeChecked();
    await userEvent.click(canvas.getByRole("radio", { name: "Teal" }));
    await expect(document.documentElement.dataset.accent).toBe("teal");
  },
};
