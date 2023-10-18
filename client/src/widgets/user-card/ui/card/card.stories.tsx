import type { Meta } from '@storybook/react';
import { UserCard } from './card';
import { IUserResponse } from '@teameights/types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserCard> = {
  title: 'widgets/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
const user1 = {
  photo: 'https://via.placeholder.com/70x70',
  programmingLanguages: ['JS'],
  frameworks: ['NodeJS'],
  isLeader: true,
} as unknown as IUserResponse;

export const UserCard_1variant = () => <UserCard user={user1} />;

const user2 = {
  photo: 'https://via.placeholder.com/70x70',
  programmingLanguages: ['JS', 'TS'],
  frameworks: ['NodeJS', 'React'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_2variant = () => <UserCard user={user2} />;

const user3 = {
  photo: 'https://via.placeholder.com/70x70',
  programmingLanguages: ['JS', 'TS', 'Rust'],
  frameworks: ['NodeJS', 'React', 'MUI'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_3variant = () => <UserCard user={user3} />;

const user4 = {
  photo: 'https://via.placeholder.com/70x70',
  programmingLanguages: ['JS', 'TS', 'Rust', 'Java'],
  frameworks: ['NodeJS', 'React', 'MUI', 'VueJS'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_4variant = () => <UserCard user={user4} />;

const user5 = {
  photo: 'https://via.placeholder.com/70x70',
  programmingLanguages: ['JS', 'TS', 'Rust', 'Java', 'Haskell'],
  frameworks: ['NodeJS', 'React', 'MUI', 'VueJS', 'Angular'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_5variant = () => <UserCard user={user5} />;
