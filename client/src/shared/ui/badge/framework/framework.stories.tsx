import type { Meta } from '@storybook/react';
import { frameworkColors } from 'shared/constant';

import { BadgeFramework } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeFramework> = {
  argTypes: {},
  component: BadgeFramework,
  tags: ['autodocs'],
  title: 'shared/BadgeFramework',
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge_default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 10 }}>
    {Object.keys(frameworkColors).map((key, id) => (
      <BadgeFramework data={key} key={id} />
    ))}
  </div>
);
