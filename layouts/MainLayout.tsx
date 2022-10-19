import React, { FC, PropsWithChildren } from 'react';

import Head from 'next/head';

import { Footer, Navbar } from '../components/ui';


export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Nicolas S.M.</title>
        <link rel="icon" href="/img/logo/iconV2.ico" />
      </Head>

      <nav className='sticky top-0'>
        <Navbar />
      </nav>

      <main className='bg-black'>
        { children }
      </main>

      <footer className='bg-black'>
        <Footer />
      </footer>
    </div>
  )
}
