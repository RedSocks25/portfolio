import React from 'react';

import Image from 'next/image';


export const PresentationCard = () => {
  return (
    <div className='flex flex-row bg-black rounded-xl px-5 py-5 justify-center drop-shadow-xl bg-cerulean-blue'>
      
      {/* Image */}
      <div className='flex items-center px-5'>
        <Image
          src='/img/Nico Selman.png'
          alt='Profile Picture'
          width={ 150 }
          height={ 150 }
          className='rounded-full'
        />
      </div>

      {/* Profile Description */}
      <div className='flex items-center grid grid-cols-1'>
        <p className='text-lg text-white font-semibold'>Nicolas S.M. (a.k.a Shiby)</p>
        <p className='text-white font-medium'>Lead frontend developer</p>
        <button className="px-4 py-1 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Contact</button>
      </div>
    </div>
  );
}
