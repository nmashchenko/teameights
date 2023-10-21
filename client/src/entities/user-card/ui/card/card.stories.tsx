import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './card';
import { IUserResponse } from '@teameights/types';

const defaultUser = {
  photo: { path: 'https://via.placeholder.com/70x70' },
  fullName: 'Brooklyn',
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserCard> = {
  title: 'entities/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {
    user: {
      photo: { control: 'text' },
      fullName: { control: 'text' },
      programmingLanguages: { control: 'array' },
      frameworks: { control: 'array' },
      isLeader: { control: 'boolean' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof UserCard>;

export const UserCardPreview: Story = {
  args: {
    user: {
      photo: 'https://via.placeholder.com/70x70',
      fullName: 'John Doe',
      programmingLanguages: ['JS', 'TS', 'Rust', 'Java', 'Haskell'],
      frameworks: ['NodeJS', 'React', 'MUI', 'VueJS', 'Angular'],
      isLeader: true,
    } as unknown as IUserResponse,
  },
};

const user1 = {
  ...defaultUser,
  programmingLanguages: ['JS'],
  frameworks: ['NodeJS'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_1variant = () => <UserCard user={user1} />;

const user2 = {
  ...defaultUser,
  programmingLanguages: ['JS', 'TS'],
  frameworks: ['NodeJS', 'React'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_2variant = () => <UserCard user={user2} />;

const user3 = {
  ...defaultUser,
  programmingLanguages: ['JS', 'TS', 'Rust'],
  frameworks: ['NodeJS', 'React', 'MUI'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_3variant = () => <UserCard user={user3} />;

const user4 = {
  ...defaultUser,
  programmingLanguages: ['JS', 'TS', 'Rust', 'Java'],
  frameworks: ['NodeJS', 'React', 'MUI', 'VueJS'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_4variant = () => <UserCard user={user4} />;

const user5 = {
  ...defaultUser,
  programmingLanguages: ['JS', 'TS', 'Rust', 'Java', 'Haskell'],
  frameworks: ['NodeJS', 'React', 'MUI', 'VueJS', 'Angular'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_5variant = () => <UserCard user={user5} />;

const user6 = {
  programmingLanguages: ['JS', 'TS', 'Rust', 'Java', 'Haskell'],
  fullName: 'Brooklyn',
  frameworks: ['NodeJS', 'React', 'MUI', 'VueJS', 'Angular'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCardWithImageFallback = () => <UserCard user={user6} />;
