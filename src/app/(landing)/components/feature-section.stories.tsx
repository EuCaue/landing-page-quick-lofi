import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeatureSection from "./feature-section";

const meta = {
  title: "Landing/FeatureSection",
  component: FeatureSection,
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof FeatureSection>;

export const Default: Story = {};
