import { useEffect, useRef } from 'react';
import qs from 'qs';
import { Filter } from '../types';

export const useTrackFilterArr = (
  filterArr: Filter[],
  callback: (queryString: string) => void
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const filtersValues = {
        filters: filterArr.reduce<{ [key: string]: string | string[] | [number, number] }>(
          (acc, curr) => {
            switch (curr.type) {
              case 'text':
                if (curr.filterValue.length) {
                  acc[curr.value] = curr.filterValue;
                }

                return acc;

              case 'multiple':
              case 'checkbox':
                if (curr.filterValue.length) {
                  acc[curr.value] = curr.filterValue.map(item => item.value);
                }

                return acc;

              case 'range':
                if (curr.filterValue?.length) {
                  acc[curr.value] = curr.filterValue;
                }

                return acc;
            }
          },
          {}
        ),
      };

      const queryString = qs.stringify(filtersValues);

      callback(queryString);
    }, 1300);
  }, [filterArr, callback]);
};
