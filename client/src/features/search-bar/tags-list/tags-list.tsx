import React, { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Filter } from '../interface/filters';
import clsx from 'clsx';
import styles from './tags-list.module.scss';
import Tag from './tag/tag';

const TagsList = () => {
  const { setValue } = useFormContext();
  const filtersArr: Filter[] = useWatch({
    name: 'filtersArr',
  });
  const [isListOpened, setIsListOpened] = useState(false);

  if (!filtersArr.length) {
    return null;
  }

  const handleClearTextFilter = (index: number) => {
    setValue(`filtersArr.${index}.filterValue`, '');
  };

  const handleClearCheckboxOption = (index: number, subIndex: number) => {
    setValue(
      `filtersArr.${index}.filterValue`,
      filtersArr[index].filterValue.filter((item, i) => i !== subIndex)
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
                  onClick={() => handleClearTextFilter(i)}
                />
              </li>
            ) : null;

          case 'checkbox':
            if (item.filterValue.length) {
              return (
                <React.Fragment key={item.value}>
                  <li
                    className={clsx(styles.tagWrapper)}
                    onClick={() => handleClearCheckboxOption(index, 0)}
                  >
                    <Tag isWithCross text={item.filterValue[0].label} />
                  </li>
                  {item.filterValue.length > 1 && (
                    <li className={clsx(styles.tagWrapper)} onClick={() => setIsListOpened(true)}>
                      {isListOpened ? (
                        <ul>
                          {item.filterValue.slice(1).map((item, subIndex) => (
                            <li
                              key={item.value}
                              onClick={() => handleClearCheckboxOption(index, subIndex + 1)}
                            >
                              <Tag isWithCross text={item.label} />
                            </li>
                          ))}
                          {/* Clear all button */}
                        </ul>
                      ) : (
                        <Tag text={`+${item.filterValue.length - 1} items`} />
                      )}
                    </li>
                  )}
                </React.Fragment>
              );
            }

            return null;

          default:
        }
      })}
    </ul>
  );
};

export default TagsList;
