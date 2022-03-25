import { render, screen } from '@testing-library/react';
import MOJSortableTable from './MOJSortableTable';

test('renders MOJSortableTable', () => {
  render(<MOJSortableTable order={[]} items={[]} title="title" />);
  const linkElement = screen.getByText('title');
  expect(linkElement).toBeInTheDocument();
});
