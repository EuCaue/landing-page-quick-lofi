import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Features } from "./features";
import { dark, mobile, mobileDark, tablet } from "@/stories/variants";

const meta = {
  title: "Sections/Features",
  component: Features,
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const DesktopDark: Story = dark;
export const Tablet: Story = tablet;
export const Mobile: Story = mobile;
export const MobileDark: Story = mobileDark;
