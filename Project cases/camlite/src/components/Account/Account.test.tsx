import React from 'react';
import { render, screen } from '@testing-library/react';
import Account from './Account';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Account', () => {
  render(
    <Router>
      <Account />
    </Router>
  );

  const linkElement = screen.getByText(/account/i);
  expect(linkElement).toBeInTheDocument();
});
