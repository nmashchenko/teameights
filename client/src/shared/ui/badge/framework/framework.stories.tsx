import type { Meta } from '@storybook/react';
import { frameworkColors } from 'shared/constant';
import { BadgeFramework } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeFramework> = {
  title: 'shared/BadgeFramework',
  component: BadgeFramework,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge_default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
      {Object.keys(frameworkColors).map((key, id) => (
        <BadgeFramework data={key} key={id} />
      ))}
    </div>
  );
};
