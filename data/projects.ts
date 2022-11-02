import { Project } from '../interfaces';


export const projects: Project[] = [
  {
    id: 'route-tracker',
    title: 'Garbage Route Tracker',
    description: 'Google Maps web application that gathers data from IoT devices and create an optimal route between certain spots to create the most efficient route for a land vehicule',
    url: '...',
    tech: [
      'NextJS',
      'MaterialUI',
      'Typescript'
    ],
    roles: [
      'Frontend Developer'
    ],
    type: 'Freelance',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Personal website to show my achivements as developer and team leader into the tech development world',
    url: 'nicosm.vercel.app',
    tech: [
      'NextJS',
      'TailwindCSS',
      'Typescript'
    ],
    roles: [
      'Developer',
      'Owner'
    ],
    type: 'Own project',
  },
  {
    id: 'zentangle-mtk',
    title: 'Zentangle Marketplace',
    description: 'NFT Marketplace developed by Zignar Tech team, with me as Team Leader.',
    url: '',
    tech: [
      'NextJS',
      'SCSS',
      'Typescript'
    ],
    roles: [
      'Developer',
      'Team Leader'
    ],
    type: 'Hired',
  }
]