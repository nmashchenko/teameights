import type { FC, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'shared/lib';

interface QueryClientProviderProperties {
  children: ReactNode;
}

export const ReactQueryProvider: FC<QueryClientProviderProperties> = ({
  children,
}: {
  children: ReactNode;
}) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
