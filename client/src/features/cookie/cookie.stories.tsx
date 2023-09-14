import type { Meta } from '@storybook/react';
import { Cookie } from './cookie';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Cookie> = {
  title: 'shared/Cookie',
  component: Cookie,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Cookie_default = () => {
  return (
    <div>
      <Cookie />
    </div>
  );
};
