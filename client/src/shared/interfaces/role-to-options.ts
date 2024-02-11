import { IOption } from './option';

export interface IRoleToOptionsMap {
  [role: string]: IOption[] | undefined;
}
