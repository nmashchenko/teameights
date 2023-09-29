import clsx from 'clsx';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FilterSelect from './filter-select/filter-select';
import { Filter } from './interface/filters';
import styles from './search-bar.module.scss';
import SearchInput from './search-input/search-input';

const mockFiltersArr: Filter[] = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
    filterValue: '',
  },
  {
    label: 'Countries',
    value: 'countries',
    type: 'checkbox',
    optionsArr: [
      { label: 'Japan', value: 'jp' },
      { label: 'Russia', value: 'ru' },
      { label: 'Ukraine', value: 'ua' },
      { label: 'Korea', value: 'kr' },
    ],
    filterValue: [],
  },
  {
    label: 'Languages',
    value: 'languages',
    type: 'checkbox',
    optionsArr: [],
    filterValue: [],
  },
  {
    label: 'Frameworks',
    value: 'frameworks',
    type: 'checkbox',
    optionsArr: [],
    filterValue: [],
  },
  {
    label: 'Concentrations',
    value: 'concentrations',
    type: 'checkbox',
    optionsArr: [],
    filterValue: [],
  },
];

interface ISearchBarProps {
  filtersArr: Filter[];
}

const SearchBar: FC<ISearchBarProps> = ({ filtersArr = mockFiltersArr }) => {
  const methods = useForm({
    defaultValues: {
      currentFilterIndex: 0,
      filtersArr: filtersArr,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className={clsx(styles.searchBar)}>
        <div className={clsx(styles.searchBarContent)}>
          <FilterSelect />
          <SearchInput />
        </div>
        {/* TagsList */}
      </div>
    </FormProvider>
  );
};

export default SearchBar;
