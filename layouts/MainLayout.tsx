import React, { FC, PropsWithChildren } from 'react';

import Head from 'next/head';

import { Navbar } from '../components/ui';


export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Nicolas S.M.</title>
        <link rel="icon" href="/img/icon.ico" />
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>
        { children }
      </main>
    </div>
  )
}
