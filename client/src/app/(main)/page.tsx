'use client';
import { Flex, SearchBar } from '@/shared/ui';
import { countries } from '@/shared/constant';
import { LogoBig } from '@/shared/assets';
import { useGetUsers } from '@/entities/session';
import { useState } from 'react';
import { Cards } from '@/app/(main)/ui/cards/cards';
import styles from './layout.module.scss';
import { UserInfoModal } from '@/widgets';
import { IUserResponse } from '@teameights/types';
import { specialities } from '@/shared/constant/specialities';
import { focusesValues } from '@/shared/constant/focuses';

export default function Home() {
  const [filters, setFilters] = useState<string | null>();
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, ...result } = useGetUsers(filters);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUserResponse>();

  const handleModalOpen = (user: IUserResponse) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
    <>
      <UserInfoModal isOpenModal={open} handleClose={() => setOpen(false)} user={selectedUser} />
      <Flex
        gap={48}
        direction='column'
        width='100%'
        justify='center'
        align='center'
        className={styles.content_zone}
      >
        <LogoBig />
        <SearchBar
          initialFiltersState={[
            {
              type: 'text',
              label: 'Name',
              value: 'fullName',
              placeholder: 'Search by name',
              filterValue: '',
            },
            {
              label: 'Countries',
              value: 'countries',
              type: 'checkbox',
              placeholder: 'Search by countries',
              optionsArr: countries,
              oneItemName: 'country',
              filterValue: [],
            },
            {
              label: 'Specialties',
              value: 'specialities',
              type: 'checkbox',
              placeholder: 'Search by specialty',
              optionsArr: specialities,
              oneItemName: 'speciality',
              filterValue: [],
            },
            {
              label: 'Focuses',
              value: 'focuses',
              type: 'checkbox',
              placeholder: 'Search by focus',
              optionsArr: focusesValues,
              oneItemName: 'focus',
              filterValue: [],
            },
          ]}
          onChange={filterValues => {
            setFilters(filterValues);
          }}
        />
      </Flex>
      <Cards
        onCardClick={handleModalOpen}
        data={data}
        isLoading={result.isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}
