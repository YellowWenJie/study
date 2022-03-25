import React from 'react';
import { screen } from '@testing-library/react';
import { TaskView } from '../Task';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import Router from 'react-router-dom';
import {
  testCases,
  testCustomer2,
  testLeader,
  testTasks,
} from '../../helpers/test';
import { ConfigContext } from '../../context/setGlobalDataContext';
import * as api from '../../services/API';
// import * as CaseComp from '../Cases';

let container: any;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.spyOn(api, 'getTasks').mockResolvedValue(testTasks);
  jest.spyOn(api, 'getCases').mockResolvedValue(testCases);
  jest.spyOn(api, 'getCustomer').mockResolvedValue(testCustomer2);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('../Cases', () => ({
  CaseList: () => <></>,
}));

jest.mock('govuk-react-jsx', () => ({
  SummaryList: () => <></>,
  Breadcrumbs: () => <></>,
  Checkboxes: () => <></>,
  Tag: () => <></>,
}));

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

jest.mock('../Task/TaskTag', () => ({
  TaskTag: () => <></>,
}));

jest.mock('../Task/TaskForm', () => ({
  TaskForm: () => <></>,
}));

test('renders TaskView', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: '10013' });
  act(() => {
    testRender(
      <ConfigContext>
        <TaskView user={testLeader} />
      </ConfigContext>,
      container
    );
  });

  const linkElement = screen.getByText(/Task details/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TaskView', () => {
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
        <TaskView user={testLeader} />
      </ConfigContext>,
      container
    );
  });

  const linkElement = screen.getByText(/Task details/i);
  expect(linkElement).toBeInTheDocument();
});
