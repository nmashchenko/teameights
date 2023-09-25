import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InfinitySpin } from './infinity-spinner';

export default {
  title: 'shared/Loader/InfinitySpinner',
  component: InfinitySpin,
  argTypes: {
    paddingLeft: {
      control: {
        type: 'text',
      },
      description: 'Padding on the left side of the loader',
      defaultValue: '0',
    },
  },
} as Meta;

const Template: StoryFn = args => <InfinitySpin {...args} />;

export const Default = Template.bind({});
Default.args = {};
