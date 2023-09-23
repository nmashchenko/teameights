import { Notification } from 'entities/notification';
import { Role } from 'entities/role';
import { Team } from 'entities/team';

export interface User {
  _id: string;
  email: string;
  password: string;
  username?: string;
  fullName?: string;
  isActivated?: boolean;
  isRegistered?: boolean;
  isLeader?: boolean;
  activationLink?: string;
  country?: string;
  dateOfBirth?: Date;
  universityData?: {
    university: string;
    degree: string;
    major: string;
    addmissionDate: Date;
    graduationDate: Date;
  }[];
  jobData?: {
    title: string;
    company: string;
    startDate: Date;
    endDate: Date;
  }[];
  projectData?: {
    title: string;
    link: string;
  }[];
  concentration?: string;
  description?: string;
  experience?: string;
  image?: string;
  links?: {
    github?: string;
    linkedIn?: string;
    behance?: string;
    telegram?: string;
  };
  programmingLanguages?: string[];
  frameworks?: string[];
  roles?: Role[]; // Assuming Role is represented by its ID on the frontend
  notifications?: Notification[]; // Assuming Notification is represented by its ID on the frontend
  team?: Team; // Assuming Team is represented by its ID on the frontend
}
