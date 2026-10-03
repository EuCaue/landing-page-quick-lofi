import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Install } from "./install";
import { dark, mobile, mobileDark, tablet } from "@/stories/variants";

const meta = {
  title: "Sections/Install",
  component: Install,
} satisfies Meta<typeof Install>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const DesktopDark: Story = dark;
export const Tablet: Story = tablet;
export const Mobile: Story = mobile;
export const MobileDark: Story = mobileDark;
