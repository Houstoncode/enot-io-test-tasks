import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const withQuery = (component: () => React.ReactNode) => () =>
  (
    <QueryClientProvider client={queryClient} contextSharing>
      {component()}
    </QueryClientProvider>
  );
