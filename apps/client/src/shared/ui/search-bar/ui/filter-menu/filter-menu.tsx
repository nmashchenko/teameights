import { Flex } from '@/shared/ui';
import { SearchInput } from '../search-input';
import { TagList } from '../tag-list';
import styles from './filter-menu.module.scss';
import { useState } from 'react';

export const FilterMenu = () => {
  const [menuWrapper, setMenuWrapper] = useState<HTMLDivElement | null>(null);

  return (
    <Flex direction='column' gap='16px' height='100%'>
      <Flex className={styles.searchinput_wrapper}>
        <SearchInput menuWrapper={menuWrapper} />
      </Flex>
      <TagList isOnlyCurrentFilterTags />
      <div className={styles.menu_wrapper} ref={setMenuWrapper}></div>
    </Flex>
  );
};
