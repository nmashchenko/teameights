import clsx from 'clsx';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FilterSelect from './filter-select/filter-select';
import { Filter } from './interface/filters';
import styles from './search-bar.module.scss';

const mockFiltersArr: Filter[] = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
    filterValue: ''
  },
  {
    label: 'Countries',
    value: 'countries',
    type: 'checkbox',
    filterValue: []
  },
  {
    label: 'Languages',
    value: 'languages',
    type: 'checkbox',
    filterValue: []
  },
  {
    label: 'Frameworks',
    value: 'frameworks',
    type: 'checkbox',
    filterValue: []
  },
  {
    label: 'Concentrations',
    value: 'concentrations',
    type: 'checkbox',
    filterValue: []
  }
];

interface ISearchBarProps {
  filtersArr: Filter[];
}

const SearchBar: FC<ISearchBarProps> = ({ filtersArr = mockFiltersArr }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className={clsx(styles.searchBar)}>
        <div className={clsx(styles.searchBarContent)}>
          <FilterSelect filtersArr={filtersArr} />
          {/* Search */}
        </div>
        {/* TagsList */}
      </div>
    </FormProvider>
  );
};

export default SearchBar;
