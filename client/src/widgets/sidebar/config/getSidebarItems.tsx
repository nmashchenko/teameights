import React from 'react';

import { CLIENT_ROUTES } from '@/shared/constant';
import { SearchIcon, TrophyIcon, UserIcon, UsersIcon } from '@/shared/assets';
import { IUserResponse } from '@teameights/types';

export const getSidebarItems = (user: IUserResponse) => {
  const data = [
    {
      title: 'Teammates',
      path: CLIENT_ROUTES.HOME,
      icon: <SearchIcon />,
    },
    {
      title: 'Team',
      path: user?.team ? `${CLIENT_ROUTES.TEAM}/${user.team.id}` : CLIENT_ROUTES.TEAM,
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
      path: `${CLIENT_ROUTES.PROFILE}/${user.id}`,
      icon: <UserIcon />,
    });
  }
  return data;
};
