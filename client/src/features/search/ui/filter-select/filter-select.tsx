import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './filter-select.module.scss';
import { SingleValue } from 'react-select';
import { Select } from '@/shared/ui';
import { Filter } from '../../types';

interface FilterSelectProps {
  filtersArr: Filter[];
  filterIndex: number;
  setFilterIndex: (index: number) => void;
}

export const FilterSelect: FC<FilterSelectProps> = props => {
  const { filtersArr, filterIndex, setFilterIndex } = props;
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleMenuClose = () => {
    setIsMenuOpened(false);
  };

  const handleChange = (newValue: SingleValue<Filter>) => {
    if (newValue) {
      const index = filtersArr.findIndex((item: Filter) => item.value === newValue.value);
      setFilterIndex(index);
    }
  };

  return (
    <div className={clsx(styles.selectWrapper)}>
      <Select
        isSearchable={false}
        options={filtersArr}
        isWithBorder={false}
        classNames={{
          container: () => (isMenuOpened ? clsx(styles.select_active) : clsx(styles.select)),
        }}
        value={filtersArr[filterIndex]}
        onChange={newValue => handleChange(newValue)}
        onMenuOpen={() => setIsMenuOpened(true)}
        onMenuClose={handleMenuClose}
      />
    </div>
  );
};
