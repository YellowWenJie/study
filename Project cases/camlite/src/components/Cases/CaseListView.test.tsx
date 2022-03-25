import Router from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import CaseListView from './CaseListView';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import { ConfigContext } from '../../context/setGlobalDataContext';
import {
  testCases,
  testLeader,
  testLeader2,
  testTeam,
  testCase1,
} from '../../helpers/test';
import * as api from '../../services/API';

let container: any;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.spyOn(api, 'getUser').mockResolvedValue(testLeader2);
  jest.spyOn(api, 'getCases').mockResolvedValue(testCases);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: jest.fn(),
}));

jest.mock('govuk-react-jsx', () => ({
  Tag: () => <></>,
  Breadcrumbs: () => <></>,
  Input: ({ ...args }) => {
    return <input {...args} />;
  },
  Button: ({ ...args }) => {
    return <button {...args} />;
  },
}));

test('renders CaseListView, id = 10001, type = urgent, input = 1', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'urgent' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });

  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = outstanding', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'outstanding' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });

  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));
  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = new', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: 10001, type: 'new' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });

  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));
  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = open', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: 10001, type: 'open' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });

  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));
  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = closed', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'closed' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });
  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));
  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = assigned', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'assigned' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });

  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));
  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = unassigned', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'unassigned' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });
  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = 10001, type = brought-forward', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'brought-forward' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });
  fireEvent.change(await container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(container.querySelector('.btn'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView click, id = 10001, type = all', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: 10001, type: 'all' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });
  fireEvent.change(container.querySelector('.case-input'), {
    target: { value: '1' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(await container.querySelector('.btn'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView click, id = 10001, type = unassigned, input = 0', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 10001, type: 'unassigned' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  jest.spyOn(api, 'updateCases').mockResolvedValue([testCase1]);

  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });
  fireEvent.change(container.querySelector('.case-input'), {
    target: { value: '0' },
  });
  fireEvent.change(await container.querySelector('.case-inputs'), {
    target: { value: '10001' },
  });
  fireEvent.click(await container.querySelector('.btn'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders CaseListView, id = NaN', async () => {
  window.confirm = jest.fn().mockImplementation(() => true);
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: 'userID', type: 'all' });
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '/cases' });
  act(() => {
    testRender(
      <ConfigContext>
        <CaseListView user={testLeader} team={testTeam} />
      </ConfigContext>,
      container
    );
  });
});
