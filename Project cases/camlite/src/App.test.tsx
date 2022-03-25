import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ConfigContext } from './context/setGlobalDataContext';

import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('govuk-react-jsx', () => ({
  MOJPrimaryNavigation: () => <></>,
  MOJButtonMenu: () => <></>,
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: () => <></>,
  Route: () => <></>,
  Switch: () => <></>,
}));

test('renders learn react link', () => {
  const { baseElement } = render(
    <Router>
      <ConfigContext>
        <App />
      </ConfigContext>
    </Router>
  );
  expect(baseElement).toBeInTheDocument();
});
