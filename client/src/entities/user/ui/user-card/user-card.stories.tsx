import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './user-card';
import { IUserResponse } from '@teameights/types';
import { generateMockUser } from '@/shared/lib/mock';

const defaultUser = generateMockUser();

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserCard> = {
  title: 'entities/User/UserCard',
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
    user: defaultUser,
  },
};

const user1 = {
  ...defaultUser,
  programmingLanguages: ['JavaScript'],
  frameworks: ['Node.js'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_1variant = () => <UserCard user={user1} />;

const user2 = {
  ...defaultUser,
  programmingLanguages: ['JavaScript', 'TypeScript'],
  frameworks: ['Node.js', 'React.js'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_2variant = () => <UserCard user={user2} />;

const user3 = {
  ...defaultUser,
  programmingLanguages: ['JavaScript', 'TypeScript', 'Rust'],
  frameworks: ['Node.js', 'React.js', 'MUI'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_3variant = () => <UserCard user={user3} />;

const user4 = {
  ...defaultUser,
  programmingLanguages: ['JavaScript', 'TypeScript', 'Rust', 'Java'],
  frameworks: ['Node.js', 'React.js', 'MUI', 'Vue.js'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_4variant = () => <UserCard user={user4} />;

const user5 = {
  ...defaultUser,
  programmingLanguages: ['JavaScript', 'TypeScript', 'Rust', 'Java', 'PHP'],
  frameworks: ['Node.js', 'React.js', 'MUI', 'Vue.js', 'Angular'],
  isLeader: true,
} as unknown as IUserResponse;
export const UserCard_5variant = () => <UserCard user={user5} />;

const userWithoutPhoto = {
  ...defaultUser,
  programmingLanguages: ['JS', 'TS', 'Rust', 'Java', 'Php'],
  fullName: 'John Doe',
  frameworks: ['Node.js', 'React.js', 'MUI', 'Vue.js', 'Angular'],
  isLeader: true,
} as unknown as IUserResponse;

userWithoutPhoto.photo = null;

export const UserCardWithImageFallback = () => <UserCard user={userWithoutPhoto} />;
