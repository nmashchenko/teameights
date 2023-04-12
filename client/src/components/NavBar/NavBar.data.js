// * Modules
import React from 'react'

// * Assets
import Person from '../../assets/Sidebar/Person'
import Project from '../../assets/Sidebar/Project'
// import Team from '../../assets/Sidebar/Team' unused
import Tournament from '../../assets/Sidebar/Tournament'

export const NavBarData = [
  {
    title: 'Teammates',
    path: '/',
    icon: <Project />,
  },
  {
    title: 'Tournaments',
    path: '/tournament',
    icon: <Tournament />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Person />,
  },
]
