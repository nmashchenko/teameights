import { MultiValue } from 'react-select';
import { IOptionItem } from '../../types';
import { TextInput } from '../text-input';
import { SearchSelect } from '../search-select';
import { useFilters } from '../../hooks';
import { FC } from 'react';
import { changeFilterValue } from '../../actions';

interface SearchInputProps {
  menuWrapper?: HTMLElement | null;
}

export const SearchInput: FC<SearchInputProps> = ({ menuWrapper }) => {
  const { filterArr, dispatch, filterIndex } = useFilters();
  const currentFilter = filterArr[filterIndex];

  const onChange = (newValue: string | MultiValue<IOptionItem> | [number, number] | null) => {
    dispatch(changeFilterValue(filterIndex, newValue));
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
