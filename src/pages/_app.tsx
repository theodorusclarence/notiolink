import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, QueryOptions } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@/styles/globals.css';

import axiosClient from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await axiosClient.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DismissableToast />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default MyApp;
