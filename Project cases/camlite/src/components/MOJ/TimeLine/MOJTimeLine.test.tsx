import { fireEvent } from '@testing-library/react';
import { ConfigContext } from '../../../context/setGlobalDataContext';
import MOJTimeLine from './MOJTimeLine';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';

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
  Button: ({ ...args }) => {
    return <button {...args}></button>;
  },
}));

test('renders MOJTimeline', () => {
  testRender(
    <ConfigContext>
      <MOJTimeLine
        items={[{}, {}]}
        type={'case'}
        userId={'50034'}
        customersId={'10000'}
      />
    </ConfigContext>,
    container
  );
});

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test('renders MOJTimeline', () => {
  testRender(
    <ConfigContext>
      <MOJTimeLine
        items={[]}
        type={'case'}
        userId={'50034'}
        customersId={'10000'}
      />
    </ConfigContext>,
    container
  );
  fireEvent.click(container.querySelector('.element-addBtn'));
});
