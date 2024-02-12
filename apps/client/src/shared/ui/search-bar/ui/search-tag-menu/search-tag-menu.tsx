import React, { FC, useState } from 'react';
import styles from './search-tag-menu.module.scss';
import { ICheckboxFilter, IMultipleFilter, IOptionItem } from '../../types';
import { useClickOutside } from '@/shared/lib';
import { Tag } from '../tag';
import { Flex } from '@/shared/ui';

interface SearchTagMenuProps {
  filterItem: ICheckboxFilter | IMultipleFilter;
  filterIndex: number;
  onClearOption: (filterIndex: number, index: number) => void;
  onClearAllOptions: (filterIndex: number) => void;
}

export const SearchTagMenu: FC<SearchTagMenuProps> = ({
  filterItem,
  filterIndex,
  onClearOption,
  onClearAllOptions,
}) => {
  const [isListOpened, setIsListOpened] = useState(false);
  const filterListRef = useClickOutside<HTMLDivElement>(() => setIsListOpened(false));

  return (
    <div className={styles.container} ref={filterListRef}>
      <div className={styles.menu_wrapper} onClick={() => setIsListOpened(true)}>
        <Tag isFilledWhileHover>
          +{filterItem.filterValue.length - 1}{' '}
          {filterItem.filterValue.length > 2 ? 'items' : 'item'}
        </Tag>
      </div>
      {isListOpened ? (
        <ul className={styles.menu_list}>
          {filterItem.filterValue.slice(1).map((item: IOptionItem, index: number) => (
            <li key={item.value}>
              <Tag
                isWithCross
                isRounded={false}
                onClick={() => onClearOption(filterIndex, index + 1)}
              >
                {item.label}
              </Tag>
            </li>
          ))}
          <li>
            <Flex
              justify='center'
              align='center'
              height='fit-content'
              padding='4px 8px'
              onClick={() => onClearAllOptions(filterIndex)}
              className={styles.clear_all_button}
            >
              <p>Clear All</p>
            </Flex>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
