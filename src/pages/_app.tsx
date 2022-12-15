import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ThemeProvider, Global } from '@emotion/react';
import theme from 'src/styles/Theme';
import global from 'src/styles/global';
import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}
const MyApp = (props: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default MyApp;
