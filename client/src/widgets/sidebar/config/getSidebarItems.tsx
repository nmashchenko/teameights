import React from 'react';

import { DEFAULT, TEAM, TOURNAMENTS, PROFILE } from '@/shared/constant';
import { SearchIcon, TrophyIcon, UserIcon, UsersIcon } from '@/shared/assets';
import { IUserProtectedResponse } from '@teameights/types';

export const getSidebarItems = (user?: IUserProtectedResponse) => {
  const data = [
    {
      title: 'Teammates',
      path: DEFAULT,
      icon: <SearchIcon />,
    },
    {
      title: 'Team',
      path: user?.team ? `${TEAM}/${user?.team.id}` : TEAM,
      icon: <UsersIcon />,
    },
    {
      title: 'Tournaments',
      path: TOURNAMENTS,
      icon: <TrophyIcon />,
    },
  ];
  if (user) {
    data.push({
      title: 'Profile',
      path: `${PROFILE}/${user?.id}`,
      icon: <UserIcon />,
    });
  }
  return data;
};
