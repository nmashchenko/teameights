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

export const UserCard_1framework = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java']}
    frameworks={['NodeJS']}
  />
);

export const UserCard_2frameworks = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java']}
    frameworks={['NodeJS', 'React']}
  />
);

export const UserCard_3frameworks = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java']}
    frameworks={['NodeJS', 'React', 'MUI']}
  />
);

export const UserCard_4frameworks = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java']}
    frameworks={['NodeJS', 'React', 'MUI', 'VueJS']}
  />
);

export const UserCard_5frameworks = () => (
  <UserCard
    image='https://via.placeholder.com/70x70'
    programmingLanguages={['JS', 'TS', 'Rust', 'Java']}
    frameworks={['NodeJS', 'React', 'MUI', 'VueJS', 'Angular']}
  />
);
