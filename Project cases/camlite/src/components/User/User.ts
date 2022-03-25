export enum Role {
  siteManager = 'Site Manager',
  teamLeader = 'Team Leader',
  agent = 'Agent',
}

export interface User {
  id: number;
  title?: string;
  firstName?: string;
  lastName?: string;
  usersId?: number;
  job?: string;
  phone?: { [key: string]: string };
  email?: string;
  teamId?: string;
  role?: string;
  organisation?: string;
  status?: string;
  clearance?: string;
  callback?: string;
}
