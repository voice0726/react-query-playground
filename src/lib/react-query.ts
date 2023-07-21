import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      useErrorBoundary: false, // if change true, then errors will be thrown and shown in dev screen
    },
  },
  queryCache: new QueryCache({
    onError: (err) => {
      console.log(err);
    },
  }),
});
