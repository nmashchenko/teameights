import type { Meta, StoryObj } from '@storybook/react';
import { BadgeLanguage } from './BadgeLanguage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeLanguage> = {
  title: 'shared/BadgeLanguage',
  component: BadgeLanguage,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type BadgeLanguage = StoryObj<typeof BadgeLanguage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BadgeLanguages: BadgeLanguage = {
  args: {
      data: 'Scala',
      key: 1
  },
};
