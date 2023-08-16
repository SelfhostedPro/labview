import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LVInput from "./LVInput";

const meta = {
  title: "LVInput",
  component: LVInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "nav"],
      description: "Background color/variant of the button",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "surface"],
    },
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
    },
    hidden: { control: "boolean" },
    loading: { control: "boolean" },
    text: {
      size: {
        control: "select",
        options: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      weight: {
        control: "select",
        options: ["bold", "semiBold", "light", "default"],
      },
      align: { control: "select", options: ["left", "center"] },
      color: {
        control: "select",
        options: ["primary", "secondary", "accent", "default"],
      },
    },
    spacing: {
      control: "select",
      options: ["none", "compact", "normal", "relaxed"],
    },
  },
  args: {
    variant: "default",
    color: "primary",
    size: "medium",
    hidden: false,
    loading: false,
    text: {
      size: "medium",
      weight: "semiBold",
      align: "center",
      color: "primary",
    },
    spacing: "normal",
  },
} satisfies Meta<typeof LVInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => <LVInput {...args}></LVInput>,
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Secondary: Story = {
  ...Template,
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  ...Template,
  args: {
    color: "accent",
  },
};

export const Large: Story = {
  ...Template,
  args: {
    size: "large",
  },
};

export const Small: Story = {
  ...Template,
  args: {
    size: "small",
  },
};
