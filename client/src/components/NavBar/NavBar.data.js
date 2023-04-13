// * Modules
import React from 'react'

// * Assets
import SearchIcon from '../../assets/Sidebar/SearchIcon'
// import Team from '../../assets/Sidebar/Team' unused
import TrophyIcon from '../../assets/Sidebar/TrophyIcon'
import UserIcon from '../../assets/Sidebar/UserIcon'

export const NavBarData = [
  {
    title: 'Teammates',
    path: '/',
    icon: <SearchIcon />,
  },
  {
    title: 'Tournaments',
    path: '/tournament',
    icon: <TrophyIcon />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <UserIcon />,
  },
]
