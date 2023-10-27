import { useEffect } from 'react';
import qs from 'qs';
import { Filter } from '../../types';

export const useTrackFiltersArr = (
  filtersArr: Filter[],
  callback: (queryString: string) => void
) => {
  useEffect(() => {
    const filtersValues = {
      filters: filtersArr.reduce<{ [key: string]: string | string[] | [number, number] }>(
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
  }, [filtersArr, callback]);
};
