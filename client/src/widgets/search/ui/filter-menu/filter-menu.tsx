import { Flex } from '@/shared/ui';
import { SearchInput } from '../search-input';
import { TagList } from '../tag-list';
import styles from './filter-menu.module.scss';

export const FilterMenu = () => {
  return (
    <Flex direction='column' gap='16px' height='100%'>
      <Flex className={styles.searchinput_wrapper}>
        <SearchInput />
      </Flex>
      <TagList isOnlyCurrentFilterTags />
      <div className={styles.menu_wrapper}></div>
    </Flex>
  );
};
