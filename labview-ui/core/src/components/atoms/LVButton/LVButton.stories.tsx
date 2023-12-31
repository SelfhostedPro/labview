import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LVButton from "./LVButton";

const meta = {
  title: "LVButton",
  component: LVButton,
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
    children: { control: "text" },
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
    children: "Button Label",
  },
} satisfies Meta<typeof LVButton & { label: React.ReactNode }>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ children, ...args }) => <LVButton {...args}>{children}</LVButton>,
};

export const Default: Story = {
  ...Template,
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    color: "secondary",
    children: "Button",
  },
};

export const Large: Story = {
  ...Template,
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  ...Template,
  args: {
    size: "small",
    children: "Button",
  },
};
