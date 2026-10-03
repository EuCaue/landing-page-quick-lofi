import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { Screenshots } from "./screenshots";
import { dark, mobile, mobileDark, tablet } from "@/stories/variants";

const meta = {
  title: "Sections/Screenshots",
  component: Screenshots,
} satisfies Meta<typeof Screenshots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const DesktopDark: Story = dark;
export const Tablet: Story = tablet;
export const Mobile: Story = mobile;
export const MobileDark: Story = mobileDark;

export const SwitchTabs: Story = {
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("tab", { name: "Player settings" }));
    const panel = canvas.getByRole("tabpanel", { name: "Player settings" });
    await expect(panel).toBeVisible();
    await expect(within(panel).getByText(/global shortcuts/i)).toBeInTheDocument();
  },
};
