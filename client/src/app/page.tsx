'use client';

import { Typography, Button } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';
import { ActionModal } from '@/widgets/modals/action-modal/action-modal';
import { useState } from 'react';
import { TeamPreviewModal } from '@/widgets/modals/info-modal/info-modal';
import { TeamType, IUserResponse, ITeam } from 'teameights-types';

export default function Home() {
  const width = useGetScreenWidth();
  const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
  const [isOpenSecontModal, setIsOpenSecontModal] = useState(false);

  const openFirstModal = () => {
    setIsOpenFirstModal(true);
  };

  const closeFirstModal = () => {
    setIsOpenFirstModal(false);
  };

  const openSecondModal = () => {
    setIsOpenSecontModal(true);
  };

  const closeSecondModal = () => {
    setIsOpenSecontModal(false);
  };

  function createDummyResponse() {
    return {
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    };
  }

  const user: IUserResponse = {
    id: 1,
    team: [],
    ...createDummyResponse(),
  };

  const team: ITeam = {
    id: 'team123',
    name: 'Sample Team',
    type: TeamType.OPEN,
    country: 'Sample Country',
    image: 'team-image-url',
    members: [
      {
        id: 1,
        photo: { id: '1', path: 'photo1.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 2,
        photo: { id: '2', path: 'photo2.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 3,
        photo: { id: '3', path: 'photo3.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 4,
        photo: { id: '4', path: 'photo4.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 5,
        photo: { id: '5', path: 'photo5.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 6,
        photo: { id: '6', path: 'photo6.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 7,
        photo: { id: '7', path: 'photo7.jpg' },
        ...createDummyResponse(),
      },
      {
        id: 8,
        photo: { id: '8', path: 'photo8.jpg' },
        ...createDummyResponse(),
      },
    ],
    description:
      'Our dev team consists of software engineers, frontend and backend developers, and designers who are dedicated to providing high-quality software solutions that meet customer needs and provide excellent customer service.',
    wins: 2,
    points: 380,
    leader: {
      id: 1,
      ...createDummyResponse(),
      // shouldHaveCrown: true,
    },
    tag: 'sampleTag',
    ...createDummyResponse(),
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
        <ActionModal
          heading='Removing member'
          sub='Are you sure you want to remove member from team?'
          buttonOneText='Delete'
          buttonOneAction={() => {}}
          buttonTwoText='Cansel'
          buttonTwoAction={() => {}}
          isOpenModal={isOpenFirstModal}
          handleClose={closeFirstModal}
          buttonOneType='danger'
          buttonTwoType='secondary'
        />
        <Button typeBtn='primary' size='m' color='white' onClick={openFirstModal}>
          First Modal
        </Button>
      </div>

      <div>
        <TeamPreviewModal
          user={user}
          team={team}
          isOpenModal={isOpenSecontModal}
          handleClose={closeSecondModal}
          handleJoin={handleJoin}
        />
        <Button typeBtn='primary' size='m' color='white' onClick={openSecondModal}>
          Second Modal
        </Button>
      </div>
    </>
  );
}
