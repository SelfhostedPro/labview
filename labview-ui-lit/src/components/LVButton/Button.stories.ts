import type { Meta, StoryObj } from "@storybook/web-components";
import type { ButtonProps } from "./LVButton";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import "./LVButton";

interface StoryArgs extends ButtonProps {
  label: string;
}

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: "Example/Button",
  tags: ["autodocs"],
  component: "lv-btn",
  render: (args) =>
    html`<lv-btn color=${ifDefined(args.color)}>${args.label}</lv-btn>`,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
    },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
