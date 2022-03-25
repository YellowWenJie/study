export interface Customer {
  id?: number;
  firstName: string;
  lastName: string;
  otherNames?: string;
  preferredName?: string;
  address?: string;
  postcode?: string;
  preferContact?: string;
  nino: string;
  crn: number;
  dateOfBirth: string;
  dateOfDeath: string;
  phone: { [key: string]: string };
  language: { [key: string]: string };
  behaviour?: string;
  gender?: string;
  notes?: Array<any>;
}
