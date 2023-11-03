import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './search-bar.module.scss';
import { Filter } from '../../types';
import { FilterSelect } from '../filter-select';
import { SearchInput } from '../search-input';
import { TagList } from '../tag-list';
import { Flex } from '@/shared/ui';
import { useTrackFiltersArr } from '../../lib/hooks/useTrackFiltersArr';

interface SearchBarProps {
  initialFiltersState: Filter[];
  callback: (queryString: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ initialFiltersState, callback }) => {
  const [filtersArr, setFilterArr] = useState(initialFiltersState);
  const [filterIndex, setFilterIndex] = useState(0);
  useTrackFiltersArr(filtersArr, callback);

  return (
    <Flex direction='column' gap='24px' className={clsx(styles.searchBar)}>
      <Flex className={clsx(styles.searchBarContent)}>
        <FilterSelect
          filtersArr={filtersArr}
          filterIndex={filterIndex}
          setFilterIndex={setFilterIndex}
        />
        <SearchInput
          filtersArr={filtersArr}
          setFilterArr={setFilterArr}
          filterIndex={filterIndex}
        />
      </Flex>
      <TagList filtersArr={filtersArr} setFilterArr={setFilterArr} />
    </Flex>
  );
};
