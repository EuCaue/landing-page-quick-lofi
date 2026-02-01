import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Page from "./page";
import Header from "@/components/header";
import Footer from "@/components/footer";

const meta = {
  title: "Landing/Landing Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <>
          <Header />
          {Story()}
          <Footer />
        </>
      );
    },
  ],
};
