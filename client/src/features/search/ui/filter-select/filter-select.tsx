import clsx from 'clsx';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './filter-select.module.scss';
import { Select } from '@/shared/ui';
import { Filter } from '../../model';

export const FilterSelect: FC = () => {
  const { getValues, setValue } = useFormContext();

  const [isMenuHovered, setIsMenuHovered] = useState<boolean>(false);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const menuCloseHandler = () => {
    setIsMenuOpened(false);
    setIsMenuHovered(false);
  };

  const handleChange = (newValue: Filter) => {
    const filterIndex = getValues('filtersArr').findIndex(
      (item: Filter) => item.value === newValue.value
    );
    setValue('currentFilterIndex', filterIndex);
  };

  return (
    <div
      className={clsx(styles.selectWrapper)}
      onMouseEnter={() => setIsMenuHovered(true)}
      onMouseLeave={() => setIsMenuHovered(false)}
    >
      <Select
        isSearchable={false}
        options={getValues('filtersArr')}
        isWithBorder={false}
        classNames={{
          container: () =>
            isMenuHovered || isMenuOpened ? clsx(styles.select_active) : clsx(styles.select),
        }}
        defaultValue={getValues('filtersArr')[getValues('currentFilterIndex')]}
        onChange={handleChange}
        onMenuOpen={() => setIsMenuOpened(true)}
        onMenuClose={menuCloseHandler}
      />
    </div>
  );
};
