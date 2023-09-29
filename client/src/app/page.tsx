'use client';

import { Typography } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';
import { TeamPreviewModal, Team, User } from '@/widgets/modals/info-modal/info-modal';

export default function Home() {
  const width = useGetScreenWidth();

  // Здесь вы должны предоставить данные user, team и функцию handleJoin
  const user: User = {
    team: {
      _id: '123456',
    },
  };

  const team: Team = {
    _id: 'team123',
    name: 'Sample Team',
    type: 'Sample Type',
    country: 'Sample Country',
    image: 'team-image-url',
    members: [
      { image: 'member1-image-url' },
      { image: 'member2-image-url' },
      { image: 'member3-image-url' },
      { image: 'member4-image-url' },
      { image: 'member5-image-url' },
      { image: 'member6-image-url' },
      { image: 'member7-image-url' },
      { image: 'member8-image-url' },
    ],
    description:
      'Our dev team consists of software engineers, frontend and backend developers, and designers who are dedicated to providing high-quality software solutions that meet customer needs and provide excellent customer service.',
    wins: 2,
    points: 380,
    leader: {
      image: 'leader-image-url',
      shouldHaveCrown: true,
    },
  };

  const handleJoin = () => {
    // Обработка нажатия кнопки Join
    console.log('Join button clicked');
  };

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <div> The screen width is: {width} </div>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <div>
        <TeamPreviewModal user={user} team={team} handleJoin={handleJoin} isLoading />
      </div>
    </>
  );
}
