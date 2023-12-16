import { FC, useState } from 'react';
import styles from './search-bar.module.scss';
import { Filter } from './types';
import { FilterSelect } from './ui/filter-select';
import { SearchInput } from './ui/search-input';
import { TagList } from './ui/tag-list';
import { Flex } from '@/shared/ui';
import { useTrackFilterArr } from './hooks';
import { SearchContext } from './contexts';
import { ModalButton } from './ui/modal-button';
import { Modal } from './ui/modal';

/**
 * Search-bar Component
 *
 * Used to search by query parameters.
 *
 * Props:
 *
 * @prop {Filter[]} [initialFiltersState] - Initial state as an array with filters.
 * @prop {(filterValues: string | null) => void} [onChange] - A callback that takes a string of query parameters as an argument. Must be used for requests to the server.
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
 *  onChange={string => console.log(string)}
 * />
 * ```
 */

interface SearchBarProps {
  initialFiltersState: Filter[];
  onChange: (filterValues: string | null) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ initialFiltersState, onChange }) => {
  const [filterArr, setFilterArr] = useState(initialFiltersState);
  const [filterIndex, setFilterIndex] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  useTrackFilterArr(filterArr, onChange);

  const onOpen = () => {
    setIsModalOpened(true);
  };

  const onClose = () => {
    setIsModalOpened(false);
  };

  return (
    <SearchContext.Provider
      value={{
        filterArr,
        setFilterArr,
        filterIndex,
        setFilterIndex,
      }}
    >
      <ModalButton onOpen={onOpen} onClose={onClose} />

      <Flex direction='column' gap='24px' className={styles.searchbar}>
        <Flex className={styles.searchbar_content}>
          <FilterSelect />
          <SearchInput />
        </Flex>
        <TagList />
      </Flex>

      <Modal isOpened={isModalOpened} onClose={onClose} />
    </SearchContext.Provider>
  );
};
