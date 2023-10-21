'use client';
import { Typography, Button } from '@/shared/ui';
import { useState } from 'react';
import { ActionModal } from '@/widgets/modals';
import { userResponseFixture } from '@/shared/fixtures/user';
import { teamFixture } from '@/shared/fixtures/team';
import { UserInfoModal } from '@/widgets/modals/info-modal/user';
import { TeamInfoModal } from '@/widgets/modals/info-modal/team/team';

export default function Home() {
  const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
  const [isOpenThirdModal, setIsOpenThirdModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  const handleJoin = () => {
    console.log('Join button clicked');
  };

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <Typography>Hello, {userResponseFixture.username}!</Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <div>
        <ActionModal
          heading='Removing member'
          sub='Are you sure you want to remove member from team?'
          isOpen={isOpenFirstModal}
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
        <TeamInfoModal
          team={teamFixture}
          user={userResponseFixture}
          isOpenModal={openModal}
          handleClose={closeModalNew}
          handleJoin={handleJoin}
        />
      </div>

      <div>
        <Button typeBtn='primary' size='m' color='white' onClick={openThirdModal}>
          Open Third Modal
        </Button>
        <UserInfoModal
          user={userResponseFixture}
          isOpenModal={isOpenThirdModal}
          handleClose={closeThirdModal}
        />
      </div>
    </>
  );
}
