import { screen } from '@testing-library/react';
import Router from 'react-router-dom';
import { testLeader, testCases, stateCases } from '../../helpers/test';
import ChangeCaseOwner from './ChangeCaseOwner';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import * as api from '../../services/API';
import { fireEvent } from '@testing-library/react';
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
jest.mock('govuk-react-jsx', () => ({
  BackLink: () => <></>,
  Label: () => <></>,
  Radios: ({ ...args }) => {
    return args.items.map((item: any) => {
      return <input className={item.value} {...args}></input>;
    });
  },
  Button: ({ ...args }) => {
    return <button className="save-element" {...args}></button>;
  },
}));
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
test('renders ChangeCaseOwner change Teams-queue', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ state: stateCases });
  jest.spyOn(api, 'updateCases').mockResolvedValue(testCases);
  act(() => {
    testRender(<ChangeCaseOwner user={testLeader} />, container);
  });
  fireEvent.click(container.querySelector('.Teams-queue'), {
    target: {
      type: 'radio',
      checked: true,
      name: 'owner',
      value: 'Teams-queue',
    },
  });
  fireEvent.click(container.querySelector('.save-element'));
});
test('renders ChangeCaseOwner change Teams-queue target type checkbox ', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ state: stateCases });
  jest.spyOn(api, 'updateCases').mockResolvedValue(testCases);
  act(() => {
    testRender(<ChangeCaseOwner user={testLeader} />, container);
  });
  fireEvent.click(container.querySelector('.Teams-queue'), {
    target: {
      type: 'checkbox',
      checked: true,
      name: 'owner',
      value: 'Teams-queue',
    },
  });
  fireEvent.click(container.querySelector('.save-element'));
});
test('renders ChangeCaseOwner change Teams-queue state null', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ state: '' });
  jest.spyOn(api, 'updateCases').mockResolvedValue(testCases);
  act(() => {
    testRender(<ChangeCaseOwner user={testLeader} />, container);
  });
  fireEvent.click(container.querySelector('.Teams-queue'), {});
  fireEvent.click(container.querySelector('.save-element'));
});
test('renders ChangeCaseOwner change Myself', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ state: stateCases });
  jest.spyOn(api, 'updateCases').mockResolvedValue(testCases);
  act(() => {
    testRender(<ChangeCaseOwner user={testLeader} />, container);
  });
  fireEvent.click(container.querySelector('.Myself'), {
    target: {
      type: 'radio',
      checked: true,
      name: 'owner',
      value: 'Myself',
    },
  });
  fireEvent.click(container.querySelector('.save-element'));
});
test('renders ChangeCaseOwner change Myself target type checkbox', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ state: stateCases });
  jest.spyOn(api, 'updateCases').mockResolvedValue(testCases);
  act(() => {
    testRender(<ChangeCaseOwner user={testLeader} />, container);
  });
  fireEvent.click(container.querySelector('.Myself'), {
    target: {
      type: 'checkbox',
      checked: true,
      name: 'owner',
      value: 'Myself',
    },
  });
  fireEvent.click(container.querySelector('.save-element'));
});
test('renders ChangeCaseOwner change Myself state null', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ state: '' });
  jest.spyOn(api, 'updateCases').mockResolvedValue(testCases);
  act(() => {
    testRender(<ChangeCaseOwner user={testLeader} />, container);
  });
  fireEvent.click(container.querySelector('.Myself'), {});
  fireEvent.click(container.querySelector('.save-element'));
});
