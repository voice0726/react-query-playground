import { ReactNode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';

import { IS_DEVELOPMENT } from '@/config/constants';
import { queryClient } from '@/lib/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
      <ErrorBoundary
        fallback={<div>Something went wrong!</div>}
        onError={(err) => {
          console.log('error caught in error boundary');
          console.error(err);
        }}
      >
        {children}
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
