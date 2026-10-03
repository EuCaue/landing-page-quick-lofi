import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, within } from "storybook/test";
import { CommandBlock } from "./command-block";
import { dark, mobile } from "@/stories/variants";

const meta = {
  title: "Adwaita/Command block",
  component: CommandBlock,
  parameters: { layout: "padded" },
  args: { command: "sudo dnf install mpv" },
} satisfies Meta<typeof CommandBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dark: Story = dark;
export const LongCommand: Story = {
  ...mobile,
  args: { command: "gnome-extensions install --force quick-lofi@eucaue.zip" },
};

export const CopiesToClipboard: Story = {
  beforeEach: () => {
    const writeText = fn(async () => {});
    const original = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
    return () => {
      if (original) Object.defineProperty(navigator, "clipboard", original);
    };
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /copy/i }));
    await expect(navigator.clipboard.writeText).toHaveBeenCalledWith(args.command);
    await expect(await canvas.findByRole("button", { name: /copied/i })).toBeInTheDocument();
  },
};

export const CopyFails: Story = {
  beforeEach: () => {
    const original = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: fn(async () => Promise.reject(new Error("denied"))) },
      configurable: true,
    });
    return () => {
      if (original) Object.defineProperty(navigator, "clipboard", original);
    };
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /copy/i }));
    await expect(await canvas.findByText(/copy failed, select the text/i)).toBeInTheDocument();
  },
};
