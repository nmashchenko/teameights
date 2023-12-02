type developer =
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
type designer = 'Designer';
type project_manager = 'Project Manager';
type other = 'Other';

export type Speciality = developer | designer | project_manager | other;
export const specialityValues = [
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
