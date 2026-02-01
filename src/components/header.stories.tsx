import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Header from "./header";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
