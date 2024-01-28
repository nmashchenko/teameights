import { Flex } from '@/shared/ui';
import { SearchInput } from '../search-input';
import { TagList } from '../tag-list';
import styles from './filter-menu.module.scss';
import { useState } from 'react';
import { useFilters } from '../../hooks';
import clsx from 'clsx';

export const FilterMenu = () => {
  const [menuWrapper, setMenuWrapper] = useState<HTMLDivElement | null>(null);
  const { filterArr, filterIndex } = useFilters();

  const isSelect =
    filterArr[filterIndex].type === 'multiple' || filterArr[filterIndex].type === 'checkbox';
  const isFilterNotEmpty = !!(
    filterArr[filterIndex].type === 'multiple' ||
    (filterArr[filterIndex].type === 'checkbox' && filterArr[filterIndex].filterValue?.length)
  );

  return (
    <Flex direction='column' gap='16px' height='100%'>
      <Flex className={styles.searchinput_wrapper}>
        <SearchInput menuWrapper={menuWrapper} />
      </Flex>
      <TagList isOnlyCurrentFilterTags />
      {isSelect && (
        <div
          className={clsx(styles.menu_wrapper, {
            [styles.menu_wrapper_short]: isFilterNotEmpty,
          })}
          ref={setMenuWrapper}
        ></div>
      )}
    </Flex>
  );
};
