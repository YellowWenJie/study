import { render } from '@testing-library/react';
import MOJPrimaryNavigation from './MOJPrimaryNavigation';

test('renders MOJPrimaryNavigation', () => {
  const { baseElement } = render(
    <MOJPrimaryNavigation items={[]} changeActive={() => {}} />
  );
  expect(baseElement).toBeDefined();
});
