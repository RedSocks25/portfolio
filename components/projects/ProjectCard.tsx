import Image from 'next/image';
import React, { FC, useState } from 'react';




interface Props {
  project: { title: string, description: string }
}

export const ProjectCard: FC<Props> = ({ project }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative'
      onMouseOver={ () => setIsHovered(true) }
      onMouseOut={ () => setIsHovered(false) }
    >
      <Image
        src='/img/pictures/default-project.jpg'
        layout='fill'
      />  
      <div className={`flex grid grid-cols-1 absolute bottom-0 w-full h-full py-3 ${ isHovered ? '-translate-y-full' : 'translate-y-0' } duration-300`}>
        <span className='text-white text-center absolute bottom-0 bg-black w-full h-fit py-3'>{ project.title }</span>
      </div>
    </div>
  );
}
