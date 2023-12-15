import { Dispatch, SetStateAction } from 'react';
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

export interface IMultipleFilter extends IFilter {
  type: 'multiple';
  optionsArr: IOptionItem[];
  filterValue: MultiValue<IOptionItem>;
}

export interface IRangeFilter extends IFilter {
  type: 'range';
  min: number;
  max: number;
  filterValue: null | [number, number];
}

export type Filter = ITextFilter | ICheckboxFilter | IMultipleFilter | IRangeFilter;

export interface IFilterParams {
  [key: string]: string | [number, number] | string[];
}

export interface SearchContextType {
  filterArr: Filter[];
  setFilterArr: Dispatch<SetStateAction<Filter[]>>;
  filterIndex: number;
  setFilterIndex: Dispatch<SetStateAction<number>>;
}
