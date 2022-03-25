import { Case, CaseState, CaseTag, Priority } from '../components/Case';
import { Task, TaskState, TaskTag } from '../components/Task';
import { HeadCol } from '../components/MOJ/SortableTable/MOJTableHeader';

const caseFilter = {
  new: (i: Case) => i.state === CaseState.new,
  open: (i: Case) => i.state === CaseState.open,
  closed: (i: Case) => i.state === CaseState.closed,
  outstanding: (i: Case) => i.state !== CaseState.closed,
  returned: (i: Case) => false,
  assigned: (i: Case) => i.usersId !== null && caseFilter.outstanding(i),
  unassigned: (i: Case) => i.usersId === null,
  broughtForward: (i: Case) => false,
  urgent: (i: Case) => i.priority !== Priority.normal,
};

const taskFilter = {
  new: (i: Task) => i.state === TaskState.new,
  open: (i: Task) => i.state === TaskState.open,
  closed: (i: Task) => i.state === TaskState.closed,
  outstanding: (i: Task) => i.state !== TaskState.closed,
  returned: (i: Task) => false,
  assigned: (i: Task) => i.usersId !== null && taskFilter.outstanding(i),
  unassigned: (i: Task) => i.usersId === null,
  broughtForward: (i: Task) => false,
  urgent: (i: Task) => i.priority !== Priority.normal,
};

function teamColor(state: string) {
  switch (state) {
    case 'Available':
      return 'green';
    default:
      return 'red';
  }
}

const caseCols: { [key: string]: HeadCol } = {
  createdOn: { text: 'Created On', href: '/case/', format: 'date' },
  type: { text: 'Type' },
  subType: { text: 'Sub-type' },
  state: {
    text: 'Status',
    translate: (value: any) => {
      return CaseTag(value);
    },
  },
  customerName: { text: 'Customer Name' },
  nino: { text: 'National Insurance Number' },
  crn: { text: 'CRN', href: '/customer/' },
  benefit: { text: 'Benefit' },
  resolution: { text: 'Case Resolution' },
  resolutionDate: { text: 'Case Resolution Selected On', format: 'date' },
  dueDate: { text: 'Due Date', format: 'date' },
  usersId: { text: 'Owner ID', href: '/user/', format: 'numeric' },
  ownerName: { text: 'Owner Name' },
  claimId: { text: 'Claim ID', format: 'numeric' },
  id: { text: 'Case ID', href: '/case/', format: 'numeric' },
  priority: {
    text: 'Urgent',
    translate: (value: string) => (value === Priority.urgent ? 'Yes' : 'No'),
  },
};

const caseColumnOrder = [
  'id',
  'createdOn',
  'type',
  'subType',
  'customerName',
  'nino',
  'crn',
  'state',
  'benefit',
  'resolution',
  'resolutionDate',
  'dueDate',
  'usersId',
  'ownerName',
  'claimId',
  'priority',
];

const taskCols = {
  createdOn: { text: 'Created On', href: '/task/', format: 'date' },
  type: { text: 'Type' },
  subType: { text: 'Sub-type' },
  state: {
    text: 'Status',
    translate: (value: any) => {
      return TaskTag(value);
    },
  },
  customerName: { text: 'Customer Name' },
  nino: { text: 'National Insurance Number' },
  crn: { text: 'CRN', href: '/customer/' },
  benefit: { text: 'Benefit' },
  resolution: { text: 'Case Resolution' },
  resolutionDate: { text: 'Case Resolution Selected On', format: 'date' },
  dueDate: { text: 'Due Date', format: 'date' },
  usersId: { text: 'Owner ID', href: '/user/', format: 'numeric' },
  ownerName: { text: 'Owner Name' },
  claimId: { text: 'Claim ID', format: 'numeric' },
  casesId: { text: 'Case ID', href: '/case/', format: 'numeric' },
  id: { text: 'Task ID', href: '/task/', format: 'numeric' },
  priority: {
    text: 'Urgent',
    translate: (value: string) => (value === Priority.urgent ? 'Yes' : 'No'),
  },
};

const taskColumnOrder = [
  'id',
  'createdOn',
  'type',
  'subType',
  'customerName',
  'nino',
  'crn',
  'state',
  'benefit',
  'resolution',
  'resolutionDate',
  'dueDate',
  'usersId',
  'ownerName',
  'claimId',
  'casesId',
  'priority',
];

enum CamEventType {
  caseNew,
  caseOpened,
  caseClosed,
  taskOpened,
  taskClosed,
}

interface CamEvent {
  type: CamEventType;
  usersId: number;
  date: Date;
}

export type { CamEvent };
export {
  teamColor,
  caseFilter,
  taskFilter,
  taskCols,
  taskColumnOrder,
  caseCols,
  caseColumnOrder,
  CamEventType,
};
