import React, { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './checkbox-tag-menu.module.scss';
import { ICheckboxFilter, IOptionItem } from '../../types';
import { useClickOutside } from '@/shared/lib';
import { Tag } from '../tag';
import { Flex } from '@/shared/ui';

interface CheckboxTagMenuProps {
  filterItem: ICheckboxFilter;
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
            <Flex
              justify='center'
              align='center'
              height='fit-content'
              padding='4px 8px'
              onClick={() => handleClearAllCheckboxOptions(filterIndex)}
              className={styles.clearAllButton}
            >
              <p>Clear All</p>
            </Flex>
          </li>
        </ul>
      ) : (
        <Tag text={`+${filterItem.filterValue.length - 1} items`} />
      )}
    </div>
  );
};
