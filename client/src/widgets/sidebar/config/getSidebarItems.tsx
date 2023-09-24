import React from 'react';

import { User } from '@/entities/user';
import { HOME_PATH, PROFILE_PATH, TEAM_PATH, TOURNAMENTS_PATH } from '@/shared/constant';
import {
  SidebarSearchIcon,
  SidebarTeamIcon,
  SidebarTrophyIcon,
  SidebarUserIcon,
} from '@/shared/assets';

export const getSidebarItems = (user: User) => {
  const data = [
    {
      title: 'Teammates',
      path: HOME_PATH,
      icon: <SidebarSearchIcon />,
    },
    {
      title: 'Team',
      path: user?.team ? `${TEAM_PATH}/${user.team._id}` : TEAM_PATH,
      icon: <SidebarTeamIcon />,
    },
    {
      title: 'Tournaments',
      path: TOURNAMENTS_PATH,
      icon: <SidebarTrophyIcon />,
    },
  ];
  if (user) {
    data.push({
      title: 'Profile',
      path: `${PROFILE_PATH}/${user._id}`,
      icon: <SidebarUserIcon />,
    });
  }
  return data;
};
