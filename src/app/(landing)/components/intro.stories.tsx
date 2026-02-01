import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Intro from "./intro";

const meta = {
  title: "Landing/Intro",
  component: Intro,
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof Intro>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    await expect(
      canvas.getByText("Sound. Focus. No distractions."),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(
        "Seamlessly integrated with your GNOME desktop. Just click and listen.",
      ),
    ).toBeInTheDocument();
    await expect(canvas.getByRole("link")).toBeInTheDocument();
    await expect(canvas.getByRole("link")).toHaveAttribute("href");
    await userEvent.tab();
    await expect(canvas.getByRole("link")).toHaveFocus();
  },
};
