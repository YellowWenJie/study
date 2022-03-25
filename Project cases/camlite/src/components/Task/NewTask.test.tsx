import { render } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import { testLeader } from '../../helpers/test';
import NewTask from './NewTask';
import Router from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

jest.mock('govuk-react-jsx', () => ({
  Breadcrumbs: () => <></>,
  Input: () => <></>,
  DateInput: () => <></>,
  Fieldset: () => <></>,
  Button: () => <></>,
  Select: () => <></>,
  Textarea: () => <></>,
  Label: () => <></>,
  Hint: () => <></>,
  Checkboxes: () => <></>,
}));

test('renders NewTask component', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: '12345' });
  const { baseElement } = render(<NewTask user={testLeader} />);
  expect(baseElement).toBeDefined();
});
