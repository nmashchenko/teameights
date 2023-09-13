import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { queryClient } from 'shared/lib';

type QueryClientProviderProps = {
  children: ReactNode;
};

export const ReactQueryProvider: React.FC<QueryClientProviderProps> = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
