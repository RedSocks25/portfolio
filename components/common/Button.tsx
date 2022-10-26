import React, { FC, PropsWithChildren } from 'react';


interface Props extends PropsWithChildren {
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: FC<Props> = ({ children, type }) => {
  return (
    <button
      type={ type ? type : undefined }
      className="px-5 py-1 text-lg h-fit w-fit text-cerulean-blue font-semibold rounded-full border hover:text-white hover:bg-cerulean-blue hover:border-black mt-2 duration-300 focus:outline-none focus:ring focus:ring-white"
    >
      { children }
    </button>
  );
}
