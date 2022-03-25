import AddNote from './AddNote';
import { render } from '@testing-library/react';
import { ConfigContext } from '../../../context/setGlobalDataContext';
import Router from 'react-router-dom';

jest.mock('govuk-react-jsx', () => ({
  BackLink: () => <></>,
  Textarea: () => <></>,
  Label: () => <></>,
  Hint: () => <></>,
  Button: () => <></>,
}));

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

test('renders AddNote', () => {
  jest
    .spyOn(Router, 'useParams')
    .mockReturnValue({ id: '12345', type: 'case' });

  const { baseElement } = render(
    <ConfigContext>
      <AddNote />
    </ConfigContext>
  );
  expect(baseElement).toBeDefined();
});
