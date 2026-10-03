import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  DropdownIllustration,
  Keycaps,
  Pill,
  PlayButtonIllustration,
  SliderIllustration,
  SwitchIllustration,
} from "./widgets";
import { dark } from "@/stories/variants";

function Gallery() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-4">
        <SwitchIllustration />
        <SwitchIllustration on={false} />
        <PlayButtonIllustration />
        <SliderIllustration value={68} />
      </div>
      <div className="flex items-center gap-4">
        <Keycaps keys={["Ctrl", "Alt", "="]} />
        <DropdownIllustration label="Toggle play" />
      </div>
      <div className="flex items-center gap-2">
        <Pill>1.8.0</Pill>
        <Pill tone="neutral">GNOME 50</Pill>
      </div>
    </div>
  );
}

const meta = {
  title: "Adwaita/Widgets",
  component: Gallery,
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = dark;
