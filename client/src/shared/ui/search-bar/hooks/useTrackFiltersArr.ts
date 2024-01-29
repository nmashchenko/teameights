import { useEffect, useRef } from 'react';
import { Filter, IFilterParams } from '../types';

const getFilterValues = (filterArr: Filter[]) =>
  filterArr.reduce<{
    [key: string]: string | string[] | [number, number];
  }>((acc, { type, value, filterValue }) => {
    switch (type) {
      case 'text':
        if (filterValue.length) {
          acc[value] = filterValue;
        }

        return acc;

      case 'multiple':
      case 'checkbox':
        if (filterValue.length) {
          acc[value] = filterValue.map<string>(item => item.label);
        }

        return acc;

      case 'range':
        if (filterValue?.length) {
          acc[value] = filterValue;
        }

        return acc;
    }
  }, {});

export const useTrackFilterArr = (
  { isTimerDisabled, filterArr }: { isTimerDisabled: boolean; filterArr: Filter[] },
  onChange: (filterValues: string | null) => void
) => {
  const filterValues: IFilterParams = getFilterValues(filterArr);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isTimerDisabled) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        onChange(Object.keys(filterValues).length ? JSON.stringify(filterValues) : null);
      }, 500);
    }
  }, [isTimerDisabled, filterArr, onChange, filterValues]);

  if (isTimerDisabled) {
    onChange(Object.keys(filterValues).length ? JSON.stringify(filterValues) : null);
  }
};
