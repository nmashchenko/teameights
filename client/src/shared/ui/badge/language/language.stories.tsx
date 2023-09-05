import type { Meta } from '@storybook/react';
import { languageOptions } from 'shared/constant/programmingLanguages';
import { BadgeLanguage } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeLanguage> = {
  title: 'shared/BadgeLanguage',
  component: BadgeLanguage,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge_default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
      {Object.keys(languageOptions).map((key, id) => (
        <BadgeLanguage data={key} key={id} />
      ))}
    </div>
  );
};
