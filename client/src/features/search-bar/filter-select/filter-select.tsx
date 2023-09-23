import clsx from 'clsx';
import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Select } from 'shared/ui';
import { Filter } from '../interface/filters';
import styles from './filter-select.module.scss';

interface IFilterSelectProps {
  filtersArr: Filter[];
}

const FilterSelect: FC<IFilterSelectProps> = ({ filtersArr }) => {
  const [isMenuHovered, setIsMenuHovered] = useState<boolean>(false);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const menuCloseHandler = () => {
    setIsMenuOpened(false);
    setIsMenuHovered(false);
  };

  return (
    <Controller
      defaultValue={filtersArr[0]}
      name='currentFilter'
      render={({ field: { onChange, value: newValue } }) => (
        <div
          className={clsx(styles.selectWrapper)}
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
        >
          <Select
            options={filtersArr}
            isBorderDisabled={true}
            classNames={{
              container: () =>
                isMenuHovered || isMenuOpened ? clsx(styles.select_active) : clsx(styles.select),
            }}
            value={newValue}
            onChange={value => onChange(value)}
            onMenuOpen={() => setIsMenuOpened(true)}
            onMenuClose={menuCloseHandler}
          />
        </div>
      )}
    />
  );
};

export default FilterSelect;
