import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: 'shared/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TypographyCaption: Story = {
  args: {
    size: 'caption',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};
export const TypographyBody_S: Story = {
  args: {
    size: 'body_s',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};

export const TypographyBody_M: Story = {
  args: {
    size: 'body_m',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};

export const TypographyBody_L: Story = {
  args: {
    size: 'body_l',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};

export const TypographyHeading_S: Story = {
  args: {
    size: 'heading_s',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};

export const TypographyHeading_M: Story = {
  args: {
    size: 'heading_m',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};

export const TypographyHeading_L: Story = {
  args: {
    size: 'heading_l',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};

export const TypographyHeading_XL: Story = {
  args: {
    size: 'heading_xl',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.',
  },
};
