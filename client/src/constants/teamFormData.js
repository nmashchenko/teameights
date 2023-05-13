import blueAvatar from '../assets/DefaultAvatars/team/default-blue.png'
import greenAvatar from '../assets/DefaultAvatars/team/default-green.png'
import orangeAvatar from '../assets/DefaultAvatars/team/default-orange.png'
import pinkAvatar from '../assets/DefaultAvatars/team/default-pink.png'
import purpleAvatar from '../assets/DefaultAvatars/team/default-purple.png'
import yellowAvatar from '../assets/DefaultAvatars/team/default-yellow.png'

export const teamTypes = [
  {
    value: 'open',
    label: 'Open',
  },
  {
    value: 'invite-only',
    label: 'Invite-only',
  },
  {
    value: 'closed',
    label: 'Closed',
  },
]

export const defaultTeamAvatars = [
  { name: 'green', path: greenAvatar },
  { name: 'pink', path: pinkAvatar },
  { name: 'blue', path: blueAvatar },
  { name: 'orange', path: orangeAvatar },
  { name: 'purple', path: purpleAvatar },
  { name: 'yellow', path: yellowAvatar },
]
