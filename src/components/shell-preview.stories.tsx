import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fireEvent, within } from "storybook/test";
import { DEFAULT_PREVIEW_STATE, ShellPreview } from "./shell-preview";
import { dark, mobile } from "@/stories/variants";

const meta = {
  title: "Site/Shell preview",
  component: ShellPreview,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[640px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ShellPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playing: Story = {};
export const PlayingDark: Story = dark;
export const Mobile: Story = mobile;
export const Paused: Story = { args: { initialState: { ...DEFAULT_PREVIEW_STATE, paused: true } } };
export const Stopped: Story = {
  args: { initialState: { ...DEFAULT_PREVIEW_STATE, current: null } },
};
export const MenuClosed: Story = {
  args: { initialState: { ...DEFAULT_PREVIEW_STATE, open: false } },
};

export const PlayPauseStop: Story = {
  args: { initialState: { ...DEFAULT_PREVIEW_STATE, current: null } },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Play Lofi Radio" }));
    await expect(canvas.getByText("Now playing:", { exact: false })).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Pause Lofi Radio" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Pause Lofi Radio" }));
    await expect(canvas.getByRole("button", { name: "Resume Lofi Radio" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Next" }));
    await expect(canvas.getByRole("button", { name: "Pause Lofi Hunter" })).toBeInTheDocument();
    await expect(canvas.getByText("LIVE")).toBeInTheDocument();

    await userEvent.pointer({ keys: "[MouseRight]", target: canvas.getByRole("button", { name: "Pause Lofi Hunter" }) });
    await expect(canvas.queryByText("Now playing:", { exact: false })).not.toBeInTheDocument();
  },
};

export const IndicatorTogglesMenu: Story = {
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const indicator = canvas.getByRole("button", { name: "Quick Lofi indicator" });
    await expect(indicator).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(canvas.getByRole("button", { name: "Play Lofi Radio" }));
    await userEvent.keyboard("{Escape}");
    await expect(indicator).toHaveAttribute("aria-expanded", "false");
    await expect(indicator).toHaveFocus();

    await userEvent.click(indicator);
    await expect(indicator).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByRole("region", { name: "Quick Lofi menu" })).not.toHaveAttribute("hidden");
  },
};

export const LiveStream: Story = {
  args: { initialState: { ...DEFAULT_PREVIEW_STATE, current: 1, elapsed: 0, paused: true } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("LIVE")).toBeInTheDocument();
    await expect(canvas.getByText("00:00")).toBeInTheDocument();
    await expect(canvas.getByRole("slider", { name: /live stream/i })).toBeDisabled();
  },
};

export const PlaylistProgress: Story = {
  args: { initialState: { ...DEFAULT_PREVIEW_STATE, paused: true } },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("rain, books and coffee (playlist)")).toBeInTheDocument();
    await expect(canvas.getByText("1:02:30")).toBeInTheDocument();
    const position = canvas.getByRole("slider", { name: /playback position/i });
    fireEvent.change(position, { target: { value: "65" } });
    await expect(canvas.getByText("01:05")).toBeInTheDocument();
    position.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByText("01:10")).toBeInTheDocument();
    await userEvent.keyboard("{PageUp}");
    await expect(canvas.getByText("01:40")).toBeInTheDocument();
  },
};

export const VolumeSlider: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider", { name: /volume/i });
    await expect(slider).toHaveValue("84");
    fireEvent.change(slider, { target: { value: "70" } });
    await expect(canvas.getByText("Volume: 70")).toBeInTheDocument();
  },
};
