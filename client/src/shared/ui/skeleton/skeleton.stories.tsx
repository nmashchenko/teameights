import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonProps } from './skeleton';

// Default props for Skeleton
const skeletonProps: SkeletonProps = {
  count: 1,
  inline: false,
  height: '100px',
  width: '100%',
  borderRadius: '4px',
};

// Defining meta information for Storybook
type Story = StoryObj<typeof Skeleton>;
const SkeletonTemplate: Story = {
  render: args => (
    <div style={{ width: '100%' }}>
      <Skeleton {...args} />
    </div>
  ),
};

export const Playground = { ...SkeletonTemplate };
Playground.args = skeletonProps;

// Skeleton with multiple elements
export const MultipleElements = { ...SkeletonTemplate };
MultipleElements.args = {
  ...skeletonProps,
  count: 5,
};

// Inline Skeleton elements
export const InlineElements = { ...SkeletonTemplate };
InlineElements.args = {
  ...skeletonProps,
  inline: true,
};

// Skeleton with custom dimensions
export const CustomDimensions = { ...SkeletonTemplate };
CustomDimensions.args = {
  ...skeletonProps,
  height: '50px',
  width: '50px',
};

// Skeleton with rounded corners
export const RoundedCorners = { ...SkeletonTemplate };
RoundedCorners.args = {
  ...skeletonProps,
  borderRadius: '50%',
};

// Skeleton with custom style
export const CustomStyle = { ...SkeletonTemplate };
CustomStyle.args = {
  ...skeletonProps,
  style: { backgroundColor: 'lightgray' },
};

// Skeleton with custom wrapper
export const CustomWrapper = { ...SkeletonTemplate };
CustomWrapper.args = {
  ...skeletonProps,
  wrapper: ({ children }) => (
    <div style={{ padding: '10px', backgroundColor: 'whitesmoke' }}>{children}</div>
  ),
};

const skeletonArgTypes = {
  count: {
    control: 'number',
    description: 'The number of skeleton elements to render.',
    defaultValue: 1,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 1 },
    },
  },
  inline: {
    control: 'boolean',
    description: 'Whether the skeleton elements should be rendered inline.',
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  wrapper: {
    control: 'object',
    description: 'An optional wrapper component for the skeleton elements.',
    table: {
      type: { summary: 'React.FunctionComponent' },
    },
  },
  className: {
    control: 'text',
    description: 'A custom class name for the skeleton elements.',
    table: {
      type: { summary: 'string' },
    },
  },
  height: {
    control: 'text',
    description: 'The height of the skeleton elements.',
    defaultValue: '20px',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '20px' },
    },
  },
  width: {
    control: 'text',
    description: 'The width of the skeleton elements.',
    defaultValue: '100%',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '100%' },
    },
  },
  borderRadius: {
    control: 'text',
    description: 'The border radius of the skeleton elements.',
    defaultValue: '4px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '4px' },
    },
  },
  containerTestId: {
    control: 'text',
    description: 'The data-testid attribute for the container element.',
    table: {
      type: { summary: 'string' },
    },
  },
  skeletonTestId: {
    control: 'text',
    description: 'The data-testid attribute for the skeleton elements.',
    table: {
      type: { summary: 'string' },
    },
  },
  containerClassName: {
    control: 'text',
    description: 'A custom class name for the container element.',
    table: {
      type: { summary: 'string' },
    },
  },
  style: {
    control: 'object',
    description: 'Custom styles for the skeleton elements.',
    table: {
      type: { summary: 'CSSProperties' },
    },
  },
};

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: skeletonArgTypes,
} as Meta;
