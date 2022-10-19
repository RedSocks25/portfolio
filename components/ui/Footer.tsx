import React from 'react';

import Link from 'next/link';
import Image from 'next/image';


const links = [
  {
    url: 'https://github.com/RedSocks25',
    icon: 'github'
  },
  {
    url: 'https://www.linkedin.com/in/nicol%C3%A1s-selman-morales-280239224/',
    icon: 'linkedin'
  },
  {
    url: 'https://twitter.com/RedSocks25',
    icon: 'twitter'
  },
  {
    url: 'https://www.youtube.com/channel/UCqrfsnQcqJZnywtoNH_SJWQ',
    icon: 'youtube'
  }
];

export const Footer = () => {
  return (
    <div className='flex flex-col items-center container py-5'>
      {/* Links for reaching */}
      <div className='my-5 flex flex-row gap-x-6'>
        {
          links.map(({ url, icon }, idx) => (
            <Link href={url} key={ idx } passHref>
              <a>
                <Image
                alt={ icon }
                  src={`/img/svg/${ icon }.svg`}
                  height={ 24 }
                  width={ 24 }
                />
              </a>
            </Link>
            
          ))
        }
      </div>
      
      <div className='flex items-center justify-center mt-3'>
        <Image
        alt='Nico S.M. logo'
          src='/img/iconv2.png'
          height={ 70 }
          width={ 70 }
        />
      </div>

      <div className='mt-3'>
        <p className='text-white opacity-40'>Made by Nico .S.M.</p>
      </div>
    </div>
  );
}
