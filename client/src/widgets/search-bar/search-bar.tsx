import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import clsx from 'clsx';
import styles from './search-bar.module.scss';
import { Filter, FilterSelect, SearchInput, TagsList } from '@/features/search';

interface ISearchBarProps {
  filtersArr: Filter[];
  callback: (data: Filter[]) => void;
}

export const SearchBar: FC<ISearchBarProps> = props => {
  const { callback, filtersArr } = props;
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
          <SearchInput callback={callback} />
        </div>
        <TagsList />
      </div>
    </FormProvider>
  );
};
