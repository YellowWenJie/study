import { render } from '@testing-library/react';
import MOJPagination from './MOJPagination';

test('renders MOJPagination', () => {
  const { baseElement } = render(<MOJPagination />);
  expect(baseElement).toBeDefined();
});
