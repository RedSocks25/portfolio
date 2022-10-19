import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';


export const PresentationCard = () => {
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  }

  return (
    <div className='flex flex-col sm:flex-row bg-black rounded-xl px-5 py-5 justify-center items-center drop-shadow-xl bg-cerulean-blue w-fit h-fit hover:scale-105 duration-300'>
      
      {/* Image */}
      <div className='flex items-center px-3'>
        <Image
          src='/img/pictures/Nico Selman.png'
          alt='Profile Picture'
          width={ 150 }
          height={ 150 }
          className='rounded-full'
        />
      </div>

      {/* Profile Description */}
      <div className='flex grid grid-cols-1 px-4 h-fit gap-2'>
        <p className='text-lg text-white font-semibold'>Nicolas S.M. (a.k.a Shiby)</p>
        <p className='text-white font-medium'>Lead frontend developer</p>
        <button onClick={ handleClick } className="px-4 py-1 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mt-2">Contact</button>
      </div>
    </div>
  );
}
