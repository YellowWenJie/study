/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import DetailsRelated from './DetailsRelated';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders DetailsRelated', () => {
  const linkItems = [
    { link: '/task-notes', title: 'View and add tasks notes' },
  ];

  const { baseElement } = render(
    <Router>
      <DetailsRelated buttonName={''} linkItems={linkItems} assign={''} />
    </Router>
  );
  expect(baseElement).toBeDefined();

  const linkElement = screen.getByText(/View and add tasks notes/i);
  expect(linkElement).toBeInTheDocument();
});

let container: any;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders DetailsRelated link', () => {
  const linkItems = [
    { link: '/task-notes', title: 'View and add tasks notes' },
  ];

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    testRender(
      <Router>
        <DetailsRelated buttonName={''} linkItems={linkItems} assign={''} />
      </Router>,
      container
    );
  });
  expect(
    container.querySelector("[href='/task-notes']").getAttribute('href')
  ).toEqual('/task-notes');
});
