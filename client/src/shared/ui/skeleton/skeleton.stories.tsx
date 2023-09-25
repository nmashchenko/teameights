import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonProps } from './skeleton';

// Default props for Skeleton
const skeletonProps: SkeletonProps = {
  count: 1,
  inline: false,
  height: '20px',
  width: '100%',
  borderRadius: '4px',
};

// Defining meta information for Storybook
type Story = StoryObj<typeof Skeleton>;
const SkeletonTemplate: Story = { render: args => <Skeleton {...args} /> };

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

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} as Meta;
