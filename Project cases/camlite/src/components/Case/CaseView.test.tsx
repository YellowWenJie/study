import React from 'react';
import { screen } from '@testing-library/react';
import { CaseView } from '../Case';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import Router from 'react-router-dom';
import {
  testLeader,
  testCustomer2,
  testCases,
  testTasks,
} from '../../helpers/test';
import { ConfigContext } from '../../context/setGlobalDataContext';
import * as api from '../../services/API';

let container: any;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.spyOn(api, 'getTasks').mockResolvedValue(testTasks);

  jest.spyOn(api, 'getCustomer').mockResolvedValue(testCustomer2);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('../Tasks', () => ({
  TaskList: () => <></>,
}));

jest.mock('../Case/CaseTag', () => ({
  TaskTag: () => <></>,
}));

jest.mock('../Case/CaseForm', () => ({
  CaseForm: () => <></>,
}));

jest.mock('govuk-react-jsx', () => ({
  SummaryList: () => <></>,
  Breadcrumbs: () => <></>,
  Checkboxes: ({ ...args }) => <input type="checkbox" {...args} />,
  Tag: () => <></>,
}));

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

test('renders CaseView', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: '10013' });
  jest.spyOn(api, 'getCases').mockResolvedValue(testCases);
  act(() => {
    testRender(
      <ConfigContext>
        <CaseView user={testLeader} />
      </ConfigContext>,
      container
    );
  });

  const linkElement = screen.getByText(/Case details/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders CaseView priorityTag', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: '10013' });
  jest.spyOn(api, 'getCases').mockResolvedValue([
    {
      priority: '',
      crn: 'crn',
    },
  ]);
  act(() => {
    testRender(
      <ConfigContext>
        <CaseView user={testLeader} />
      </ConfigContext>,
      container
    );
  });

  const linkElement = screen.getByText(/Case details/i);
  expect(linkElement).toBeInTheDocument();
});
