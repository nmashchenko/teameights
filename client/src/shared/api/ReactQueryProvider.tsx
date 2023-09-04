'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query?.meta?.errorMessage) {
        // after toast will be installed, instead of the string bellow
        // will be: toast.error(query.meta.errorMessage)
        console.error(query.meta.errorMessage);
      }
    }
  })
});

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
