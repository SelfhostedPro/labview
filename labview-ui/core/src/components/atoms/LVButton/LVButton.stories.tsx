import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { LVButton, LVButtonProps } from "./LVButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "LVButton",
  component: LVButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  render: (args) => (
    <LVButton
      hidden={args.hidden}
      loading={args.loading}
      size={args.size}
      color={args.color}
    >
      {args.label}
    </LVButton>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "select", options: ["primary", "secondary", "accent"] },
    label: { control: "text" },
  },
  args: {
    label: "button",
    color: "primary",
    loading: false,
    hidden: false,
  },
} satisfies Meta<LVButtonProps & { label?: string }>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
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
