import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Testimonials from "./testimonials";

const meta = {
  title: "Landing/Testimonials",
  component: Testimonials,
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {};
