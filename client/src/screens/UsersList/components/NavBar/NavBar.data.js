import React from 'react'

import Person from '../../../../assets/Sidebar/Person'
import Project from '../../../../assets/Sidebar/Project'
import Team from '../../../../assets/Sidebar/Team'
import Tournament from '../../../../assets/Sidebar/Tournament'

export const NavBarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <Person />,
  },
  {
    title: 'Tournaments',
    path: '/tournaments',
    icon: <Tournament />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Project />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <Team />,
  },
]
