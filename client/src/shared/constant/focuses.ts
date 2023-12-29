import { IRoleToOptionsMap } from '@/shared/interfaces';

export const focuses: IRoleToOptionsMap = {
  Developer: [
    {
      label: 'Mobile Developer',
      value: 'mobile',
    },
    {
      label: 'Frontend Developer',
      value: 'frontend',
    },
    {
      label: 'Backend Developer',
      value: 'backend',
    },
    {
      label: 'Full-Stack Developer',
      value: 'fullstack',
    },
    {
      label: 'Desktop Applications Developer',
      value: 'desktop',
    },
    {
      label: 'Embedded Systems Developer',
      value: 'embedded',
    },
    {
      label: 'Machine Learning Engineer',
      value: 'ml',
    },
    {
      label: 'Data Scientist',
      value: 'datascience',
    },
    {
      label: 'DevOps Engineer',
      value: 'devops',
    },
    {
      label: 'Data Engineer',
      value: 'dataengineer',
    },
    {
      label: 'QA/Test Engineer',
      value: 'qa',
    },
    {
      label: 'Cyber Security',
      value: 'cybersecurity',
    },
    {
      label: 'Database Developer',
      value: 'databasedeveloper',
    },
    {
      label: 'No-code Developer',
      value: 'nocodedeveloper',
    },
  ],
  Designer: [
    { label: '3D', value: '3d' },
    { label: 'Graphic', value: 'graphic' },
    { label: 'Motion', value: 'motion' },
    { label: 'SMM', value: 'smm' },
    { label: 'UX', value: 'ux' },
    { label: 'Game', value: 'game' },
    { label: 'Illustration', value: 'illustration' },
    { label: 'Product', value: 'product' },
    { label: 'UI', value: 'ui' },
    { label: 'Web', value: 'web' },
  ],
  'Project Manager': [
    { label: 'Web Projects', value: 'webprojects' },
    { label: 'Gaming projects', value: 'gamingprojects' },
    { label: 'Mobile Projects', value: 'mobileprojects' },
  ],
};
