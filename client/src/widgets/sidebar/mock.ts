/* eslint-disable @typescript-eslint/ban-ts-comment */
import { User } from '@/entities/user';

// @ts-ignore
export const mockUser: User = {
  _id: '650544eead52282dbf4397a8',
  email: 'sometest@test.ru',
  password: '$2a$05$7AnHdyBKd7kh78kkSt4OIOaBAidnedL3Sr6ZfFOKG5xcVatrPT4kq',
  isActivated: false,
  isRegistered: true,
  activationLink: '9393f29f-975c-4a1a-bb01-f67790929443',
  programmingLanguages: ['C++', 'Scala'],
  frameworks: ['Ember', 'Ruby'],
  roles: [
    {
      _id: '64a22b4f092fe3268759ba09',
      value: 'USER',
      description: 'Default use role',
      // @ts-ignore
      createdAt: '2023-07-03T01:58:39.315Z',
      // @ts-ignore
      updatedAt: '2023-07-03T01:58:39.315Z',
      __v: 0,
    },
  ],
  notifications: [
    {
      _id: '650544eead52282dbf4397aa',
      system_message: 'Welcome to teameights! We hope you will enjoy our platform. ',
      // @ts-ignore
      user: '650544eead52282dbf4397a8',
      type: 'SystemNotification',
      read: false,
      // @ts-ignore
      expiresAt: '2023-09-23T06:02:22.125Z',
      // @ts-ignore
      createdAt: '2023-09-16T06:02:22.126Z',
      // @ts-ignore
      updatedAt: '2023-09-16T06:03:54.737Z',
      __v: 0,
    },
    {
      _id: '650544eead52282dbf4397aa',
      system_message: 'Welcome to teameights! We hope you will enjoy our platform. ',
      // @ts-ignore
      user: '650544eead52282dbf4397a8',
      type: 'SystemNotification',
      read: false,
      // @ts-ignore
      expiresAt: '2023-09-23T06:02:22.125Z',
      // @ts-ignore
      createdAt: '2023-09-16T06:02:22.126Z',
      // @ts-ignore
      updatedAt: '2023-09-16T06:03:54.737Z',
      __v: 0,
    },
    {
      _id: '650544eead52282dbf4397aa',
      system_message: 'Welcome to teameights! We hope you will enjoy our platform. ',
      // @ts-ignore
      user: '650544eead52282dbf4397a8',
      type: 'SystemNotification',
      read: false,
      // @ts-ignore
      expiresAt: '2023-09-23T06:02:22.125Z',
      // @ts-ignore
      createdAt: '2023-09-16T06:02:22.126Z',
      // @ts-ignore
      updatedAt: '2023-09-16T06:03:54.737Z',
      __v: 0,
    },
    {
      _id: '650544eead52282dbf4397aa',
      system_message: 'Welcome to teameights! We hope you will enjoy our platform. ',
      // @ts-ignore
      user: '650544eead52282dbf4397a8',
      type: 'SystemNotification',
      read: false,
      // @ts-ignore
      expiresAt: '2023-09-23T06:02:22.125Z',
      // @ts-ignore
      createdAt: '2023-09-16T06:02:22.126Z',
      // @ts-ignore
      updatedAt: '2023-09-16T06:03:54.737Z',
      __v: 0,
    },
  ],
  universityData: [
    {
      university: 'asd',
      degree: 'Doctoral degree',
      major: 'Animal Sciences',
      // @ts-ignore
      addmissionDate: '1998-12-31T22:00:00.000Z',
      // @ts-ignore
      graduationDate: '2000-12-31T22:00:00.000Z',
    },
  ],
  jobData: [],
  projectData: [],
  createdAt: '2023-09-16T06:02:22.115Z',
  updatedAt: '2023-09-16T06:03:29.958Z',
  __v: 0,
  image:
    'https://teameights-production.s3.amazonaws.com/image/users/b1c300dd-0159-4a00-999f-6ce11f2df562.jpg',
  concentration: 'Backend Developer',
  country: 'United Arab Emirates',
  // @ts-ignore
  dateOfBirth: '2001-12-11T22:00:00.000Z',
  description: '',
  experience: '1-3',
  fullName: 'asdsad',
  links: {
    github: '',
    linkedIn: '',
    behance: '',
    telegram: '',
  },
  username: 'asdasd',
};
