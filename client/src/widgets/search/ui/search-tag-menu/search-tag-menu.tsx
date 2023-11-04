import React, { FC, useState } from 'react';
import styles from './search-tag-menu.module.scss';
import { ICheckboxFilter, IMultipleFilter, IOptionItem } from '../../types';
import { useClickOutside } from '@/shared/lib';
import { Tag } from '../tag';
import { Flex } from '@/shared/ui';

interface SearchTagMenuProps {
  filterItem: ICheckboxFilter | IMultipleFilter;
  filterIndex: number;
  handleClearOption: (filterIndex: number, index: number) => void;
  handleClearAllOptions: (filterIndex: number) => void;
}

export const SearchTagMenu: FC<SearchTagMenuProps> = ({
  filterItem,
  filterIndex,
  handleClearOption,
  handleClearAllOptions,
}) => {
  const [isListOpened, setIsListOpened] = useState(false);
  const filterListRef = useClickOutside<HTMLDivElement>(() => setIsListOpened(false));

  return (
    <div className={styles.tagWrapper} onClick={() => setIsListOpened(true)} ref={filterListRef}>
      {isListOpened ? (
        <ul>
          {filterItem.filterValue.slice(1).map((item: IOptionItem, index: number) => (
            <li key={item.value}>
              <Tag
                onClick={() => handleClearOption(filterIndex, index + 1)}
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
              onClick={() => handleClearAllOptions(filterIndex)}
              className={styles.clearAllButton}
            >
              <p>Clear All</p>
            </Flex>
          </li>
        </ul>
      ) : (
        <Tag
          isFilledWhileHover
          text={`+${filterItem.filterValue.length - 1} ${
            filterItem.filterValue.length > 2 ? 'items' : 'item'
          }`}
        />
      )}
    </div>
  );
};
