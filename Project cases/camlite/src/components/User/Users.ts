export interface Users {
  callbackSkill?: string;
  email?: string;
  firstName?: string;
  id: number;
  job?: string;
  lastName?: string;
  password?: string;
  organisation?: string;
  phone?: { [key: string]: string };
  role?: string;
  sensitive?: string;
  staffNo?: string;
  status?: string;
  teamId?: number;
}
