import { FC, Dispatch, SetStateAction, useState } from 'react';
import { Filter, IOptionItem } from '../../types';
import { TextInput } from '../text-input';
import { CheckboxSelect } from '../checkbox-select';
import { MultiValue } from 'react-select';

interface ISearchInput {
  filtersArr: Filter[];
  setFilterArr: Dispatch<SetStateAction<Filter[]>>;
  filterIndex: number;
}

export const SearchInput: FC<ISearchInput> = props => {
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
        <CheckboxSelect
          defaultValue={currentFilter.filterValue}
          optionsArr={currentFilter.optionsArr}
          onChange={onChange}
          placeholder={currentFilter.placeholder}
        />
      );

    default:
  }
};
