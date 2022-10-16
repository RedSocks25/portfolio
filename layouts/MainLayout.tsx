import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../components/ui';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Nicolas S.M.</title>
        <link rel="icon" href="/img/icon.ico" />
      </Head>
      
      <Navbar />

      <main className='bg-outer-space-crayola'>
        { children }
      </main>
    </div>
  )
}
