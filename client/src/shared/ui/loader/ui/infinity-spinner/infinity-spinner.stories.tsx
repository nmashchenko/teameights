import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const Template: Story = args => <InfinitySpin {...args} />;

export const Default = Template.bind({});
Default.args = {};
