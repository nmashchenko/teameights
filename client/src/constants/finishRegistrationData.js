import blueAvatar from '../assets/DefaultAvatars/user/default-blue.png'
import greenAvatar from '../assets/DefaultAvatars/user/default-green.png'
import orangeAvatar from '../assets/DefaultAvatars/user/default-orange.png'
import pinkAvatar from '../assets/DefaultAvatars/user/default-pink.png'
import purpleAvatar from '../assets/DefaultAvatars/user/default-purple.png'
import yellowAvatar from '../assets/DefaultAvatars/user/default-yellow.png'
import BehanceIcon from '../assets/Links/BehanceIcon'
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
  {
    name: 'behance',
    icon: <BehanceIcon />,
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
