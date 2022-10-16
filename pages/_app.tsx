import type { AppProps } from 'next/app';

import { MainLayout } from '../layouts';

import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp
