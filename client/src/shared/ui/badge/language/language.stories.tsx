import type { Meta } from '@storybook/react';
import { languageOptions } from 'shared/constant';

import { BadgeLanguage } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeLanguage> = {
  argTypes: {},
  component: BadgeLanguage,
  tags: ['autodocs'],
  title: 'shared/BadgeLanguage',
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge_default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 10 }}>
    {Object.keys(languageOptions).map((key, id) => (
      <BadgeLanguage data={key} key={id} />
    ))}
  </div>
);
