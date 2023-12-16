import { createContext } from 'react';
import { SearchContextType } from '../types';

export const SearchContext = createContext<SearchContextType | null>(null);
