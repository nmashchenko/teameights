import { FC } from 'react';
import styles from './tag-list.module.scss';
import { Tag } from '../tag';
import { SearchTagMenu } from '../search-tag-menu';
import { useFilters } from '../../hooks';
import { Filter } from '../../types';

interface TagListProps {
  isOnlyCurrentFilterTags?: boolean;
}

export const TagList: FC<TagListProps> = ({ isOnlyCurrentFilterTags = false }) => {
  const { filterArr, setFilterArr, filterIndex } = useFilters();
  const currentFilter = filterArr[filterIndex];

  if (!filterArr.length) {
    return null;
  }

  const handleClearTextFilter = (filterIndex: number) => {
    setFilterArr(prev =>
      prev.map((item, index) => {
        if (filterIndex === index) {
          item.filterValue = '';
        }

        return item;
      })
    );
  };

  const handleClearMultipleOption = (filterIndex: number, index: number) => {
    setFilterArr(prev => {
      const filter = prev[filterIndex];

      if (filter.type === 'checkbox' || filter.type === 'multiple') {
        const newFilterValue = filter.filterValue.filter((item, i) => i !== index);

        return prev.map((item, i) => {
          if (filterIndex === i) {
            item.filterValue = newFilterValue;
          }

          return item;
        });
      }

      return prev;
    });
  };

  const handleClearAllMultipleOptions = (filterIndex: number) => {
    setFilterArr(prev => {
      const filter = prev[filterIndex];

      if (filter.type === 'checkbox' || filter.type === 'multiple') {
        const newFilterValue = [filter.filterValue[0]];

        return prev.map((item, i) => {
          if (filterIndex === i) {
            item.filterValue = newFilterValue;
          }

          return item;
        });
      }

      return prev;
    });
  };

  const renderTag = (filterItem: Filter, index: number) => {
    switch (filterItem.type) {
      case 'text':
        return filterItem.filterValue.length ? (
          <li key={filterItem.value} className={styles.tag_wrapper}>
            <Tag isWithCross key={filterItem.value} onClick={() => handleClearTextFilter(index)}>
              {filterItem.filterValue}
            </Tag>
          </li>
        ) : null;

      case 'multiple':
      case 'checkbox':
        if (filterItem.filterValue.length) {
          return (
            <li className={styles.checkboxFilterTag} key={filterItem.value}>
              <Tag isWithCross onClick={() => handleClearMultipleOption(index, 0)}>
                {filterItem.filterValue[0].label}
              </Tag>
              {filterItem.filterValue.length > 1 && (
                <SearchTagMenu
                  filterItem={filterItem}
                  filterIndex={index}
                  onClearOption={handleClearMultipleOption}
                  onClearAllOptions={handleClearAllMultipleOptions}
                />
              )}
            </li>
          );
        }

        return null;

      default:
    }
  };

  const tagElements = isOnlyCurrentFilterTags
    ? renderTag(currentFilter, filterIndex)
    : filterArr.map((item, index) => renderTag(item, index));

  const tagList = tagElements ? (
    Array.isArray(tagElements) ? (
      tagElements.length && tagElements.some(item => item) ? (
        <ul className={styles.tag_list}>{tagElements}</ul>
      ) : null
    ) : (
      <ul className={styles.tag_list}>{tagElements}</ul>
    )
  ) : null;

  return tagList;
};
