import { FC } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import styles from './search-input.module.scss';
import { Input, Select } from '@/shared/ui';
import { Search } from '@/shared/assets';
import { Filter } from '../../model';

interface ISearchInput {
  callback: (data: Filter[]) => void;
}

export const SearchInput: FC<ISearchInput> = props => {
  const { callback } = props;
  const { register, getValues } = useFormContext();
  const filterIndex = useWatch({
    name: 'currentFilterIndex',
  });

  const currentFilter = getValues(`filtersArr.${filterIndex}`);

  const handleSearch = () => {
    callback(getValues().filtersArr);
  };

  switch (currentFilter.type) {
    case 'text':
      return (
        <div className={styles.inputWrapper}>
          <Input
            {...register(`filtersArr.${filterIndex}.filterValue`)}
            placeholder={currentFilter.placeholder}
            isWithBorder={false}
          />
          <div className={styles.searchIconWrapper}>
            <Search onClick={handleSearch} />
          </div>
        </div>
      );

    case 'checkbox':
      return (
        <div className={styles.inputWrapper}>
          <Controller
            name={`filtersArr.${filterIndex}.filterValue`}
            render={({ field: { onChange, value } }) => (
              <Select
                controlShouldRenderValue={false}
                onChange={value => onChange(value)}
                value={value}
                placeholder={currentFilter.placeholder}
                options={getValues(`filtersArr.${filterIndex}.optionsArr`)}
                isWithBorder={false}
                isIndicatorAllowed={false}
                isCheckbox
                isMulti
              />
            )}
          />
          <div className={styles.searchIconWrapper}>
            <Search onClick={handleSearch} />
          </div>
        </div>
      );

    default:
  }
};
