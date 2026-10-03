import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Reviews } from "./reviews";
import { dark, mobile, mobileDark, tablet } from "@/stories/variants";

const meta = {
  title: "Sections/Reviews",
  component: Reviews,
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const DesktopDark: Story = dark;
export const Tablet: Story = tablet;
export const Mobile: Story = mobile;
export const MobileDark: Story = mobileDark;
