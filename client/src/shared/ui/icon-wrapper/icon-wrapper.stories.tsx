import React from 'react';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { IconWrapper, IconWrapperProps } from './icon-wrapper';
import { ArrowLeftIcon, LinkIcon } from '@/shared/assets';
import { ICON_OPTIONS } from '@/shared/assets/storybook';

// Default props for IconWrapper
const iconWrapperProps: IconWrapperProps = {
  cursor: 'pointer',
  width: 50,
  height: 50,
  padding: 10,
  margin: 5,
  children: <LinkIcon />,
};

// Defining meta information for Storybook
type Story = StoryObj<typeof IconWrapper>;
const IconWrapperTemplate: Story = { render: args => <IconWrapper {...args} /> };

export const Playground = { ...IconWrapperTemplate };
Playground.args = iconWrapperProps;

// IconWrapper with different cursor
export const DifferentCursor = { ...IconWrapperTemplate };
DifferentCursor.args = {
  ...iconWrapperProps,
  cursor: 'not-allowed',
};

// IconWrapper with different dimensions
export const DifferentDimensions = { ...IconWrapperTemplate };
DifferentDimensions.args = {
  ...iconWrapperProps,
  width: 100,
  height: 100,
};

// IconWrapper with different padding and margin
export const DifferentPaddingMargin = { ...IconWrapperTemplate };
DifferentPaddingMargin.args = {
  ...iconWrapperProps,
  padding: 20,
  margin: 10,
};

// IconWrapper with different icon
export const DifferentIcon = { ...IconWrapperTemplate };
DifferentIcon.args = {
  ...iconWrapperProps,
  children: <ArrowLeftIcon />,
};

const iconWrapperArgTypes: ArgTypes = {
  cursor: {
    control: {
      type: 'select',
    },
    options: [
      'auto',
      'default',
      'none',
      'context-menu',
      'help',
      'pointer',
      'progress',
      'wait',
      'cell',
      'crosshair',
      'text',
      'vertical-text',
      'alias',
      'copy',
      'move',
      'no-drop',
      'not-allowed',
      'grab',
      'grabbing',
      'all-scroll',
      'col-resize',
      'row-resize',
      'n-resize',
      'e-resize',
      's-resize',
      'w-resize',
      'ne-resize',
      'nw-resize',
      'se-resize',
      'sw-resize',
      'ew-resize',
      'ns-resize',
      'nesw-resize',
      'nwse-resize',
      'zoom-in',
      'zoom-out',
    ],
    description: 'The CSS cursor property to be applied on the wrapper.',
    defaultValue: 'default',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'default' },
    },
  },
  width: {
    control: 'text',
    description: 'The width of the wrapper.',
    defaultValue: 'auto',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: 'auto' },
    },
  },
  height: {
    control: 'text',
    description: 'The height of the wrapper.',
    defaultValue: 'auto',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: 'auto' },
    },
  },
  padding: {
    control: 'text',
    description: 'The padding of the wrapper.',
    defaultValue: 0,
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '0' },
    },
  },
  margin: {
    control: 'text',
    description: 'The margin of the wrapper.',
    defaultValue: 0,
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '0' },
    },
  },
  children: {
    control: {
      type: 'select',
    },
    options: ICON_OPTIONS,
  },
};

export default {
  title: 'shared/IconWrapper',
  component: IconWrapper,
  tags: ['autodocs'],
  argTypes: iconWrapperArgTypes,
} as Meta;
