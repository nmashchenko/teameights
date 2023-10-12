import type { Meta } from '@storybook/react';
import { Badge } from './badge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  title: 'shared/BadgeLanguage',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge_default = () => {
  return (
    <div>
      {/* {Object.keys(languageOptions).map((key, id) => (
        <Badge data={key} key={id} />
      ))} */}
    </div>
  );
};
