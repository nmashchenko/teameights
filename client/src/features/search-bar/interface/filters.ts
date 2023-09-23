interface IFilter {
  label: string;
  value: string;
}

interface ITextFilter extends IFilter {
  type: 'text';
  filterValue: string;
}

interface ICheckboxFilterItem {
  label: string;
  value: string;
}

interface ICheckboxFilter extends IFilter {
  type: 'checkbox';
  filterValue: ICheckboxFilterItem[];
}

interface IMultipleFilter extends IFilter {
  type: 'text';
  filterValue: string;
}

interface IRangeFilter extends IFilter {
  type: 'range';
  min: number;
  max: number;
  filterValue: null | [number, number];
}

export type Filter = ITextFilter | ICheckboxFilter | IMultipleFilter | IRangeFilter;
