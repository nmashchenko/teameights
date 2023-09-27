import type { Meta } from '@storybook/react';
import { UserCard } from './user-card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserCard> = {
  title: 'widgets/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;


export const UserCard_1variant = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS']}
    frameworks={['NodeJS']}
  />
);

export const UserCard_2variant = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS']}
    frameworks={['NodeJS', 'React']}
  />
);

export const UserCard_3variant = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust']}
    frameworks={['NodeJS', 'React', 'MUI']}
  />
);

export const UserCard_4variant = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java']}
    frameworks={['NodeJS', 'React', 'MUI', 'VueJS']}
  />
);

export const UserCard_5variant = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java', 'Haskell']}
    frameworks={['NodeJS', 'React', 'MUI', 'VueJS', 'Angular']}
  />
);
