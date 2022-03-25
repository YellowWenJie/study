import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemStatusView, { ItemProps } from './ItemStatusView';

const items: ItemProps = {
  outstanding: { cases: 2, tasks: 4 },
  returned: { cases: 5, tasks: 4 },
  forward: { cases: 0, tasks: 3 },
  ccto: { cases: 5, tasks: 0 },
  closedToday: { cases: 7, tasks: 9 },
  total: { cases: 20, tasks: 3 },
};

test('renders ItemStatusView as Team leader', () => {
  render(<ItemStatusView items={items} isTeam={true} />);
  const linkElement = screen.getByText(/Total/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ItemStatusView as Agent', () => {
  render(<ItemStatusView items={items} />);
  const linkElement = screen.getByText(/Total/i);
  expect(linkElement).toBeInTheDocument();
});

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
}));
