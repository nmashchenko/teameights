// * Modules
import React from 'react'

// * Assets
import Person from '../../assets/Sidebar/Person'
import Project from '../../assets/Sidebar/Project'
import Team from '../../assets/Sidebar/Team'
import Tournament from '../../assets/Sidebar/Tournament'

export const NavBarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <Person />,
  },
  {
    title: 'Tournaments',
    path: '/tournament',
    icon: <Tournament />,
  },
  {
    title: 'Teameights',
    path: '/',
    icon: <Project />,
  },
]
