import Note from './Note';
import { render } from '@testing-library/react';
import { ConfigContext } from '../../context/setGlobalDataContext';
import Router from 'react-router-dom';

jest.mock('govuk-react-jsx', () => ({
  Breadcrumbs: () => <></>,
}));

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

test('renders Note', () => {
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: '12345', type: 'case' });

  const { baseElement } = render(
    <ConfigContext>
      <Note />
    </ConfigContext>
  );
  expect(baseElement).toBeDefined();
});
