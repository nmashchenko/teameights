export type Developer =
  | 'Backend Developer'
  | 'Cyber Security'
  | 'Data Engineer'
  | 'Data Scientist'
  | 'Database Developer'
  | 'Desktop Applications Developer'
  | 'DevOps Engineer'
  | 'Embedded Systems Developer'
  | 'Frontend Developer'
  | 'Full-Stack Developer'
  | 'Machine Learning Engineer'
  | 'Mobile Developer'
  | 'No-code Developer'
  | 'QA/Test Engineer';

export type Designer =
  | '3D'
  | 'Graphic'
  | 'Motion'
  | 'SMM'
  | 'UX'
  | 'Game'
  | 'Illustration'
  | 'Product'
  | 'UI'
  | 'Web';

export type ProjectManager = 'Web Projects' | 'Mobile Projects' | 'Game Projects';

export type Focus = Developer | Designer | ProjectManager;

export const projectManagerValues = ['Web Projects', 'Mobile Projects', 'Game Projects'];

export const designerValues = [
  '3D',
  'Graphic',
  'Motion',
  'SMM',
  'UX',
  'Game',
  'Illustration',
  'Product',
  'UI',
  'Web',
];

export const developerValues = [
  'Backend Developer',
  'Cyber Security',
  'Data Engineer',
  'Data Scientist',
  'Database Developer',
  'Desktop Applications Developer',
  'DevOps Engineer',
  'Embedded Systems Developer',
  'Frontend Developer',
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'Mobile Developer',
  'No-code Developer',
  'QA/Test Engineer',
  'Designer',
  'Project Manager',
  'Other',
];
