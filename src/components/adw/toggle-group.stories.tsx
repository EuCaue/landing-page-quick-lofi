import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { expect, within } from "storybook/test";
import { TabPanel, ToggleGroup } from "./toggle-group";
import { dark } from "@/stories/variants";

const ITEMS = [
  { id: "radios", label: "Radios" },
  { id: "player", label: "Player" },
  { id: "interface", label: "Interface" },
];

function Demo() {
  const [value, setValue] = useState("radios");
  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <ToggleGroup items={ITEMS} value={value} onValueChange={setValue} label="Page" idPrefix="demo" />
      {ITEMS.map((item) => (
        <TabPanel key={item.id} idPrefix="demo" id={item.id} hidden={item.id !== value}>
          <p>{item.label} page</p>
        </TabPanel>
      ))}
    </div>
  );
}

const meta = {
  title: "Adwaita/Toggle group",
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dark: Story = dark;

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole("tab", { name: "Radios" });
    await userEvent.click(first);
    await expect(first).toHaveAttribute("aria-selected", "true");

    await userEvent.keyboard("{ArrowRight}");
    const player = canvas.getByRole("tab", { name: "Player" });
    await expect(player).toHaveFocus();
    await expect(player).toHaveAttribute("aria-selected", "true");
    await expect(canvas.getByText("Player page")).toBeVisible();

    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("tab", { name: "Interface" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(first).toHaveFocus();
  },
};
