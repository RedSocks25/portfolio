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
    <div className='flex container bg-black px-3 py-1 shadow-lg space-x-5'>
      <div className='flex items-center'>
        <Image 
          src={'/img/logo/iconV2.png'}
          width={ 40 }
          height={ 40 }
        />
      </div>
      <div className='flex container justify-between'>
        <div className='flex items-center'>
          {
            routes.map(({ routeName, href }) => (
              <ActiveLink href={ href } routeName={ routeName } />
            ))
          }
        </div>
        <div className='flex'>
          <Image
            src="/img/svg/theme-change.svg"
            height={ 24 }
            width={ 24 }
          />
        </div>
      </div>
    </div>
  )
}
