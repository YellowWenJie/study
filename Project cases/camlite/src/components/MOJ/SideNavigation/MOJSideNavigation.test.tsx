import { render } from '@testing-library/react';
import MOJSideNavigation from './MOJSideNavigation';

test('renders MOJSideNavigation', () => {
  const { baseElement } = render(<MOJSideNavigation />);
  expect(baseElement).toBeDefined();
});
