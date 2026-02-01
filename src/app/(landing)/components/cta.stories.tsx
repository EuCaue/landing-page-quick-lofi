import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CTA from "./cta";

const meta = {
  title: "Landing/CTA",
  component: CTA,
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof CTA>;

export const Default: Story = {};
