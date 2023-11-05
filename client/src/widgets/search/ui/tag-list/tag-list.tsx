import { FC, Dispatch, SetStateAction } from 'react';
import styles from './tag-list.module.scss';
import { Filter } from '../../types';
import { Tag } from '../tag';
import { SearchTagMenu } from '../search-tag-menu';

interface TagListProps {
  filtersArr: Filter[];
  setFilterArr: Dispatch<SetStateAction<Filter[]>>;
}

export const TagList: FC<TagListProps> = ({ filtersArr, setFilterArr }) => {
  if (!filtersArr.length) {
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

        console.log(newFilterValue);

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

  return (
    <ul className={styles.tag_list}>
      {filtersArr.map((item, index) => {
        switch (item.type) {
          case 'text':
            return item.filterValue.length ? (
              <li key={item.value} className={styles.tag_wrapper}>
                <Tag
                  isWithCross
                  key={item.value}
                  text={item.filterValue}
                  onClick={() => handleClearTextFilter(index)}
                />
              </li>
            ) : null;

          case 'multiple':
          case 'checkbox':
            if (item.filterValue.length) {
              return (
                <li className={styles.checkboxFilterTag} key={item.value}>
                  <div
                    className={styles.tag_wrapper}
                    onClick={() => handleClearMultipleOption(index, 0)}
                  >
                    <Tag isWithCross text={item.filterValue[0].label} />
                  </div>
                  {item.filterValue.length > 1 && (
                    <SearchTagMenu
                      filterItem={item}
                      filterIndex={index}
                      handleClearOption={handleClearMultipleOption}
                      handleClearAllOptions={handleClearAllMultipleOptions}
                    />
                  )}
                </li>
              );
            }

            return null;

          default:
        }
      })}
    </ul>
  );
};
