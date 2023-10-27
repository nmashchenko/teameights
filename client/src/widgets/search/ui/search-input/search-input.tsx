import { FC, Dispatch, SetStateAction, useState } from 'react';
import { MultiValue } from 'react-select';
import { Filter, IOptionItem } from '../../types';
import { TextInput } from '../text-input';
import { SearchSelect } from '../search-select';

interface SearchInputProps {
  filtersArr: Filter[];
  setFilterArr: Dispatch<SetStateAction<Filter[]>>;
  filterIndex: number;
}

export const SearchInput: FC<SearchInputProps> = props => {
  const { filtersArr, setFilterArr, filterIndex } = props;
  const currentFilter = filtersArr[filterIndex];
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | string | number | undefined>();

  const onChange = (newValue: string | MultiValue<IOptionItem> | [number, number] | null) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        setFilterArr(prev => {
          return prev.map((item, i) => {
            if (filterIndex === i) {
              item.filterValue = newValue;
            }

            return item;
          });
        });
      }, 2000)
    );
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
