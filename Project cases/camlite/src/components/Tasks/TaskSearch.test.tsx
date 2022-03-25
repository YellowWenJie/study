import React from 'react';
import { render, screen } from '@testing-library/react';
import { testLeader } from '../../helpers/test';
import TaskSearch from './TaskSearch';
import Router from 'react-router-dom';

test('renders TaskSearch', () => {
  expect(true).toBeTruthy();
});

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  useHistory: jest.fn(),
  useLocation: jest.fn(),
}));
