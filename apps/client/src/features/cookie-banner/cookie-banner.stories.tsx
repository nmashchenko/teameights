import type { Meta } from '@storybook/react';
import { CookieBanner } from './cookie-banner';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof CookieBanner> = {
  title: 'shared/Cookie-Banner',
  component: CookieBanner,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CookieBanner_default = () => {
  return (
    <div>
      <CookieBanner />
    </div>
  );
};
