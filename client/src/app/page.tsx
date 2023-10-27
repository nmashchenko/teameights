'use client';
import { Typography, Button } from '@/shared/ui';
import { useState } from 'react';
import { ActionModal } from '@/widgets/modals';
import { userResponseFixture } from '@/shared/fixtures/user';
import { teamFixture } from '@/shared/fixtures/team';
import { UserInfoModal } from '@/widgets/modals/info-modal/user';
import { TeamInfoModal } from '@/widgets/modals/info-modal/team/team';
import { SearchBar } from '@/widgets/search';
import { Filter } from '@/widgets/search/types';
import { concentrations, programmingLanguageOptions } from '@/shared/constant';

const mockFiltersArr: Filter[] = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
    placeholder: 'Search by name',
    filterValue: '',
  },
  {
    label: 'Tag',
    value: 'tag',
    type: 'text',
    placeholder: 'Search by tag',
    filterValue: '',
  },
  {
    label: 'Countries',
    value: 'countries',
    type: 'checkbox',
    placeholder: 'Search by countries',
    optionsArr: [
      { label: 'Japan', value: 'jp' },
      { label: 'Russia', value: 'ru' },
      { label: 'Ukraine', value: 'ua' },
      { label: 'Korea', value: 'kr' },
    ],
    filterValue: [],
  },
  {
    label: 'Concentrations',
    value: 'concentrations',
    type: 'multiple',
    placeholder: 'Search by concentrations',
    optionsArr: concentrations,
    filterValue: [],
  },
  {
    label: 'Languages',
    value: 'languages',
    type: 'checkbox',
    placeholder: 'Search by programming languages',
    optionsArr: programmingLanguageOptions,
    filterValue: [],
  },
];

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

      <SearchBar initialFiltersState={mockFiltersArr} callback={data => console.log(data)} />

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
