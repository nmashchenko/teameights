import { useState } from 'react';
import styles from './filter-select.module.scss';
import { SingleValue } from 'react-select';
import { Select } from '@/shared/ui';
import { Filter } from '../../types';
import { useFilters } from '../../hooks';

export const FilterSelect = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { filterArr, filterIndex, setFilterIndex } = useFilters();

  const handleMenuClose = () => {
    setIsMenuOpened(false);
  };

  const handleChange = (newValue: SingleValue<Filter>) => {
    if (newValue) {
      const index = filterArr.findIndex((item: Filter) => item.value === newValue.value);
      setFilterIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      <Select
        isSearchable={false}
        options={filterArr}
        isWithBorder={false}
        classNames={{
          container: () => (isMenuOpened ? styles.select_active : styles.select),
        }}
        styles={{
          control: () => ({
            padding: '0 12px',
          }),
        }}
        value={filterArr[filterIndex]}
        onChange={newValue => handleChange(newValue)}
        onMenuOpen={() => setIsMenuOpened(true)}
        onMenuClose={handleMenuClose}
      />
    </div>
  );
};
