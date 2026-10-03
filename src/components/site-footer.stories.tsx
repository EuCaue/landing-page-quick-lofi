import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SiteFooter } from "./site-footer";
import { dark, mobile } from "@/stories/variants";

const meta = {
  title: "Site/Footer",
  component: SiteFooter,
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dark: Story = dark;
export const Mobile: Story = mobile;
