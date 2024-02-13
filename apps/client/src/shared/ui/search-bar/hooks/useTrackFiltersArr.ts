import { useEffect, useRef } from 'react';
import { Filter, IFilterParams } from '../types';

export const useTrackFilterArr = (
  filterArr: Filter[],
  onChange: (filterValues: string | null) => void
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const filterValues: IFilterParams = filterArr.reduce<{
        [key: string]: string | string[] | [number, number];
      }>((acc, curr) => {
        switch (curr.type) {
          case 'text':
            if (curr.filterValue.length) {
              acc[curr.value] = curr.filterValue;
            }

            return acc;

          case 'multiple':
          case 'checkbox':
            if (curr.filterValue.length) {
              acc[curr.value] = curr.filterValue.map<string>(item => item.label);
            }

            return acc;

          case 'range':
            if (curr.filterValue?.length) {
              acc[curr.value] = curr.filterValue;
            }

            return acc;
        }
      }, {});

      onChange(Object.keys(filterValues).length ? JSON.stringify(filterValues) : null);
    }, 500);
  }, [filterArr, onChange]);
};