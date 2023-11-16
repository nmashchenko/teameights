import styles from './tag-list.module.scss';
import { Tag } from '../tag';
import { SearchTagMenu } from '../search-tag-menu';
import { useFilters } from '../../hooks';

export const TagList = () => {
  const { filterArr, setFilterArr } = useFilters();
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

  return (
    <ul className={styles.tag_list}>
      {filterArr.map((item, index) => {
        switch (item.type) {
          case 'text':
            return item.filterValue.length ? (
              <li key={item.value} className={styles.tag_wrapper}>
                <Tag isWithCross key={item.value} onClick={() => handleClearTextFilter(index)}>
                  {item.filterValue}
                </Tag>
              </li>
            ) : null;

          case 'multiple':
          case 'checkbox':
            if (item.filterValue.length) {
              return (
                <li className={styles.checkboxFilterTag} key={item.value}>
                  <Tag isWithCross onClick={() => handleClearMultipleOption(index, 0)}>
                    {item.filterValue[0].label}
                  </Tag>
                  {item.filterValue.length > 1 && (
                    <SearchTagMenu
                      filterItem={item}
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
      })}
    </ul>
  );
};
