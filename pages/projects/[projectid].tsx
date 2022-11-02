import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Project } from '../../interfaces';

import { projects } from '../../data/projects';


const ProjectsPage = () => {

  const router = useRouter();
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    const { projectid } = router.query;
    setProject(projects.find((project) => project.id === projectid));
  }, [router]);
  
  // TODO: create template to display the information of the entire project in detail
  return (
    <div>
      {/* TODO: Create section for the title */}
      <h1 className='text-white'>{ project?.title }</h1>
      
      {/* TODO: Create section for the description */}
      <h1 className='text-white'>{ project?.description }</h1>

      {/* TODO: Create section for the roles */}
      <h1 className='text-white'>{ project?.roles }</h1>

      {/* TODO: Create section for the used technologies */}
      <h1 className='text-white'>{ project?.tech }</h1>

      {/* TODO: Create section for the type of job */}
      <h1 className='text-white'>{ project?.type }</h1>
    </div>
  );
}

export default ProjectsPage;
