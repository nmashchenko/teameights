import blueAvatar from '../assets/defaultAvatars/user/default-blue.png'
import greenAvatar from '../assets/defaultAvatars/user/default-green.png'
import orangeAvatar from '../assets/defaultAvatars/user/default-orange.png'
import pinkAvatar from '../assets/defaultAvatars/user/default-pink.png'
import purpleAvatar from '../assets/defaultAvatars/user/default-purple.png'
import yellowAvatar from '../assets/defaultAvatars/user/default-yellow.png'
import GitHubIcon from '../assets/Links/GitHubIcon'
import LinkedInIcon from '../assets/Links/LinkedInIcon'
import TelegramIcon from '../assets/Links/TelegramIcon'

import concentrationOptions from './concentrations'
import frameworkOptions from './frameworks'
import { programmingLanguageOptions } from './programmingLanguages'

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
]

export const defaultUserAvatars = [
  { name: 'green', path: greenAvatar },
  { name: 'pink', path: pinkAvatar },
  { name: 'blue', path: blueAvatar },
  { name: 'orange', path: orangeAvatar },
  { name: 'purple', path: purpleAvatar },
  { name: 'yellow', path: yellowAvatar },
]
export const userExperienceOptions = [
  {
    label: '0-1 years',
    value: '0-1',
  },
  {
    label: '1-3 years',
    value: '1-3',
  },
  {
    label: '3+ years',
    value: '3+',
  },
]

export const userLeaderOptions = [
  {
    label: 'YES',
    value: 'true',
  },
  {
    label: 'NO',
    value: 'false',
  },
]
