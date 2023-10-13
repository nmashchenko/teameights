import { FC } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import styles from './search-input.module.scss';
import { Input, Select } from '@/shared/ui';
import { Search } from '@/shared/assets';

export const SearchInput: FC = () => {
  const { register, getValues } = useFormContext();
  const filterIndex = useWatch({
    name: 'currentFilterIndex',
  });

  const currentFilter = getValues(`filtersArr.${filterIndex}`);

  console.log(currentFilter);

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
            <Search />
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
            <Search />
          </div>
        </div>
      );

    default:
  }
};
