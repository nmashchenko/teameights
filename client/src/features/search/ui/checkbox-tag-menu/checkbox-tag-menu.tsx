import React, { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './checkbox-tag-menu.module.scss';
import { Filter, IOptionItem } from '../../types';
import { useClickOutside } from '@/shared/lib';
import { Tag } from '../tag';

interface CheckboxTagMenuProps {
  filterItem: Filter;
  filterIndex: number;
  handleClearCheckboxOption: (filterIndex: number, index: number) => void;
  handleClearAllCheckboxOptions: (filterIndex: number) => void;
}

export const CheckboxTagMenu: FC<CheckboxTagMenuProps> = props => {
  const { filterItem, filterIndex, handleClearCheckboxOption, handleClearAllCheckboxOptions } =
    props;
  const [isListOpened, setIsListOpened] = useState(false);
  const filterListRef = useClickOutside<HTMLDivElement>(() => setIsListOpened(false));

  return (
    <div
      className={clsx(styles.tagWrapper)}
      onClick={() => setIsListOpened(true)}
      ref={filterListRef}
    >
      {isListOpened ? (
        <ul>
          {filterItem.filterValue.slice(1).map((item: IOptionItem, index: number) => (
            <li key={item.value}>
              <Tag
                onClick={() => handleClearCheckboxOption(filterIndex, index + 1)}
                isWithCross
                text={item.label}
              />
            </li>
          ))}
          <li>
            <div
              onClick={() => handleClearAllCheckboxOptions(filterIndex)}
              className={styles.clearAllButton}
            >
              <p>Clear All</p>
            </div>
          </li>
        </ul>
      ) : (
        <Tag text={`+${filterItem.filterValue.length - 1} items`} />
      )}
    </div>
  );
};
