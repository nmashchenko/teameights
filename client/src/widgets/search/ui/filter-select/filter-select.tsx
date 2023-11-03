import { FC, useState } from 'react';
import styles from './filter-select.module.scss';
import { SingleValue } from 'react-select';
import { Select } from '@/shared/ui';
import { Filter } from '../../types';

interface FilterSelectProps {
  filtersArr: Filter[];
  filterIndex: number;
  setFilterIndex: (index: number) => void;
}

export const FilterSelect: FC<FilterSelectProps> = ({
  filtersArr,
  filterIndex,
  setFilterIndex,
}) => {
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
    <div className={styles.select__wrapper}>
      <Select
        isSearchable={false}
        options={filtersArr}
        isWithBorder={false}
        classNames={{
          container: () => (isMenuOpened ? styles.select_active : styles.select),
        }}
        styles={{
          control: () => ({
            padding: '0 12px',
          }),
        }}
        value={filtersArr[filterIndex]}
        onChange={newValue => handleChange(newValue)}
        onMenuOpen={() => setIsMenuOpened(true)}
        onMenuClose={handleMenuClose}
      />
    </div>
  );
};
