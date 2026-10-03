import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ActionRow, BoxedList, PreferencesGroup } from "./boxed-list";
import { Keycaps, SwitchIllustration } from "./widgets";
import { dark, mobile } from "@/stories/variants";

function Example() {
  return (
    <div className="mx-auto flex max-w-[40rem] flex-col gap-8 p-4">
      <PreferencesGroup id="demo" title="Player" description="General player behavior">
        <BoxedList>
          <ActionRow icon="audio-volume-high" title="Volume" subtitle="Default volume when starting playback" />
          <ActionRow
            icon="input-keyboard"
            title="Play or pause"
            subtitle="Toggle playback of Quick Lofi."
            suffix={<Keycaps keys={["Ctrl", "\\"]} />}
          />
          <ActionRow icon="media-skip-forward" title="Enable MPRIS integration" suffix={<SwitchIllustration />} />
        </BoxedList>
      </PreferencesGroup>
      <BoxedList>
        <ActionRow href="#" title="Internal link" />
        <ActionRow href="https://example.org" external title="External link" subtitle="Opens in a new tab" />
      </BoxedList>
    </div>
  );
}

const meta = {
  title: "Adwaita/Boxed list",
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dark: Story = dark;
export const Mobile: Story = mobile;
