'use client';

import { FC, useState } from 'react';
import styles from './search-bar.module.scss';
import { Filter } from './types';
import { FilterSelect } from './ui/filter-select';
import { SearchInput } from './ui/search-input';
import { TagList } from './ui/tag-list';
import { Flex } from '@/shared/ui';
import { useFilterReducer, useTrackFilterArr } from './hooks';
import { SearchContext } from './contexts';
import { ModalButton } from './ui/modal-button';
import { Modal } from './ui/modal';
import clsx from 'clsx';

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
  const [filterState, dispatch] = useFilterReducer(initialFiltersState);
  const [filterIndex, setFilterIndex] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  useTrackFilterArr(filterState, onChange);

  const { filterArr } = filterState;

  const onOpenModal = () => {
    setIsModalOpened(true);
  };

  const onCloseModal = () => {
    setIsModalOpened(false);
  };

  const onOpenFilter = () => {
    setIsFilterOpened(true);
  };

  const onCloseFilter = () => {
    setIsFilterOpened(false);
  };

  const onOpenModalWithoutFilter = () => {
    onCloseFilter();
    onOpenModal();
  };

  const onOpenModalWithFilter = (value: string) => {
    const newFilterIndex = filterArr.findIndex(filter => filter.value === value);
    setFilterIndex(newFilterIndex);

    onOpenFilter();
    onOpenModal();
  };

  const isShowTagList = filterArr.some(item => {
    switch (item.type) {
      case 'text':
      case 'checkbox':
      case 'multiple':
        return item.filterValue.length;
    }
  });

  return (
    <SearchContext.Provider
      value={{
        filterArr,
        dispatch,
        filterIndex,
        setFilterIndex,
      }}
    >
      <ModalButton onOpen={onOpenModalWithoutFilter} onClose={onCloseModal} />

      <Flex
        direction='column'
        gap='24px'
        className={clsx(styles.searchbar, {
          [styles.searchbar_hidden]: !isShowTagList,
        })}
      >
        <Flex className={styles.searchbar_content}>
          <FilterSelect />
          <SearchInput />
        </Flex>
        <TagList onOpenFilter={onOpenModalWithFilter} />
      </Flex>

      <Modal
        isOpened={isModalOpened}
        onClose={onCloseModal}
        isFilterOpened={isFilterOpened}
        onOpenFilter={onOpenFilter}
        onCloseFilter={onCloseFilter}
      />
    </SearchContext.Provider>
  );
};
