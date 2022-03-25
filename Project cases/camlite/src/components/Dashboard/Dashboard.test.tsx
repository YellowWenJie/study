import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { testLeader } from '../../helpers/test';
import { ConfigContext } from '../../context/setGlobalDataContext';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Dashboard', () => {
  render(
    <Router>
      <ConfigContext>
        <Dashboard me={testLeader} team={[]} />
      </ConfigContext>
    </Router>
  );
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
