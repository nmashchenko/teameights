import { MultiValue } from 'react-select';
import { IOptionItem } from '../../types';
import { TextInput } from '../text-input';
import { SearchSelect } from '../search-select';
import { useFilters } from '../../hooks';
import { FC } from 'react';

interface SearchInputProps {
  menuWrapper?: HTMLElement | null;
}

export const SearchInput: FC<SearchInputProps> = ({ menuWrapper }) => {
  const { filterArr, setFilterArr, filterIndex } = useFilters();
  const currentFilter = filterArr[filterIndex];

  const onChange = (newValue: string | MultiValue<IOptionItem> | [number, number] | null) => {
    setFilterArr(prev => {
      return prev.map((item, i) => {
        if (filterIndex === i) {
          item.filterValue = newValue;
        }

        return item;
      });
    });
  };

  switch (currentFilter.type) {
    case 'text':
      return (
        <TextInput
          defaultValue={currentFilter.filterValue}
          onChange={onChange}
          placeholder={currentFilter.placeholder}
        />
      );

    case 'checkbox':
      return (
        <SearchSelect
          defaultValue={currentFilter.filterValue}
          optionsArr={currentFilter.optionsArr}
          onChange={onChange}
          isCheckbox
          placeholder={currentFilter.placeholder}
          menuWrapper={menuWrapper}
        />
      );

    case 'multiple':
      return (
        <SearchSelect
          defaultValue={currentFilter.filterValue}
          optionsArr={currentFilter.optionsArr}
          onChange={onChange}
          placeholder={currentFilter.placeholder}
          menuWrapper={menuWrapper}
        />
      );

    default:
  }
};
