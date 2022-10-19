import Image from 'next/image';
import React, { FC, useState } from 'react';
import Link from 'next/link';




interface Props {
  project: { title: string, description: string }
}

export const ProjectCard: FC<Props> = ({ project }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex relative'
      onMouseOver={ () => setIsHovered(true) }
      onMouseOut={ () => setIsHovered(false) }
    >
      <Image
        src='/img/pictures/default-project.jpg'
        layout='fill'
      />
      
      <div className='h-screen flex'>
        <div className={`${ isHovered ? 'h-full' : 'h-0' } w-full absolute duration-300 bottom-0 flex flex-col bg-black opacity-50 items-center justify-center px-3`}>
          <p className={`${ !isHovered && 'scale-0' } duration-300 text-white my-5 flex`}>{ project.description }</p>
          <Link href='/projects/project' passHref>
            <a className={`${ !isHovered && 'scale-0' } duration-300 text-white text-center my-5`}>View more</a>
          </Link>
        </div>
        <span className='text-white text-center absolute bottom-0 bg-black w-full h-fit py-3 opacity-100'>{ project.title }</span>
      </div>


    </div>
  );
}
