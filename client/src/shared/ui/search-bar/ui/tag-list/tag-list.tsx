import { FC, Fragment } from 'react';
import styles from './tag-list.module.scss';
import { Tag } from '../tag';
import { SearchTagMenu } from '../search-tag-menu';
import { useFilters } from '../../hooks';
import { Filter } from '../../types';
import {
  clearFilter,
  clearOneMultipleOption,
  clearAllExceptOneMultipleOptions,
} from '../../actions';

interface TagListProps {
  isOnlyCurrentFilterTags?: boolean;
  isFilterMenu?: boolean;
  onOpenFilter?: (value: string) => void;
}

export const TagList: FC<TagListProps> = ({
  isOnlyCurrentFilterTags = false,
  isFilterMenu = false,
  onOpenFilter,
}) => {
  const { filterArr, dispatch, filterIndex } = useFilters();
  const currentFilter = filterArr[filterIndex];

  if (!filterArr.length) {
    return null;
  }

  const handleClearTextFilter = (filterIndex: number) => {
    dispatch(clearFilter(filterIndex));
  };

  const handleClearOneMultipleOption = (filterIndex: number, optionIndex: number) => {
    dispatch(clearOneMultipleOption(filterIndex, optionIndex));
  };

  const handleClearAllExceptOneMultipleOptions = (filterIndex: number) => {
    dispatch(clearAllExceptOneMultipleOptions(filterIndex));
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
          return isFilterMenu ? (
            <li className={styles.checkbox_filter_tag_mobile} key={filterItem.value}>
              {filterItem.filterValue.map((option, optionIndex) => (
                <Tag
                  key={option.value}
                  isWithCross
                  onClick={() => handleClearOneMultipleOption(index, optionIndex)}
                >
                  {option.label}
                </Tag>
              ))}
            </li>
          ) : (
            <Fragment key={filterItem.value}>
              <li className={styles.checkbox_filter_tag}>
                <Tag isWithCross onClick={() => handleClearOneMultipleOption(index, 0)}>
                  {filterItem.filterValue[0].label}
                </Tag>

                {filterItem.filterValue.length > 1 && (
                  <SearchTagMenu
                    filterItem={filterItem}
                    filterIndex={index}
                    onClearOneOption={handleClearOneMultipleOption}
                    onClearAllExceptOneOptions={handleClearAllExceptOneMultipleOptions}
                  />
                )}
              </li>

              <li
                onClick={onOpenFilter ? () => onOpenFilter(filterItem.value) : undefined}
                className={styles.checkbox_filter_tag_mobile}
                key={filterItem.value}
              >
                <Tag>
                  {filterItem.filterValue.length} {filterItem.value}
                </Tag>
              </li>
            </Fragment>
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
