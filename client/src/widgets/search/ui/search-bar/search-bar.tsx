import { FC, useState } from 'react';
import styles from './search-bar.module.scss';
import { Filter } from '../../types';
import { FilterSelect } from '../filter-select';
import { SearchInput } from '../search-input';
import { TagList } from '../tag-list';
import { Flex } from '@/shared/ui';
import { useTrackFiltersArr } from '../../lib/hooks/useTrackFiltersArr';

/**
 * Search-bar Component
 *
 * Used to search by query parameters.
 *
 * Props:
 *
 * @prop {Filter[]} [initialFiltersState] - Initial state as an array with filters.
 * @prop {(queryString: string) => void} [callback] - A callback that takes a string of query parameters as an argument. Must be used for requests to the server.
 *
 * Usage:
 *
 * ```tsx
 * import { SearchBar } from '@/widgets/search';
 *
 * <SearchBar initialFiltersState={[{
 *  type: 'text',
 *  label: 'Name',
 *  value: 'name',
 *  placeholder: 'Search by name',
 *  filterValue: '',
 *  }]}
 *  callback={string => console.log(string)}
 * />
 * ```
 */

interface SearchBarProps {
  initialFiltersState: Filter[];
  callback: (queryString: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ initialFiltersState, callback }) => {
  const [filtersArr, setFilterArr] = useState(initialFiltersState);
  const [filterIndex, setFilterIndex] = useState(0);
  useTrackFiltersArr(filtersArr, callback);

  return (
    <Flex direction='column' gap='24px' className={styles.searchbar}>
      <Flex className={styles.searchbar_content}>
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
