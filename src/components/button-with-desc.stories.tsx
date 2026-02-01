import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ButtonWithDesc from "./button-with-desc";

const meta = {
  title: "Components/Button With Description",
  component: ButtonWithDesc,
} satisfies Meta<typeof ButtonWithDesc>;

export default meta;
type Story = StoryObj<typeof ButtonWithDesc>;

export const Default: Story = {
  args: {
    text: "Title Of The Button",
    desc: "Description Of The Button",
    href: "http://localhost:3000/"
  }
};
