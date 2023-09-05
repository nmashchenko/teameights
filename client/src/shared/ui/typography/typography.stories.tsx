import type { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographySize } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: 'shared/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TypographyBody_M: Story = {
  args: {
    size: TypographySize.Body_M,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyBody_L: Story = {
  args: {
    size: TypographySize.Body_L,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyBody_XL: Story = {
  args: {
    size: TypographySize.Body_XL,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyHeading_S: Story = {
  args: {
    size: TypographySize.Heading_S,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyHeading_M: Story = {
  args: {
    size: TypographySize.Heading_M,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyHeading_L: Story = {
  args: {
    size: TypographySize.Heading_L,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyHeading_XL: Story = {
  args: {
    size: TypographySize.Heading_XL,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};

export const TypographyCaption: Story = {
  args: {
    size: TypographySize.Caption,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt voluptatibus voluptas inventore assumenda, veniam, nihil eveniet dolore fugiat optio, eligendi debitis obcaecati dolorem itaque illo enim illum incidunt ducimus.'
  }
};
