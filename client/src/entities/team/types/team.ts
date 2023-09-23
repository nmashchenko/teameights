import type { User } from '@/entities/user';

export interface Team {
  _id: string;
  name: string;
  description?: string;
  leader: User; // Assuming User is represented by its ID on the frontend
  members?: User[]; // Assuming User is represented by its ID on the frontend
  country: string;
  tag: string;
  type: 'invite-only' | 'closed' | 'open';
  wins?: number;
  points?: number;
  image?: string;
}
