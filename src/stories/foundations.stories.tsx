import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { dark } from "./variants";

const SURFACES = [
  ["window", "bg-window"],
  ["view", "bg-view"],
  ["headerbar", "bg-headerbar"],
  ["sidebar", "bg-sidebar"],
  ["card", "bg-card"],
  ["popover", "bg-popover"],
  ["accent", "bg-accent-bg"],
  ["accent soft", "bg-accent-soft"],
  ["desktop", "bg-desktop"],
] as const;

function Foundations() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <section className="flex flex-col gap-2">
        <h2 className="title-2">Surfaces</h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {SURFACES.map(([name, cls]) => (
            <div key={name} className="flex flex-col gap-[6px]">
              <div className={`h-12 rounded-card shadow-[inset_0_0_0_1px_var(--border-color)] ${cls}`} />
              <span className="caption text-dim">{name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="title-2">Text</h2>
        <p className="text-fg">Foreground text</p>
        <p className="text-dim">Dim text for subtitles and captions</p>
        <p className="text-accent">Accent text for links</p>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="title-2">Type scale</h2>
        <p className="title-display">Display</p>
        <p className="title-1">Title 1</p>
        <p className="title-2">Title 2</p>
        <p className="heading">Heading</p>
        <p className="body-lg">Large body text</p>
        <p>Body text, 16px with 1.6 line height.</p>
        <p className="caption">Caption</p>
        <code>sudo dnf install mpv</code>
      </section>
    </div>
  );
}

const meta = {
  title: "Foundations/Tokens",
  component: Foundations,
} satisfies Meta<typeof Foundations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = dark;
