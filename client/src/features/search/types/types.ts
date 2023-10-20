import { MultiValue } from 'react-select';

interface IFilter {
  label: string;
  value: string;
  placeholder: string;
}

interface ITextFilter extends IFilter {
  type: 'text';
  filterValue: string;
}

export interface IOptionItem {
  label: string;
  value: string;
}

export interface ICheckboxFilter extends IFilter {
  type: 'checkbox';
  optionsArr: IOptionItem[];
  filterValue: MultiValue<IOptionItem>;
}

interface IMultipleFilter extends IFilter {
  type: 'text';
  optionsArr: MultiValue<IOptionItem>;
  filterValue: string;
}

interface IRangeFilter extends IFilter {
  type: 'range';
  min: number;
  max: number;
  filterValue: null | [number, number];
}

export type Filter = ITextFilter | ICheckboxFilter | IMultipleFilter | IRangeFilter;
