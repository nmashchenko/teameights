interface IFilter {
  label: string;
  value: string;
  placeholder: string;
}

interface ITextFilter extends IFilter {
  type: 'text';
  filterValue: string;
}

interface IOptionItem {
  label: string;
  value: string;
}

interface ICheckboxFilter extends IFilter {
  type: 'checkbox';
  optionsArr: IOptionItem[];
  filterValue: IOptionItem[];
}

interface IMultipleFilter extends IFilter {
  type: 'text';
  options: IOptionItem[];
  filterValue: string;
}

interface IRangeFilter extends IFilter {
  type: 'range';
  min: number;
  max: number;
  filterValue: null | [number, number];
}

export type Filter = ITextFilter | ICheckboxFilter | IMultipleFilter | IRangeFilter;
