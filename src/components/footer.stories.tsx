import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Footer from "./footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
