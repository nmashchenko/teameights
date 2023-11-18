'use client';
import { Typography } from '@/shared/ui';
import { generateMockUser } from '@/shared/lib/mock';
import { useEffect, useState } from 'react';
import { IUserBase } from '@teameights/types';
import { UserCard } from '@/entities/user-card';

export default function Home() {
  const [user, setUser] = useState<IUserBase>();

  useEffect(() => {
    setUser(generateMockUser());

    // console.log(generateTeamInvitationNotification());
    // console.log(generateMockTeam());
    // console.log(generateSystemNotification());
  }, []);

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <Typography>Hello, {user?.username}!</Typography>

      {user && <UserCard user={user} />}

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>
    </>
  );
}
