import type { NextPage } from 'next';
import Image from 'next/image';

import { ProjectCard } from '../components/projects';
import { PresentationCard } from '../components/ui';


const projects = [
  {
    title: "Project 1",
    description: "Description of project 1 for being shown in the projects HomePage section"
  },
  {
    title: "Project 2",
    description: "Description of project 2 for being shown in the projects HomePage section"
  },
  {
    title: "Project 3",
    description: "Description of project 3 for being shown in the projects HomePage section"
  },
]

const HomePage: NextPage = () => {
  return (
    <>
      <div className='grid sm:grid-cols-2 p-2 sm:p-8 h-fit sm:h-screen'> {/* Presentation <Div> */}
        
        {/* Message and presentation card */}
        <div className='grid grid-row columns-1 p-5 space-y-10'> 
          
          {/* Entry Message */}
          <div className='flex items-center'>
            <p className='text-5xl text-center text-white'>
              <span className='text-8xl text-cerulean-blue inline-block align-baseline'>Coding </span> gives the power to do <span className='text-8xl inline-block align-b aseline text-cerulean-blue'> Whatever </span> we want
            </p>
          </div>

          {/* Presentation Card */}
          <div className='flex justify-center'>
            <PresentationCard />
          </div>
          
        </div>

        {/* Logo Section. Probably will be showing something important in this section, like new projects or something */}
        <div className='sm:columns-1 flex items-center justify-center m-3'>
          <Image
            src='/img/iconv2.png'
            height={ 150 }
            width={ 150 }
          />
        </div>

      </div>


      {/* Projects <Div> */}
      <div className='h-screen bg-white grid grid-cols-1 h-fit sm:h-screen sm:grid-cols-3'>
        {
          projects.map((project, index) => (
            // TODO: Create component for ProjectCard
            <ProjectCard project={ project } key={ index } />
          ))
        }
      </div>
    </>
  );
}

export default HomePage;
