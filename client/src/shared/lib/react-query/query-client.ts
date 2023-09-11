'use client';

import { toast } from 'react-hot-toast';
import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
    },
  },
  queryCache: new QueryCache({
    onError: error => {
      toast.error(error.message);
    },
  }),
});
