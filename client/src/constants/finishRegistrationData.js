import BehanceIcon from '../assets/Links/BehanceIcon'
import GitHubIcon from '../assets/Links/GitHubIcon'
import LinkedInIcon from '../assets/Links/LinkedInIcon'
import TelegramIcon from '../assets/Links/TelegramIcon'

import concentrationOptions from './concentrations'
import frameworkOptions from './frameworks'
import { programmingLanguageOptions } from './programmingLanguages'

const avatarFilenames = [
  'default-blue.png',
  'default-green.png',
  'default-orange.png',
  'default-pink.png',
  'default-purple.png',
  'default-yellow.png',
]

const avatars = avatarFilenames.map((filename) => require(`../assets/Images/user/${filename}`))

export const userConcentrations = [
  {
    multiple: true,
    label: 'Programming Languages',
    name: 'programmingLanguages',
    options: programmingLanguageOptions,
  },
  {
    multiple: true,
    label: 'Frameworks',
    name: 'frameworks',
    options: frameworkOptions,
  },
  {
    multiple: false,
    label: 'Concentration',
    name: 'concentration',
    options: concentrationOptions,
  },
]

export const userLinks = [
  {
    name: 'github',
    icon: <GitHubIcon />,
  },
  {
    name: 'linkedIn',
    icon: <LinkedInIcon />,
  },
  {
    name: 'telegram',
    icon: <TelegramIcon />,
  },
  {
    name: 'behance',
    icon: <BehanceIcon />,
  },
]

export const defaultUserAvatars = [
  { name: 'green', path: avatars[0] },
  { name: 'pink', path: avatars[1] },
  { name: 'blue', path: avatars[2] },
  { name: 'orange', path: avatars[3] },
  { name: 'purple', path: avatars[4] },
  { name: 'yellow', path: avatars[5] },
]

export const userExperienceOptions = [
  {
    label: 'No experience',
    value: '0',
  },
  {
    label: '1-3 years',
    value: '1-3',
  },
  {
    label: '3-5 years',
    value: '3-5',
  },
  {
    label: '5+ years',
    value: '5+',
  },
]

export const userLeaderOptions = [
  {
    label: 'No',
    value: 'false',
  },
  {
    label: 'Yes',
    value: 'true',
  },
]
