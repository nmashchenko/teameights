import type { Meta, StoryObj } from '@storybook/react';
import { BadgeFramework } from './BadgeFramework';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeFramework> = {
  title: 'shared/BadgeFramework',
  component: BadgeFramework,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type BadgeFramework = StoryObj<typeof BadgeFramework>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BadgeFrameworkNodeJS: BadgeFramework = {
  args: {
    name: 'Node.js',
  },
};

export const BadgeFrameworkAndroid: BadgeFramework = {
  args: {
    name: 'Android',
  },
};

export const BadgeFrameworkExpress: BadgeFramework = {
  args: {
    name: 'Express',
  },
};
