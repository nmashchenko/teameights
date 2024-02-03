import React from 'react';

import { DEFAULT, TOURNAMENTS, PROFILE } from '@/shared/constant';
import { SearchIcon, TrophyIcon, UserIcon } from '@/shared/assets';
import { IUserProtectedResponse } from '@teameights/types';

export const getSidebarItems = (user?: IUserProtectedResponse) => {
  const data = [
    {
      title: 'Teammates',
      path: DEFAULT,
      icon: <SearchIcon />,
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
      path: `${PROFILE}`,
      icon: <UserIcon />,
    });
  }
  return data;
};
