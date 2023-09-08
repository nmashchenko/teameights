export interface User {
  email: string;
  password: string;
  username: string;
  fullName: string;
  isActivated: boolean;
  isRegistered: boolean;
  isLeader: boolean;
  activationLink: string;
  country: string;
  dateOfBirth: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  universityData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jobData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projectData: any;
  concentration: string;
  description: string;
  experience: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: any;
  programmingLanguages: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frameworks: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roles: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  notifications: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  team: any;
}
