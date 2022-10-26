import React, { FC } from 'react';


interface Props {
  placeholder?: string;
  label?: string;
  type: string;
}

export const Input: FC<Props> = ({ placeholder, label, type }) => {
  return (
    <div className='w-full my-4'>
      { label && <label className='text-white pl-2'>{ label }</label> }
      <input
        type={ type }
        placeholder={ placeholder ? `${ placeholder }` : '' }  
        className='rounded-xl mt-1 px-4 py-2 w-full bg-grey-coal text-white outline-none focus:outline-cerulean-blue'
      />
    </div>
  );
}
