import React, { FC } from 'react';


interface Props {
  placeholder?: string;
  cols?: number;
  rows?: number;
  label?: string;
}

export const TextArea: FC<Props> = ({ placeholder, cols, rows, label }) => {
  return (
    <div className='w-full my-4'>
      { label && <label className='text-white pl-2'>{ label }</label>}
      <textarea
        cols={ cols ? cols : 5}
        rows={ rows ? rows : 5}
        placeholder={ placeholder ? `${ placeholder }` : 'Type something' }
        className='rounded-xl mt-1 px-4 py-2 w-full bg-grey-coal text-white outline-none focus:outline-cerulean-blue'
      />
    </div>
  );
}
