import { QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { queryClient } from 'shared/lib';

type QueryClientProviderProps = {
  children: ReactNode;
};

export const ReactQueryProvider: FC<QueryClientProviderProps> = ({
  children
}: {
  children: ReactNode;
}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
