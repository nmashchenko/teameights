import type { Meta } from '@storybook/react';
import { UserCard } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserCard> = {
  title: 'widgets/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const UserCard_default = () => {
  return (
        <UserCard />
  );
};
