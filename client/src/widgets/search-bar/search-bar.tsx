import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './search-bar.module.scss';
import { Filter, FilterSelect, SearchInput, TagsList } from '@/features/search';

interface ISearchBarProps {
  initialFiltersState: Filter[];
  callback: (data: Filter[]) => void;
}

export const SearchBar: FC<ISearchBarProps> = props => {
  const { initialFiltersState, callback } = props;
  const [filtersArr, setFilterArr] = useState(initialFiltersState);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    callback(filtersArr);
  }, [callback, filtersArr]);

  return (
    <div className={clsx(styles.searchBar)}>
      <div className={clsx(styles.searchBarContent)}>
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
      </div>
      <TagsList filtersArr={filtersArr} setFilterArr={setFilterArr} />
    </div>
  );
};
