'use client';
import { ITeam, IUserResponse } from 'teameights-types';
import { Typography, Button, Flex } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';
import { UserPreviewModal } from '@/widgets/modals/info-modal/desktop-modal/desktop-modal-user/user-modal';
import { Crown } from '@/shared/assets';
import { NewtonsCradle, RaceBy } from '@uiball/loaders';

import { useState } from 'react';
import { TeamPreviewModal } from '@/widgets/modals/info-modal/desktop-modal/desktop-modal-team/team-modal';
import { TeamPreviewModalPhone } from '@/widgets/modals/info-modal/phone-modal/team-modal-phone/team-modal-phone';
import { UserProfilePhone } from '@/widgets/modals/info-modal/phone-modal/user-modal-phone/user-profile-phone';
import { ActionModalPhone } from '@/widgets/modals/action-modal/action-modal-phone/action-modal-phone';
import { ActionModal } from '@/widgets/modals/action-modal/action-modal-desktop/action-modal-desktop';
// import { InteractiveModal } from '@/widgets/modals/interactive-modal/interactive-modal';
export default function Home() {
  const width = useGetScreenWidth();
  const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
  const [isOpenThirdModal, setIsOpenThirdModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openActionPhone, setOpenActionPhone] = useState(false);

  const openPhoneModal = () => {
    setOpenActionPhone(true);
  };

  const closePhoneModal = () => {
    setOpenActionPhone(false);
  };

  const openModalNew = () => {
    setOpenModal(true);
  };
  const closeModalNew = () => {
    setOpenModal(false);
  };

  const openFirstModal = () => {
    setIsOpenFirstModal(true);
  };

  const closeFirstModal = () => {
    setIsOpenFirstModal(false);
  };

  const openThirdModal = () => {
    setIsOpenThirdModal(true);
  };

  const closeThirdModal = () => {
    setIsOpenThirdModal(false);
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
    username: 'Nikita',
    concentration: 'Backend Developer',
    experience: '3-5 years of experience',
    frameworks: ['NodeJS', 'React', 'Angular', 'Redux', 'Hadoop', 'jQuery'],
    programmingLanguages: ['Python', 'HTML', 'TS', 'JS', 'Swift', 'Dart', 'Scala', 'Ruby'],
    dateOfBirth: new Date(2002, 9, 1),
    country: 'Ukraine',
    team: [],
    description:
      'Front-end developer with 4 years of experience. Passionate about solving complex problems and building innovative solutions. I have a strong understanding of software development best practices. Collaborative team player with effective communication skills.',
    ...createDummyResponse(),
  };

  const team: ITeam = {
    id: 'team123',
    name: 'Sample Team',
    type: 'open',
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

      <Typography>Hello, {user.username}!</Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <div>
        <ActionModalPhone
          heading='You can’t join team'
          sub='Before joining a new team, you must leave the old one.'
          isOpenModal={openActionPhone}
          handleClose={handleJoin}
        >
          <Button typeBtn='danger' size='m'>
            Leave my Team
          </Button>
          <Button typeBtn='secondary' size='m' onClick={closePhoneModal}>
            Cancel
          </Button>
        </ActionModalPhone>
        <Button typeBtn='primary' size='m' color='white' onClick={openPhoneModal}>
          Open Modal Phone Modal
        </Button>
      </div>

      {/* <div>
        <InteractiveModal handleClose={handleJoin} />
      </div> */}

      <div>
        <ActionModal
          heading='Removing member'
          sub='Are you sure you want to remove member from team?'
          isOpenModal={isOpenFirstModal}
          handleClose={closeFirstModal}
        >
          <Button typeBtn='danger' color='white' size='m' onClick={openFirstModal}>
            Delete
          </Button>
          <Button typeBtn='primary' color='white' size='m' onClick={closeFirstModal}>
            Cancel
          </Button>
        </ActionModal>
        <Button typeBtn='primary' size='m' color='white' onClick={openFirstModal}>
          First Modal
        </Button>
      </div>

      <div>
        <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
          Open Modal Team
        </Button>
        {width > 520 ? (
          <TeamPreviewModal
            team={team}
            user={user}
            isOpenModal={openModal}
            handleClose={closeModalNew}
            handleJoin={handleJoin}
          />
        ) : (
          <TeamPreviewModalPhone
            team={team}
            user={user}
            isDrawerOpen={openModal}
            handleClose={closeModalNew}
            handleJoin={handleJoin}
          />
        )}
      </div>

      <div>
        <Button typeBtn='primary' size='m' color='white' onClick={openThirdModal}>
          Open Third Modal
        </Button>
        {width > 520 ? (
          <UserPreviewModal
            user={user}
            isOpenModal={isOpenThirdModal}
            handleClose={closeThirdModal}
          />
        ) : (
          <UserProfilePhone
            user={user}
            isOpenModal={isOpenThirdModal}
            handleClose={closeThirdModal}
          />
        )}
      </div>

      {/* <UserPreviewModal
          user={user}
          isOpenModal={isOpenThirdModal}
          handleClose={closeThirdModal}
        />
        <Button typeBtn='primary' size='m' color='white' onClick={openThirdModal}>
          Third Modal
        </Button> */}

      <Crown width={70} height={70} />

      <Flex direction='column' gap='200px' width='100%' justify='center' align='center'>
        <NewtonsCradle size={50} speed={1.4} color='white' />

        <RaceBy size={80} lineWeight={5} speed={1.4} color='#46A11B' />
      </Flex>
    </>
  );
}
