import type { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographySize } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  argTypes: {},
  component: Typography,
  tags: ['autodocs'],
  title: 'shared/Typography',
};

export default meta;
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TypographyBody_M: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Body_M,
  },
};

export const TypographyBody_L: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Body_L,
  },
};

export const TypographyBody_XL: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Body_XL,
  },
};

export const TypographyHeading_S: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Heading_S,
  },
};

export const TypographyHeading_M: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Heading_M,
  },
};

export const TypographyHeading_L: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Heading_L,
  },
};

export const TypographyHeading_XL: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Heading_XL,
  },
};

export const TypographyCaption: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
    size: TypographySize.Caption,
  },
};
