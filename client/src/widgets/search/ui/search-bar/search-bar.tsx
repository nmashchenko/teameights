import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './search-bar.module.scss';
import { Filter } from '../../types';
import { FilterSelect } from '../filter-select';
import { SearchInput } from '../search-input';
import { TagList } from '../tag-list';
import qs from 'qs';

interface SearchBarProps {
  initialFiltersState: Filter[];
  callback: (queryString: string) => void;
}

export const SearchBar: FC<SearchBarProps> = props => {
  const { initialFiltersState, callback } = props;
  const [filtersArr, setFilterArr] = useState(initialFiltersState);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    const filtersValues = {
      filters: filtersArr.reduce<{ [key: string]: string | string[] | [number, number] }>(
        (acc, curr) => {
          switch (curr.type) {
            case 'text':
              if (curr.filterValue.length) {
                acc[curr.value] = curr.filterValue;
              }

              return acc;

            case 'multiple':
            case 'checkbox':
              if (curr.filterValue.length) {
                acc[curr.value] = curr.filterValue.map(item => item.value);
              }

              return acc;

            case 'range':
              if (curr.filterValue?.length) {
                acc[curr.value] = curr.filterValue;
              }

              return acc;
          }
        },
        {}
      ),
    };

    const queryString = qs.stringify(filtersValues);

    callback(queryString);
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
      <TagList filtersArr={filtersArr} setFilterArr={setFilterArr} />
    </div>
  );
};
