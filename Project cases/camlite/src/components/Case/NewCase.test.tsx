import { render } from '@testing-library/react';
import { testLeader } from '../../helpers/test';
import NewCase from './NewCase';
import Router from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
  useParams: jest.fn(),
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
}));

test('renders NewCase component', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: '12344' });
  const { baseElement } = render(<NewCase user={testLeader} />);
  expect(baseElement).toBeDefined();
});
