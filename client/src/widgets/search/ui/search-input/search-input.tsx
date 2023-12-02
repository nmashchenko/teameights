import { FC, Dispatch, SetStateAction } from 'react';
import { MultiValue } from 'react-select';
import { Filter, IOptionItem } from '../../types';
import { TextInput } from '../text-input';
import { SearchSelect } from '../search-select';

interface SearchInputProps {
  filtersArr: Filter[];
  setFilterArr: Dispatch<SetStateAction<Filter[]>>;
  filterIndex: number;
}

export const SearchInput: FC<SearchInputProps> = ({ filtersArr, setFilterArr, filterIndex }) => {
  const currentFilter = filtersArr[filterIndex];

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
        />
      );

    case 'multiple':
      return (
        <SearchSelect
          defaultValue={currentFilter.filterValue}
          optionsArr={currentFilter.optionsArr}
          onChange={onChange}
          placeholder={currentFilter.placeholder}
        />
      );

    default:
  }
};
