import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import { testLeader, testTeam, testCustomer } from '../../helpers/test';
import { Task } from '../Task';
import { Case } from '../Case/Case';
import CustomerView from './CustomerView';

const task = {
  id: 10013,
  createdOn: 'createdOn',
  type: 'type',
  subType: '  subType: ',
  state: {
    closed: 'closed',
    open: 'open',
    unassigned: 'unassigned',
    awaitDecision: 'awaiting decision',
    awaitEvidence: 'sss',
  },
  customerName: 'customerName',
  nino: 'nino',
  crn: 'crn',
  benefit: 'benefit',
  resolution: 'resolution',
  resolutionDate: 'resolutionDate',
  dueDate: 'dueDate',
  usersId: 50032,
  ownerName: 'ownerName',
  claimId: 'claimId',
  casesId: 50013,
  priority: {
    normal: '',
    urgent: 'ss',
  },
} as unknown as Task;

const Cases = {
  id: 10013,
  createdOn: 'createdOn',
  type: 'type',
  subType: '  subType: ',
  state: {
    closed: 'closed',
    open: 'open',
    unassigned: 'unassigned',
    awaitDecision: 'awaiting decision',
    awaitEvidence: 'sss',
  },
  customerName: 'customerName',
  nino: 'nino',
  crn: 'crn',
  benefit: 'benefit',
  resolution: 'resolution',
  resolutionDate: 'resolutionDate',
  dueDate: 'dueDate',
  usersId: 50032,
  ownerName: 'ownerName',
  claimId: 'claimId',
  casesId: 50013,
  priority: {
    normal: '',
    urgent: 'ss',
  },
} as unknown as Case;

describe('Test new case/new task Link', () => {
  test('renders CustomerView task Cases', () => {
    render(
      <MemoryRouter>
        <Route>
          <CustomerView
            user={testLeader}
            team={testTeam}
            customer={testCustomer}
            cases={[Cases]}
            tasks={[task]}
          />
        </Route>
      </MemoryRouter>
    );
    const newCaseLink = screen.getByText(/Create new case/i);
    const newTaskLink = screen.getByText(/Create new task/i);
    expect(newCaseLink).toBeInTheDocument();
    expect(newTaskLink).toBeInTheDocument();
  });

  test('renders CustomerView', () => {
    render(
      <MemoryRouter>
        <Route>
          <CustomerView
            user={testLeader}
            team={testTeam}
            customer={undefined}
            cases={[]}
            tasks={[]}
          />
        </Route>
      </MemoryRouter>
    );
  });
});
