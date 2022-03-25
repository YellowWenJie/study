export enum CaseState {
  new = 'new',
  closed = 'closed',
  open = 'open',
  unassigned = 'unassigned',
  awaitDecision = 'awaiting decision',
  awaitEvidence = 'awaiting evidence',
}

export enum Priority {
  normal = '',
  urgent = 'urgent',
}

export interface Case {
  id: number;
  createdOn: string;
  type: string;
  subType: string;
  state: CaseState;
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
