import React from 'react';
import { render, screen } from '@testing-library/react';
import Stub from './Stub';

test('renders Team', () => {
  render(<Stub title={'Stub'} />);
  const linkElement = screen.getByText(/Stub/i);
  expect(linkElement).toBeInTheDocument();
});
