import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Hero from "./hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-4xl font-bold text-center leading-none">
        HERO TITLE
      </div>
    ),
  },
};
