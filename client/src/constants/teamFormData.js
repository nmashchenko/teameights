const avatarFilenames = [
  'default-blue.png',
  'default-green.png',
  'default-orange.png',
  'default-pink.png',
  'default-purple.png',
  'default-yellow.png',
]

const avatars = avatarFilenames.map((filename) => require(`../assets/Images/team/${filename}`))

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
  { name: 'green', path: avatars[0] },
  { name: 'pink', path: avatars[1] },
  { name: 'blue', path: avatars[2] },
  { name: 'orange', path: avatars[3] },
  { name: 'purple', path: avatars[4] },
  { name: 'yellow', path: avatars[5] },
]
