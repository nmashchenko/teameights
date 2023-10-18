import { NotificationType } from './notification';
import { ITeam } from './team';
import { Identifiable, Timestamps, Nullable } from './common';

export type ExperienceType = '0-1 years' | '1-3 years' | '3-5 years' | '5+ years';

export interface IUserBase extends Timestamps {
  id: number;
  username: Nullable<string>;
  fullName: Nullable<string>;
  photo: Nullable<IFileEntity>;
  role: Nullable<IRole>;
  status: IStatus;
  isLeader: Nullable<boolean>; // Simplified
  country: Nullable<string>;
  dateOfBirth: Nullable<Date>;
  concentration: Nullable<string>;
  description: Nullable<string>;
  experience: Nullable<ExperienceType>;
  programmingLanguages: Nullable<string[]>;
  frameworks: Nullable<string[]>;
  universities: IUniversity[] | [];
  jobs: IJob[] | [];
  projects: IProject[] | [];
  links: Nullable<ILinks>;
  notifications: NotificationType[] | [];
  team: Nullable<ITeam>;
}

export interface IUserResponse extends IUserBase {}

export interface IUserProtectedResponse extends IUserBase {
  email: Nullable<string>;
  provider: string;
  socialId: Nullable<string>;
}

export interface IUserRequest {
  photo?: IFileEntity;
  fullName?: string;
  username?: string;
  password?: string;
  isLeader?: boolean;
  country?: string;
  dateOfBirth?: Date;
  concentration?: string;
  description?: string;
  experience?: ExperienceType;
  programmingLanguages?: string[];
  frameworks?: string[];
  universities?: IUniversity[];
  jobs?: IJob[];
  projects?: IProject[];
  links?: ILinks;
}

export interface IFindUserCriteria {
  fullName?: string;
  username?: string;
  isLeader?: boolean;
  country?: string;
  concentration?: string;
  experience?: ExperienceType;
  programmingLanguages?: string[];
  frameworks?: string[];
}

export interface IFileEntity extends Identifiable {
  path: string;
}

export interface IStatus extends Identifiable {
  name?: string;
}

export interface IRole extends Identifiable {
  name?: string;
}

export interface IProject extends Identifiable {
  title: string;
  link: string;
}

export interface ILinks extends Identifiable {
  github?: string;
  linkedIn?: string;
  behance?: string;
  telegram?: string;
}

export interface IJob extends Identifiable {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export interface IUniversity extends Identifiable {
  name: string;
  degree: string;
  major: string;
  admissionDate: Date;
  graduationDate?: Date;
}
