import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import { ActiveLink } from './ActiveLink';

const routes = [
  { routeName: 'Home', href: '/' },
  { routeName: 'Projects', href: '/projects' },
  { routeName: 'Videos', href: '/videos' },
  { routeName: 'About', href: '/about' },
  { routeName: 'Contact', href: '/contact' },
]

export const Navbar: FC = () => {
  return (
    <div className='container bg-black pl-3 pr-3 p-1 shadow-lg border-b-1 border-slate-400 grid-cols-12'>
      <nav className='flex items-center grid-cols-12'>
        <div className='columns-2 flex items-center'>
          <Image 
            src={'/img/portfolio-logo.png'}
            width={ 125 }
            height={ 50 }
          />
        </div>
        <div className='columns-10 flex items-center'>
          {
            routes.map(({ routeName, href }) => (
              <ActiveLink href={ href } routeName={ routeName } />
            ))
          }
        </div>
      </nav>
    </div>
  )
}
