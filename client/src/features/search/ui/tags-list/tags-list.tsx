import { FC, Dispatch, SetStateAction } from 'react';
import { Filter } from '../../types';
import clsx from 'clsx';
import styles from './tags-list.module.scss';
import { Tag } from '../tag';
import { CheckboxTagMenu } from '../checkbox-tag-menu';

interface TagsList {
  filtersArr: Filter[];
  setFilterArr: Dispatch<SetStateAction<Filter[]>>;
}

export const TagsList: FC<TagsList> = props => {
  const { filtersArr, setFilterArr } = props;

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

  const handleClearCheckboxOption = (filterIndex: number, index: number) => {
    setFilterArr(prev => {
      const newFilterValue = prev[filterIndex].filterValue.filter((item, i) => i !== index);

      return prev.map((item, i) => {
        if (filterIndex === i) {
          item.filterValue = newFilterValue;
        }

        return item;
      });
    });
  };

  const handleClearAllCheckboxOptions = (filterIndex: number) => {
    setFilterArr(prev =>
      prev.map((item, index) => {
        if (filterIndex === index) {
          item.filterValue = [];
        }

        return item;
      })
    );
  };

  return (
    <ul className={clsx(styles.tagsList)}>
      {filtersArr.map((item, index) => {
        switch (item.type) {
          case 'text':
            return item.filterValue.length ? (
              <li key={item.value} className={clsx(styles.tagWrapper)}>
                <Tag
                  isWithCross
                  key={item.value}
                  text={item.filterValue}
                  onClick={() => handleClearTextFilter(index)}
                />
              </li>
            ) : null;

          case 'checkbox':
            if (item.filterValue.length) {
              return (
                <li className={styles.checkboxFilterTag} key={item.value}>
                  <div
                    className={clsx(styles.tagWrapper)}
                    onClick={() => handleClearCheckboxOption(index, 0)}
                  >
                    <Tag isWithCross text={item.filterValue[0].label} />
                  </div>
                  {item.filterValue.length > 1 && (
                    <CheckboxTagMenu
                      filterItem={item}
                      filterIndex={index}
                      handleClearCheckboxOption={handleClearCheckboxOption}
                      handleClearAllCheckboxOptions={handleClearAllCheckboxOptions}
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
