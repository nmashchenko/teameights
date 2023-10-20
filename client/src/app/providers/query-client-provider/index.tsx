'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
