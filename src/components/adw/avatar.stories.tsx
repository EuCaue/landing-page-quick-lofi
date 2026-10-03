import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./avatar";
import { dark } from "@/stories/variants";

const NAMES = ["CaptainSensible", "batistella", "Moty", "lampsbr", "himozzza", "sean123"];

function Gallery() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-4">
      {NAMES.map((n) => (
        <span key={n} className="flex items-center gap-[6px]">
          <Avatar name={n} size={40} />
          <span className="caption">{n}</span>
        </span>
      ))}
    </div>
  );
}

const meta = {
  title: "Adwaita/Avatar",
  component: Gallery,
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = dark;
