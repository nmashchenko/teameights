import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const withQuery = (component) => () =>
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
