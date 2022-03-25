import React from 'react';
import { render, screen } from '@testing-library/react';
import UserStatsView, { UserInfo } from './UserStatsView';
import { BrowserRouter as Router } from 'react-router-dom';

const stats: Array<UserInfo> = [
  {
    name: 'David Francis',
    id: 1,
    events: [],
  },
  {
    name: 'Paul Farmer',
    id: 2,
    events: [],
  },
  {
    name: 'Rita Patel',
    id: 3,
    events: [],
  },
];

const singleStats = [stats[0]];

test('UserStatsView - no data', () => {
  render(
    <Router>
      <UserStatsView userStats={[]} />
    </Router>
  );
  const linkElement = screen.getByText(/No User Data/i);
  expect(linkElement).toBeInTheDocument();
});

jest.mock('govuk-react-jsx', () => ({
  Tabs: () => <></>,
}));
