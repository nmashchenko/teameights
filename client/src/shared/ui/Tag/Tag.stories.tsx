import type { Meta, StoryObj } from "@storybook/react"

import Tag from './Tag'

const meta: Meta<typeof Tag> = {
  title: "shared /Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    children: { defaultValue: "Text" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

