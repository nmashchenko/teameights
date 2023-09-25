import React from 'react';

import { User } from '@/entities/user';
import { CLIENT_ROUTES } from '@/shared/constant';
import { SearchIcon, TrophyIcon, UserIcon, UsersIcon } from '@/shared/assets';

export const getSidebarItems = (user: User) => {
  const data = [
    {
      title: 'Teammates',
      path: CLIENT_ROUTES.HOME,
      icon: <SearchIcon />,
    },
    {
      title: 'Team',
      path: user?.team ? `${CLIENT_ROUTES.TEAM}/${user.team._id}` : CLIENT_ROUTES.TEAM,
      icon: <UsersIcon />,
    },
    {
      title: 'Tournaments',
      path: CLIENT_ROUTES.TOURNAMENTS,
      icon: <TrophyIcon />,
    },
  ];
  if (user) {
    data.push({
      title: 'Profile',
      path: `${CLIENT_ROUTES.PROFILE}/${user._id}`,
      icon: <UserIcon />,
    });
  }
  return data;
};
