'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { toast } from 'sonner';

type QueryClientProviderProps = {
  children: ReactNode;
};

export const ReactQueryProvider: FC<QueryClientProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error, query) => {
            console.log(error, query);
            // 🎉 only show error toasts if we already have data in the cache
            // which indicates a failed background update
            console.log(query.state);
            if (query.state.data !== undefined) {
              toast.error(`Something went wrong: ${error.message}`);
            }
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
