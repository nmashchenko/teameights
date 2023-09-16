import React from 'react';
import { Loader, LoaderProps } from './loader';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'shared/Loader/Loader',
  component: Loader,
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

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  paddingLeft: '0',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  paddingLeft: '50px',
};
