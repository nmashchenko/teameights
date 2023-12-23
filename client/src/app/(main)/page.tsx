'use client';
import { Flex, SearchBar } from '@/shared/ui';
import { countries, specialities } from '@/shared/constant';
import { LogoBig } from '@/shared/assets';
import { useGetUsers } from '@/entities/session';
import { useState } from 'react';
import { Cards } from '@/app/(main)/ui/cards/cards';
import styles from './layout.module.scss';

export default function Home() {
  const [filters, setFilters] = useState<string | null>();
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, ...result } = useGetUsers(filters);

  return (
    <>
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
              value: 'name',
              placeholder: 'Search by name',
              filterValue: '',
            },
            {
              label: 'Countries',
              value: 'countries',
              type: 'checkbox',
              placeholder: 'Search by countries',
              optionsArr: countries,
              filterValue: [],
            },
            {
              label: 'Specialty',
              value: 'specialty',
              type: 'multiple',
              placeholder: 'Search by specialty',
              optionsArr: specialities,
              filterValue: [],
            },
          ]}
          onChange={filterValues => {
            setFilters(filterValues);
          }}
        />
      </Flex>
      <Cards
        data={data}
        isLoading={result.isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}
