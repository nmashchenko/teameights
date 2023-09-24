import React from 'react';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { Flex, FlexProps } from './flex';

const flexProps: FlexProps = {
  align: 'center',
  justify: 'space-between',
  gap: 10,
  margin: 20,
  padding: 20,
  direction: 'row',
  maxHeight: '500px',
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  children: <div>Item 1</div>,
};

// Defining meta information for Storybook
type Story = StoryObj<typeof Flex>;
const FlexTemplate: Story = {
  render: args => (
    <Flex {...args}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  ),
};

export const Playground = { ...FlexTemplate };
Playground.args = flexProps;

// Flex with column direction
export const ColumnDirection = { ...FlexTemplate };
ColumnDirection.args = {
  ...flexProps,
  direction: 'column',
};

// Flex with different alignment
export const DifferentAlignment = { ...FlexTemplate };
DifferentAlignment.args = {
  ...flexProps,
  align: 'flex-start',
  justify: 'flex-end',
};

// Flex with different spacing
export const DifferentSpacing = { ...FlexTemplate };
DifferentSpacing.args = {
  ...flexProps,
  gap: 20,
  margin: 10,
  padding: 10,
};

// Flex with different dimensions
export const DifferentDimensions = { ...FlexTemplate };
DifferentDimensions.args = {
  ...flexProps,
  width: '50%',
  maxWidth: '300px',
  height: '200px',
};

const flexArgTypes: ArgTypes = {
  align: {
    control: {
      type: 'select',
    },
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'normal'],
    defaultValue: { summary: 'normal' },
    description: 'Defines the default behavior for how items are laid out along the cross axis.',
  },
  justify: {
    control: {
      type: 'select',
    },
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'normal',
    ],
    defaultValue: { summary: 'normal' },
    description:
      'Defines how the browser distributes space between and around content items along the main axis.',
  },
  direction: {
    control: {
      type: 'select',
    },
    options: ['row', 'column'],
    defaultValue: { summary: 'row' },
    description: 'Defines in which direction the container wants to stack the flex items.',
  },
  position: {
    control: {
      type: 'select',
    },
    options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    defaultValue: { summary: 'static' },
    description: 'Specifies the type of positioning method used for an element.',
  },
  gap: {
    control: 'text',
    defaultValue: { summary: '0' },
    description: 'Defines the space between flex items.',
  },
  margin: {
    control: 'text',
    defaultValue: { summary: '0' },
    description: 'Defines the space around the component.',
  },
  padding: {
    control: 'text',
    defaultValue: { summary: '0' },
    description: 'Defines the space inside the component.',
  },
  maxHeight: {
    control: 'text',
    defaultValue: { summary: 'none' },
    description: 'Defines the maximum height of the component.',
  },
  width: {
    control: 'text',
    defaultValue: { summary: '100%' },
    description: 'Defines the width of the component.',
  },
  maxWidth: {
    control: 'text',
    defaultValue: { summary: 'none' },
    description: 'Defines the maximum width of the component.',
  },
  height: {
    control: 'text',
    defaultValue: { summary: 'auto' },
    description: 'Defines the height of the component.',
  },
};

export default {
  title: 'shared/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: flexArgTypes,
} as Meta;
