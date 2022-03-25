import { render, fireEvent, screen } from '@testing-library/react';
import AssigningCases from './AssigningCases';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import Router from 'react-router-dom';
import * as api from '../../services/API';
import { testCases } from '../../helpers/test';

let container: any;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: jest.fn(),
    push: jest.fn(),
    location: {
      state: [{ id: '50034' }],
      pathname: '/tasks',
    },
  }),
  useRouteMatch: jest.fn(),
}));

jest.mock('govuk-react-jsx', () => ({
  BackLink: ({ ...args }) => {
    return <a data-testid="back" {...args}></a>;
  },
}));

test('renders AssigningCases', () => {
  jest.spyOn(Router, 'useRouteMatch').mockReturnValue({
    path: '/cases/assigning-cases',
    url: '/cases/assigning-cases',
  });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();
  fireEvent.click(screen.getByTestId('back'));
});

test('renders AssigningCases', () => {
  jest.spyOn(Router, 'useRouteMatch').mockReturnValue({ url: '/cases' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  act(() => {
    testRender(
      <AssigningCases
        title={'title'}
        subTitle={''}
        choices={[{ name: 'Makes', link: '/tasks', usersId: '50034' }]}
      />,
      container
    );
  });

  fireEvent.click(container.querySelector('.govuk-radios__input'));
});

test('renders AssigningCases', () => {
  window.confirm = jest.fn(() => true);
  jest.spyOn(Router, 'useRouteMatch').mockReturnValue({ url: '/cases' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);

  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
  expect(window.confirm).toBeCalled();
});

test('renders AssigningCases', () => {
  window.confirm = jest.fn(() => true);
  jest.spyOn(Router, 'useRouteMatch').mockReturnValue({ url: '/tasks' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases
      title={'title'}
      subTitle={''}
      choices={[{ link: 'or', name: 'Mas' }]}
    />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
  expect(window.confirm).toBeCalled();
});

test('renders AssigningCases', () => {
  jest
    .spyOn(Router, 'useRouteMatch')
    .mockReturnValue({ url: '/tasks/assigning-tasks-to-add-queue' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
});

test('renders AssigningCases', () => {
  jest
    .spyOn(Router, 'useRouteMatch')
    .mockReturnValue({ url: '/cases/assigning-cases-to-add-queue' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
});

test('renders AssigningCases', () => {
  jest
    .spyOn(Router, 'useRouteMatch')
    .mockReturnValue({ url: '/tasks/assigning-tasks-to-other-team' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
});

test('renders AssigningCases', () => {
  jest
    .spyOn(Router, 'useRouteMatch')
    .mockReturnValue({ url: '/cases/assigning-cases-to-other-team' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
});

test('renders AssigningCases', () => {
  jest
    .spyOn(Router, 'useRouteMatch')
    .mockReturnValue({ url: '/tasks/assigning-tasks-to-agent' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
});

test('renders AssigningCases', () => {
  jest
    .spyOn(Router, 'useRouteMatch')
    .mockReturnValue({ url: '/cases/assigning-cases-to-agent' });
  jest.spyOn(api, 'updateTasks').mockResolvedValue(testCases);
  const { baseElement } = render(
    <AssigningCases title={'title'} subTitle={''} choices={[]} />
  );
  expect(baseElement).toBeDefined();

  fireEvent.click(screen.getByText('Continue'));
});
