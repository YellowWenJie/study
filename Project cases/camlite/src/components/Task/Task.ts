import { Priority } from '../Case';

export enum TaskState {
  new = 'new',
  closed = 'closed',
  open = 'open',
  awaitDecision = 'awaiting decision',
  awaitEvidence = 'awaiting evidence',
}

export interface Task {
  id: number;
  createdOn: string;
  type: string;
  subType: string;
  state: TaskState;
  customerName: string;
  nino: string;
  crn: string;
  benefit: string;
  resolution: string;
  resolutionDate: string;
  dueDate: string;
  usersId: number;
  ownerName: string;
  claimId: string;
  casesId: number;
  priority: Priority;
}
