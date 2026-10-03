import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, LinkButton } from "./button";
import { Icon } from "@/components/icons/icon";
import { dark } from "@/stories/variants";

const meta = {
  title: "Adwaita/Button",
  component: Button,
  parameters: { layout: "padded" },
  args: { children: "Button" },
  argTypes: {
    variant: { control: "inline-radio", options: ["raised", "flat", "suggested"] },
    size: { control: "inline-radio", options: ["default", "pill", "icon", "icon-circular"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Raised: Story = {};
export const Flat: Story = { args: { variant: "flat" } };
export const Suggested: Story = { args: { variant: "suggested" } };
export const SuggestedPill: Story = {
  args: { variant: "suggested", size: "pill", children: "Get it on GNOME Extensions" },
};
export const Disabled: Story = { args: { disabled: true } };
export const IconButton: Story = {
  args: { variant: "flat", size: "icon", "aria-label": "Main menu", children: <Icon name="open-menu" /> },
};

function AllVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-4">
      <Button>Raised</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="suggested">Suggested</Button>
      <LinkButton href="#" variant="suggested" size="pill">
        Pill link
        <Icon name="external-link" size={14} />
      </LinkButton>
      <Button variant="flat" size="icon" aria-label="Main menu">
        <Icon name="open-menu" />
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export const Overview: Story = { render: () => <AllVariants /> };
export const OverviewDark: Story = { ...dark, render: () => <AllVariants /> };
