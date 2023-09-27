import type { Meta } from '@storybook/react';
import { AndMore } from './and-more';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AndMore> = {
  title: 'shared/AndMore',
  component: AndMore,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AndMore_Button = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
    <AndMore makeWhite={true}>2</AndMore>
  </div>
);
