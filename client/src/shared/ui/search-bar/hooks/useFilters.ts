import { useContext } from 'react';
import { SearchContext } from '../contexts';

export const useFilters = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error();
  }

  return context;
};
